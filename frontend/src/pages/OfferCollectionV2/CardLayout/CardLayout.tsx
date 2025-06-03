import { FC, useEffect, useState } from 'react';
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
  OfferCollectionHeart,
  OfferCollectionMapPinFilled,
  VectorRating,
} from '@/shared/assets/icons';
import { useIntl } from 'react-intl';
import { Flats } from '../CommonComponents/Flats/Flats';
import { PaymentStepper } from '../CommonComponents/PaymentStepper/PaymentStepper';
import { EstateOptionsInfo } from '../CommonComponents/EstateOptionsInfo/EstateOptionsInfo';
import { Progresses } from '../CommonComponents/Progress/Progresses';
import { Slider } from '../CommonComponents/Slider/Slider';
import { TablesInfo } from '@/pages/OfferCollectionV2/CommonComponents/TablesInfo/TablesInfo';
import { InfoModal } from '@/shared/ui/modals';
import { useSearchParams } from 'react-router';

type CardLayoutProps = {
  estate: Estate & { collection: string; collectionId: string; agentInfo?: AgentInfo };
};

export const CardLayout: FC<CardLayoutProps> = ({ estate }) => {
  const { formatMessage } = useIntl();
  const [like, setLike] = useState(false);
  const [square, setSquare] = useState(100);
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
        110
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

  console.log({ estate });

  return (
    <section className={styles.grid}>
      <div className={styles.slider}>
        {!!estate.location?.mapUrl && (
          <div className={styles.slider__map}>
            <GMap url={estate.location?.mapUrl} zoom={16} />
          </div>
        )}
        <Slider
          images={
            estate.exteriorImages || estate.facilityImages || estate.interiorImages || [DEFAULT_IMG]
          }
        />
      </div>
      <div className={styles.description}>
        <div className={styles.badges} onClick={openRatingInfo}>
          <BadgeRating
            icon={<VectorRating />}
            size="sm"
            text={estate.grade?.main ? `${estate.grade?.main.toPrecision(2)}` : '9'}
            background="primary"
          />
          <BadgeRating
            icon={<OfferCollectionMapPinFilled />}
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
          {clickable && !searchParams.get('client') ? (
            <Button onClick={deleteFromCollection} size="l">
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
              disabled={!!searchParams.get('client')}
              variant="cta"
              style={{
                width: '210px',
              }}
            >
              <span className={styles.like__icon}>
                {like ? <Heart /> : <OfferCollectionHeart />}
              </span>
              <Text variant="heading4">{formatMessage({ id: 'like' })}</Text>
            </Button>
          )}
        </div>
      </div>
      <div className={styles.flats}>
        <Flats {...estate.roomLayouts} />
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
              items: [
                {
                  name: formatMessage({ id: 'completion_date' }),
                  description: estate.buildEndDate,
                },
                {
                  name: formatMessage({ id: 'roiSummary' }),
                  description: `${estate.profitability?.roiSummary || 200}%`,
                },
                {
                  name: formatMessage({ id: 'roi' }),
                  description: `${estate.profitability?.roi || 200}%`,
                },
                {
                  name: formatMessage({ id: 'irr' }),
                  description: `${estate.profitability?.irr || 13}%`,
                },
                {
                  name: formatMessage({ id: 'capRateFirstYear' }),
                  description: `${estate.profitability?.capRateFirstYear || 5}%`,
                },
              ],
            },
            {
              items: [
                {
                  name: formatMessage({ id: 'beach' }),
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
      <div className={styles.progress}>
        <Progresses
          items={[
            {
              value: estate.grade?.investmentSecurity || 9,
              label: formatMessage({ id: 'security' }),
              icon: <VectorRating />,
              min: 0,
              max: 10,
            },
            {
              value: estate.grade?.projectLocation || 9,
              label: formatMessage({ id: 'project_location' }),
              icon: <VectorRating />,
              min: 0,
              max: 10,
            },
            {
              value: estate.grade?.investmentPotential || 9,
              label: formatMessage({ id: 'invest_potential' }),
              icon: <VectorRating />,
              min: 0,
              max: 10,
            },
            {
              value: estate.grade?.comfortOfLife || 9,
              label: formatMessage({ id: 'comfort' }),
              icon: <VectorRating />,
              min: 0,
              max: 10,
            },
          ]}
        />
      </div>
      <InfoModal open={infoModal} setOpen={setInfoModal} title={infoTitle} text={infoText} />
    </section>
  );
};
