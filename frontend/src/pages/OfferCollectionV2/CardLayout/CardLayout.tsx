import React, {FC, MouseEvent, useEffect, useState} from 'react';
import styles from './CardLayout.module.scss';
import { BadgeRating, Button, GMap, Text } from '@/shared/ui';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import {
  AgentInfo,
  Estate,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import {
  Heart,
  IconLayout,
  IconHeart,
  IconMapPinFilled,
  VectorRating, IconFileTypePdf, IconChevronDown,
} from '@/shared/assets/icons';
import { useIntl } from 'react-intl';
import { Flats } from '../CommonComponents/Flats/Flats';
import { PaymentStepper } from '@/entities/PaymentStepper/PaymentStepper';
import { EstateOptionsInfo } from '../CommonComponents/EstateOptionsInfo/EstateOptionsInfo';
import { Progresses } from '../CommonComponents/Progress/Progresses';
import { Slider } from '../CommonComponents/Slider/Slider';
import { TablesInfo } from '@/pages/OfferCollectionV2/CommonComponents/TablesInfo/TablesInfo';
import { InfoModal } from '@/shared/ui/modals';
import { useSearchParams } from 'react-router';
import { UnitsSlider } from '@/pages/OfferCollectionV2/CommonComponents/UnitsSlider/UnitsSlider';
import { UnitSlide } from '@/pages/OfferCollectionV2/CommonComponents/UnitsSlider/UnitSlide';
import MaterialMenu from "@mui/material/Menu";
import MaterialMenuItem from "@mui/material/MenuItem";
import {useWindowResize} from "@/shared/utils/useWindowResize";

function getPrioritySquare(estate: Estate): string {
  const layouts = [
    'villaFive',
    'villaFour',
    'villaThree',
    'villaTwo',
    'five',
    'four',
    'three',
    'two',
    'studio',
    'one',
  ] as const;
  const fields = ['min', 'max', 'avg'] as const;

  for (const layout of layouts) {
    const squareObj = estate.roomLayouts?.[layout]?.square;

    if (squareObj) {
      for (const field of fields) {
        if (squareObj[field] !== undefined && squareObj[field] !== null) {
          return squareObj[field]?.toString();
        }
      }
    }
  }
  return '110';
}

export type CardLayoutProps = {
  estate: Estate & { collection: string; collectionId: string; agentInfo?: AgentInfo, visible: boolean, checked: boolean, presentation: boolean };
};

export const CardLayout: FC<CardLayoutProps> = ({ estate }) => {
  const { formatMessage } = useIntl();
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);
  const openLanguage = Boolean(anchorElLanguage);
  const { width } = useWindowResize();
  const [like, setLike] = useState(false);
  const [square, setSquare] = useState('100');
  const [token, setToken] = useState<string | undefined | null>(localStorage.getItem('basicToken'));
  const handleClickLikeButton = () => {
    setLike(!like);
  };
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };

  const openRatingInfo = () => {
    setInfoTitle(formatMessage({ id: 'object_info_title' }));
    setInfoText(formatMessage({ id: 'object_info_message' }));
    setIsDelete(false);
    handleOpenInfoModal();
  };
  const clickable =
    localStorage.getItem('basicToken') !== null &&
    localStorage.getItem('basicToken') !== undefined &&
    localStorage.getItem('basicToken') !== '';
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSquare(getPrioritySquare(estate));
    setToken(localStorage.getItem('basicToken'));
  }, []);

  const deleteFromCollection = () => {
    estateCollectionApi
      .deleteFromCollection(token!!, estate.collectionId!!, estate.id)
      .then(() => {
        setInfoTitle(formatMessage({ id: 'object_delete_title' }));
        setInfoText(formatMessage({ id: 'object_delete_message' }));
        handleOpenInfoModal();
      })
      .catch((e) => console.log(e));
    setIsDelete(true);
  };

  useEffect(() => {
    if (like) {
      estateCollectionApi
        .saveLike({
          collection: estate.collection,
          collectionId: estate.collectionId!!,
          email: estate.agentInfo?.login ?? 'arturmirov777@gmail.com',
          title: estate.name,
          url: window.location.href,
          estateId: estate.id,
        })
        .then(() => console.log('success like'))
        .catch(() => console.log('error like'));
    }
  }, [like]);

  const getGroupColor = () => {
    if (estate?.agentInfo?.collectionColorValue) {
      return estate?.agentInfo?.collectionColorValue;
    }
    switch (estate?.agentInfo?.group) {
      case "extra":
        return "#FF8B57";
      default:
        return ""
    }
  }

  const handleOpenLanguage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(null);
  };

  const handleCloseLanguageRus = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(null);
    openPresentation('RUS');
  };

  const handleCloseLanguageEng = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(null);
    openPresentation('ENG');
  };

  const openPresentation = (lang: string) => {
    window.open(`https://lotsof.properties/estate-images/${estate.projectId}_${lang}.pdf`);
  };

  return (
    <section className={styles.grid}>
      <div className={styles.slider}>
        {(!!estate.location?.mapUrl && estate.visible) && (
          <div className={styles.slider__map}>
            <GMap
                url={estate.location?.mapUrl}
                zoom={16}
                latitude={estate.lat ? Number(estate.lat) : undefined}
                longitude={estate.lon ? Number(estate.lon) : undefined}
            />
          </div>
        )}
        <Slider
          images={
            estate.visible ? estate.exteriorImages || estate.interiorImages || estate.facilityImages || [DEFAULT_IMG]
                : [(estate.exteriorImages || estate.interiorImages || estate.facilityImages || [DEFAULT_IMG])[0]]
          }
        />
      </div>
      <div className={styles.description}>
        <div className={styles.badges} onClick={openRatingInfo}>
          {/*<BadgeRating*/}
          {/*  icon={<VectorRating />}*/}
          {/*  size="sm"*/}
          {/*  text={estate.grade?.main ? `${estate.grade?.main.toPrecision(2)}` : '9'}*/}
          {/*  background="primary"*/}
          {/*/>*/}
          <BadgeRating
            icon={<IconMapPinFilled />}
            size="sm"
            text={estate.location?.beach || ''}
            background="white"
          />
          {estate.likes ? (
            <BadgeRating
              icon={<Heart />}
              size="sm"
              text={`${estate.likes || '0'}`}
              background="white"
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.header__wrapper}>
          <Text className={styles.header} variant="heading2">
            {estate.name}
          </Text>
        </div>
        <Text as="p" variant="body2" className={styles.text}>
          {localStorage.getItem('language') === 'en'
            ? estate.shortDescriptionEn
            : estate.shortDescriptionRu}
        </Text>
        <div className={styles.delete}>
          {clickable && !searchParams.get('client') && estate.visible ? (
            <Button
                onClick={deleteFromCollection}
                size="s"
                style={{
                  backgroundColor: getGroupColor()
                }}
            >
              <Text variant="body1">{formatMessage({ id: 'remove_button' })}</Text>
            </Button>
          ) : (
            <></>
          )}
          {clickable && !searchParams.get('client') ? (
            <></>
          ) : (
            <Button
              onClick={handleClickLikeButton}
              className={styles.like}
              disabled={!!searchParams.get('client') && searchParams.get('like') != 'true'}
              variant="cta"
              size={'s'}
              style={{
                width: '180px',
              }}
            >
              <span className={styles.like__icon}>{like ? <Heart /> : <IconHeart />}</span>
              <Text variant="body1" bold>
                {formatMessage({ id: 'like' })}
              </Text>
            </Button>
          )}

          {estate.presentation ?
          <Button
              variant="base"
              type="button"
              size="s"
              onClick={handleOpenLanguage}
          >
            <Text variant="body1" bold>
              {formatMessage({ id: 'developer_presentation_download_p' })}
            </Text>
            <MaterialMenu
                classes={{ paper: styles.menu__paper }}
                className={styles.menu}
                open={openLanguage}
                anchorEl={anchorElLanguage}
                onClose={handleCloseLanguage}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: width >= 1200 ? 'right' : 'center',
                }}
                transformOrigin={{
                  vertical: -8,
                  horizontal: width >= 1200 ? 'right' : 'center',
                }}
            >
              <MaterialMenuItem
                  classes={{ root: styles.menu__item_root }}
                  onClick={handleCloseLanguageRus}
              >
                <Text variant="body2" bold>
                  {formatMessage({ id: 'developer_presentation_ru' })}
                </Text>
              </MaterialMenuItem>
              <MaterialMenuItem
                  classes={{ root: styles.menu__item_root }}
                  onClick={handleCloseLanguageEng}
              >
                <Text variant="body2" bold>
                  {formatMessage({ id: 'developer_presentation_en' })}
                </Text>
              </MaterialMenuItem>
            </MaterialMenu>
          </Button> : <></>
          }
        </div>
      </div>
      <div className={styles.flats}>
        {!!estate.units?.length ? (
          <UnitsSlider
            slides={estate.units.map((unit) => (
              <div key={unit.id}>
                <UnitSlide unit={unit} estate={estate} />
              </div>
            ))}
          />
        ) : (
          <Flats {...estate.roomLayouts} />
        )}
      </div>

      <div className={styles.paymentPlan}>
        {!!estate.paymentPlanList && <PaymentStepper steps={estate.paymentPlanList} />}
        <div className={styles.options}>
          <EstateOptionsInfo {...estate.options} />
        </div>
      </div>
      <div className={styles.info}>
        <TablesInfo
          tables={[
            {
              items: estate.checked ? [
                {
                  name: formatMessage({ id: 'completion_date' }),
                  description: estate.buildEndDate,
                },
                {
                  name: formatMessage({ id: 'roiSummary' }),
                  description: `${estate.profitability?.roi || 10}%`,
                },
                {
                  name: formatMessage({ id: 'roi' }),
                  description: `${estate.profitability?.roiSummary || 200}%`,
                },
                {
                  name: formatMessage({ id: 'irr' }),
                  description: `${estate.profitability?.irr || 13}%`,
                },
                {
                  name: formatMessage({ id: 'capRateFirstYear' }),
                  description: `${estate.profitability?.capRateFirstYear || 5}%`,
                },
              ] : [
                {
                  name: formatMessage({ id: 'completion_date' }),
                  description: estate.buildEndDate,
                }
              ],
            },
            {
              items: [
                {
                  name:
                    estate.city === 'Bangkok'
                      ? formatMessage({ id: 'subway' })
                      : formatMessage({ id: 'beach' }),
                  description: `${
                    estate?.infrastructure?.beachTime?.car ||
                    estate?.infrastructure?.beachTime?.walk ||
                    5
                  } ${formatMessage({ id: 'min' })}`,
                },
                {
                  name: formatMessage({ id: 'mall' }),
                  description: `${
                    estate?.infrastructure?.mallTime?.car ||
                    estate?.infrastructure?.mallTime?.walk ||
                    30
                  } ${formatMessage({ id: 'min' })}`,
                },
                {
                  name: formatMessage({ id: 'airport' }),
                  description: `${
                    estate.infrastructure?.airportTime?.car ||
                    estate.infrastructure?.airportTime?.walk ||
                    30
                  } ${formatMessage({ id: 'min' })}`,
                },
              ],
            },
          ]}
        />
      </div>
      {/*<div className={styles.progress}>*/}
      {/*  <Progresses*/}
      {/*    items={[*/}
      {/*      {*/}
      {/*        value: estate.grade?.investmentSecurity || 9,*/}
      {/*        label: formatMessage({ id: 'security' }),*/}
      {/*        icon: <VectorRating />,*/}
      {/*        min: 0,*/}
      {/*        max: 10,*/}
      {/*      },*/}
      {/*      {*/}
      {/*        value: estate.grade?.projectLocation || 9,*/}
      {/*        label: formatMessage({ id: 'project_location' }),*/}
      {/*        icon: <VectorRating />,*/}
      {/*        min: 0,*/}
      {/*        max: 10,*/}
      {/*      },*/}
      {/*      {*/}
      {/*        value: estate.grade?.investmentPotential || 9,*/}
      {/*        label: formatMessage({ id: 'invest_potential' }),*/}
      {/*        icon: <VectorRating />,*/}
      {/*        min: 0,*/}
      {/*        max: 10,*/}
      {/*      },*/}
      {/*      {*/}
      {/*        value: estate.grade?.comfortOfLife || 9,*/}
      {/*        label: formatMessage({ id: 'comfort' }),*/}
      {/*        icon: <VectorRating />,*/}
      {/*        min: 0,*/}
      {/*        max: 10,*/}
      {/*      },*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</div>*/}
      <InfoModal
        open={infoModal}
        setOpen={setInfoModal}
        title={infoTitle}
        text={infoText}
        withReload
      />
    </section>
  );
};
