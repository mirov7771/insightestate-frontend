import React, { FC, useEffect, useState } from 'react';
import { BadgeRating, Button, GMap } from '@/shared/ui';
import { VectorRating, OfferCollectionMapPinFilled } from '@/shared/assets/icons';
import { Text } from '@/shared/ui';
import styles from './Card.module.scss';
import { Progress } from '@/pages/OfferCollectionV2/Card/Progress/Progress';
import { Slider } from '@/pages/OfferCollectionV2/Card/Slider/Slider';
import { Estate, estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { formatNumber } from '@/shared/utils';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useIntl } from 'react-intl';
import { InfoModal } from '@/widgets/Modal/InfoModal';

export const Card: FC<Estate & { collectionId: string }> = (estate) => {
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

  return (
    <section className={styles.item}>
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
      <div className={styles.wrapper}>
        {/*  Main Info */}
        <section>
          {/*Rating*/}
          <div className={styles.badges} onClick={openRatingInfo}>
            <BadgeRating
              icon={
                <span className={styles.icon}>
                  <VectorRating />
                </span>
              }
              size="sm"
              text={estate.grade?.main ? `${estate.grade?.main.toPrecision(2)}` : '9'}
              background="primary"
            />
            <BadgeRating
              icon={
                <span className={`${styles.icon} ${styles.icon__primary}`}>
                  <OfferCollectionMapPinFilled />
                </span>
              }
              size="sm"
              text={estate.location?.beach || ''}
              background="white"
            />
          </div>
          {/*Name and Price*/}
          <div className={styles.header__wrapper}>
            <Text className={styles.header} variant="heading2">
              {estate.name}
            </Text>
          </div>
          <Text variant="heading3">
            {formatMessage({ id: 'p_from' })} ${formatNumber(estate.price?.min)}{' '}
            <span className={styles.price}>• ${formatNumber(estate.price?.max)}</span>
          </Text>
        </section>
        {/* Info Mini Cards */}
        <section className={styles.info__wrapper}>
          {/*Пока убираем спальни*/}
          {/*<div className={styles.info__card}>*/}
          {/*  <Text align="center" variant="heading4">*/}
          {/*    2 спальни*/}
          {/*  </Text>*/}
          {/*  <Text className={styles.info__description} align="center" variant="caption1">*/}
          {/*    Планировка*/}
          {/*  </Text>*/}
          {/*</div>*/}
          <div className={styles.info__card}>
            <Text align="center" variant="heading4">
              {square}
              {/*{square}{' '}m<sup>2</sup>*/}
            </Text>
            <Text className={styles.info__description} align="center" variant="caption1">
              {formatMessage({ id: 'size_sqm' })}
            </Text>
          </div>
          {!!estate.floors && (
            <div className={styles.info__card}>
              <Text align="center" variant="heading4">
                {estate.floors}
              </Text>
              <Text className={styles.info__description} align="center" variant="caption1">
                {formatMessage({ id: 'total_floors' })}
              </Text>
            </div>
          )}
        </section>
        <hr className={styles.hr} />
        <div className={styles.main}>
          <section className={styles.tables}>
            {/*Table 1*/}
            <section className={styles.table}>
              <div className={styles.table__item}>
                <Text variant="body1">{formatMessage({ id: 'completion_date' })}</Text>
                <Text variant="heading4">{estate.buildEndDate}</Text>
              </div>
              <div className={styles.table__item}>
                <Text variant="body1">{formatMessage({ id: 'roi' })}</Text>
                <Text variant="heading4">{estate.profitability?.roi || 200}%</Text>
              </div>
              <div className={styles.table__item}>
                <Text variant="body1">{formatMessage({ id: 'irr' })}</Text>
                <Text variant="heading4">{estate.profitability?.irr || 13}%</Text>
              </div>
            </section>
            <hr className={styles.hr} />
            {/*Table 2*/}
            <section className={styles.table}>
              <div className={styles.table__item}>
                <Text variant="body1">{formatMessage({ id: 'beach' })}</Text>
                <Text variant="heading4">1 {formatMessage({ id: 'min' })}</Text>
              </div>
              <div className={styles.table__item}>
                <Text variant="body1">{formatMessage({ id: 'mall' })}</Text>
                <Text variant="heading4">26 {formatMessage({ id: 'min' })}</Text>
              </div>
              <div className={styles.table__item}>
                <Text variant="body1">{formatMessage({ id: 'airport' })}</Text>
                <Text variant="heading4">
                  {estate.infrastructure?.airportTime?.car ||
                    estate.infrastructure?.airportTime?.walk ||
                    30}{' '}
                  {formatMessage({ id: 'min' })}
                </Text>
              </div>
            </section>
          </section>
          {/*Map*/}
          {!!estate.location?.mapUrl && (
            <section className={styles.map}>
              <hr className={styles.hr} />
              <section>
                <GMap
                  url={estate.location.mapUrl}
                  mapContainerStyle={{ width: '100%', height: '400px', marginTop: 16 }}
                />
              </section>
            </section>
          )}
          <hr className={styles.hr} />
          <section className={styles.progress}>
            <Progress
              value={estate.grade?.investmentSecurity || 9}
              label={formatMessage({ id: 'security' })}
              icon={
                <span className={styles.icon}>
                  <VectorRating />
                </span>
              }
              min={0}
              max={10}
            />
            <Progress
              value={estate.grade?.projectLocation || 9}
              label={formatMessage({ id: 'project_location' })}
              icon={
                <span className={styles.icon}>
                  <VectorRating />
                </span>
              }
              min={0}
              max={10}
            />
            <Progress
              value={estate.grade?.investmentPotential || 9}
              label={formatMessage({ id: 'invest_potential' })}
              icon={
                <span className={styles.icon}>
                  <VectorRating />
                </span>
              }
              min={0}
              max={10}
            />
            <Progress
              value={estate.grade?.comfortOfLife || 9}
              label={formatMessage({ id: 'comfort' })}
              icon={
                <span className={styles.icon}>
                  <VectorRating />
                </span>
              }
              min={0}
              max={10}
            />
            {/*Пока убираем лайки*/}
            {/*<Button*/}
            {/*  onClick={handleClickLikeButton}*/}
            {/*  className={styles.like}*/}
            {/*  variant="cta"*/}
            {/*  size="l"*/}
            {/*  wide*/}
            {/*>*/}
            {/*  <span className={styles.like__icon}>{like ? <Heart /> : <OfferCollectionHeart />}</span>*/}
            {/*  <Text variant="heading4">Мне нравится</Text>*/}
            {/*</Button>*/}
            {clickable ? (
              <Button
                style={{
                  margin: 'auto',
                  width: '80%',
                }}
                onClick={deleteFromCollection}
              >
                <Text variant="body1">{formatMessage({ id: 'remove_button' })}</Text>
              </Button>
            ) : (
              <></>
            )}
          </section>
        </div>
        <InfoModal
          open={infoModal}
          onClose={handleCloseInfoModal}
          onOpen={handleOpenInfoModal}
          anchor="bottom"
          title={infoTitle}
          text={infoText}
          bottom={30}
        />
      </div>
    </section>
  );
};
