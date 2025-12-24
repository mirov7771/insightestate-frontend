import React, {FC, MouseEvent, useEffect, useState} from 'react';
import { BadgeRating, Button, GMap } from '@/shared/ui';
import {
  VectorRating,
  IconMapPinFilled,
  Heart,
  IconHeart,
  IconFileTypePdf,
  IconChevronDown
} from '@/shared/assets/icons';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router';
import { Text } from '@/shared/ui';
import styles from './Card.module.scss';
import {
  AgentInfo,
  Estate,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { InfoModal } from '@/shared/ui/modals';
import { Slider } from '../CommonComponents/Slider/Slider';
import { Progresses } from '../CommonComponents/Progress/Progresses';
import { Flats } from '@/pages/OfferCollectionV2/CommonComponents/Flats/Flats';
import { TablesInfo } from '@/pages/OfferCollectionV2/CommonComponents/TablesInfo/TablesInfo';
import { EstateOptionsInfo } from '@/pages/OfferCollectionV2/CommonComponents/EstateOptionsInfo/EstateOptionsInfo';
import { PaymentStepper } from '@/entities/PaymentStepper/PaymentStepper';
import { UnitsSlider } from '@/pages/OfferCollectionV2/CommonComponents/UnitsSlider/UnitsSlider';
import { UnitSlide } from '@/pages/OfferCollectionV2/CommonComponents/UnitsSlider/UnitSlide';
import MaterialMenu from "@mui/material/Menu";
import MaterialMenuItem from "@mui/material/MenuItem";
import {useWindowResize} from "@/shared/utils/useWindowResize";

export const Card: FC<
  Estate & { collection: string; collectionId: string; agentInfo?: AgentInfo, visible: boolean, checked: boolean, presentation: boolean }
> = (estate) => {
  const { formatMessage } = useIntl();
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
  const handleCloseInfoModal = () => {
    setInfoModal(false);
    if (isDelete) window.location.reload();
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
    setSquare(
      estate.roomLayouts?.villaFive?.square?.min ||
        estate.roomLayouts?.villaFive?.square?.max ||
        estate.roomLayouts?.villaFive?.square?.avg ||
        estate.roomLayouts?.villaFour?.square?.min ||
        estate.roomLayouts?.villaFour?.square?.max ||
        estate.roomLayouts?.villaFour?.square?.avg ||
        estate.roomLayouts?.villaThree?.square?.min ||
        estate.roomLayouts?.villaThree?.square?.max ||
        estate.roomLayouts?.villaThree?.square?.avg ||
        estate.roomLayouts?.villaTwo?.square?.min ||
        estate.roomLayouts?.villaTwo?.square?.max ||
        estate.roomLayouts?.villaTwo?.square?.avg ||
        estate.roomLayouts?.five?.square?.min ||
        estate.roomLayouts?.five?.square?.max ||
        estate.roomLayouts?.five?.square?.avg ||
        estate.roomLayouts?.four?.square?.min ||
        estate.roomLayouts?.four?.square?.max ||
        estate.roomLayouts?.four?.square?.avg ||
        estate.roomLayouts?.three?.square?.min ||
        estate.roomLayouts?.three?.square?.max ||
        estate.roomLayouts?.three?.square?.avg ||
        estate.roomLayouts?.two?.square?.min ||
        estate.roomLayouts?.two?.square?.max ||
        estate.roomLayouts?.two?.square?.avg ||
        estate.roomLayouts?.studio?.square?.min ||
        estate.roomLayouts?.studio?.square?.max ||
        estate.roomLayouts?.studio?.square?.avg ||
        estate.roomLayouts?.one?.square?.min ||
        estate.roomLayouts?.one?.square?.max ||
        estate.roomLayouts?.one?.square?.avg ||
        '110'
    );
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
        .catch((e) => console.log('error like'));
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

  const handleOpenLanguage = () => {
    openPresentation('ENG');
  };

  const openPresentation = (lang: string) => {
    window.open(`https://lotsof.properties/estate-images/${estate.projectId}_${lang}.pdf`);
  };

  return (
    <section className={styles.item}>
      <div className={styles.slider}>
        {!!estate.location?.mapUrl && (
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
            estate.exteriorImages || estate.interiorImages || estate.facilityImages || [DEFAULT_IMG]
          }
          noClick={false}
        />
      </div>
      <div className={styles.wrapper}>
        {/*  Main Info */}
        <section>
          {/*Rating*/}
          <div className={styles.badges} onClick={openRatingInfo}>
            {/*<BadgeRating*/}
            {/*  icon={*/}
            {/*    <span className={styles.icon}>*/}
            {/*      <VectorRating />*/}
            {/*    </span>*/}
            {/*  }*/}
            {/*  size="sm"*/}
            {/*  text={estate.grade?.main ? `${estate.grade?.main.toPrecision(2)}` : '9'}*/}
            {/*  background="primary"*/}
            {/*/>*/}
            <BadgeRating
              icon={
                <span className={`${styles.icon} ${styles.icon__primary}`}>
                  <IconMapPinFilled />
                </span>
              }
              size="sm"
              text={estate.location?.beach || ''}
              background="white"
            />
            {estate.likes ? (
              <BadgeRating
                icon={
                  <span className={`${styles.icon} ${styles.icon__primary}`}>
                    <Heart />
                  </span>
                }
                size="sm"
                text={`${estate.likes || '0'}`}
                background="white"
              />
            ) : (
              <></>
            )}
          </div>
          {/*Name and Price*/}
          <div className={styles.header__wrapper}>
            <Text className={styles.header} variant="heading2">
              {estate.name}
            </Text>
            <Text as="p" variant="body2" className={styles.text}>
              {localStorage.getItem('language') === 'en'
                ? estate.shortDescriptionEn
                : estate.shortDescriptionRu}
            </Text>
          </div>
        </section>
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
        {!!estate.paymentPlanList && <PaymentStepper steps={estate.paymentPlanList} />}
        <EstateOptionsInfo {...estate.options} />
        <div className={styles.main}>
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
          {/*Map*/}
          {!!estate.location?.mapUrl && (
            <section className={styles.map}>
              <GMap
                url={estate.location.mapUrl}
                mapContainerStyle={{ width: '100%', height: '320px' }}
                longitude={estate.lon ? Number(estate.lon) : undefined}
                latitude={estate.lat ? Number(estate.lat) : undefined}
              />
            </section>
          )}
          {/*<Progresses*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      value: estate.grade?.investmentSecurity || 9,*/}
          {/*      label: formatMessage({ id: 'security' }),*/}
          {/*      icon: (*/}
          {/*        <span className={styles.icon}>*/}
          {/*          <VectorRating />*/}
          {/*        </span>*/}
          {/*      ),*/}
          {/*      min: 0,*/}
          {/*      max: 10,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      value: estate.grade?.projectLocation || 9,*/}
          {/*      label: formatMessage({ id: 'project_location' }),*/}
          {/*      icon: (*/}
          {/*        <span className={styles.icon}>*/}
          {/*          <VectorRating />*/}
          {/*        </span>*/}
          {/*      ),*/}
          {/*      min: 0,*/}
          {/*      max: 10,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      value: estate.grade?.investmentPotential || 9,*/}
          {/*      label: formatMessage({ id: 'invest_potential' }),*/}
          {/*      icon: (*/}
          {/*        <span className={styles.icon}>*/}
          {/*          <VectorRating />*/}
          {/*        </span>*/}
          {/*      ),*/}
          {/*      min: 0,*/}
          {/*      max: 10,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      value: estate.grade?.comfortOfLife || 9,*/}
          {/*      label: formatMessage({ id: 'comfort' }),*/}
          {/*      icon: (*/}
          {/*        <span className={styles.icon}>*/}
          {/*          <VectorRating />*/}
          {/*        </span>*/}
          {/*      ),*/}
          {/*      min: 0,*/}
          {/*      max: 10,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
          {clickable && !searchParams.get('client') ? (
            <></>
          ) : (
            <Button
              onClick={handleClickLikeButton}
              className={styles.like}
              variant="cta"
              size="s"
              disabled={!!searchParams.get('client') && searchParams.get('like') != 'true'}
            >
              <span className={styles.like__icon}>{like ? <Heart /> : <IconHeart />}</span>
              <Text variant="heading4">{formatMessage({ id: 'like' })}</Text>
            </Button>
          )}

          {estate.presentation ? <Button
              variant="base"
              type="button"
              size="s"
              style={{
                margin: 'auto',
                width: '80%',
              }}
              onClick={handleOpenLanguage}
          >
            <Text variant="body1" bold>
              {formatMessage({ id: 'developer_presentation_download_p' })}
            </Text>
          </Button> : <></> }

          {clickable && !searchParams.get('client') && estate.visible ? (
            <Button
              style={{
                margin: 'auto',
                width: '80%',
                backgroundColor: getGroupColor()
              }}
              onClick={deleteFromCollection}
            >
              <Text variant="body1">{formatMessage({ id: 'remove_button' })}</Text>
            </Button>
          ) : (
            <></>
          )}
        </div>
        <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
      </div>
    </section>
  );
};
