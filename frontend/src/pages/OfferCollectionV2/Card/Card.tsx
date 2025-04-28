import React, {FC, use, useEffect, useState} from 'react';
import { BadgeRating, Button } from '@/shared/ui';
import {
  VectorRating,
  OfferCollectionMapPinFilled,
  Heart,
  OfferCollectionHeart,
} from '@/shared/assets/icons';
import { Text } from '@/shared/ui';
import styles from './Card.module.scss';
import { Progress } from '@/pages/OfferCollectionV2/Card/Progress/Progress';
import { Slider } from '@/pages/OfferCollectionV2/Card/Slider/Slider';
import {Estate, estateCollectionApi} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { formatNumber } from '@/shared/utils';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { localField } from '@/i18n/localField';
import { Map } from '@/pages/EstateDetail/Section/Map/Map';
import { InfoModal } from '@/widgets/Modal/InfoModal';
import {useParams} from "react-router";

export const Card: FC<Estate & {collectionId: string}> = (estate) => {
  const [like, setLike] = useState(false);
  const [square, setSquare] = useState(100);
  const [token, setToken] = useState<string | undefined | null>(localStorage.getItem('basicToken'))
  const handleClickLikeButton = () => {
    setLike(!like);
  };
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
    if (isDelete) window.location.reload()
  };
  const openRatingInfo = () => {
    setInfoTitle(localField('object_info_title'));
    setInfoText(localField('object_info_message'));
    setIsDelete(false)
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
    setToken(localStorage.getItem('basicToken'))
  }, []);

  const deleteFromCollection = () => {
    estateCollectionApi
        .deleteFromCollection(token!!, estate.collectionId!!, estate.id)
        .then(() => {
          setInfoTitle(localField('object_delete_title'));
          setInfoText(localField('object_delete_message'));
          handleOpenInfoModal();
        })
        .catch((e) => console.log(e));
    setIsDelete(true)
  };

  return (
    <section>
      <div className={styles.slider}>
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
              text={estate.grade?.main ? `${estate.grade?.main}` : '9'}
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
          <Text className={styles.header} variant="heading2">
            {estate.name}
          </Text>
          <Text variant="heading3">
            {localField('p_from')} ${formatNumber(estate.price?.min)}{' '}
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
              {localField('size_sqm')}
            </Text>
          </div>
          {estate.floors ? (
            <div className={styles.info__card}>
              <Text align="center" variant="heading4">
                {estate.floors}
              </Text>
              <Text className={styles.info__description} align="center" variant="caption1">
                {localField('total_floors')}
              </Text>
            </div>
          ) : (
            <></>
          )}
        </section>
        <hr className={styles.hr} />
        {/*Table 1*/}
        <section className={styles.table}>
          <div className={styles.table__item}>
            <Text variant="body1">{localField('completion_date')}</Text>
            <Text variant="heading4">{estate.buildEndDate}</Text>
          </div>
          <div className={styles.table__item}>
            <Text variant="body1">{localField('roi')}</Text>
            <Text variant="heading4">{estate.profitability?.roi || 200}%</Text>
          </div>
          <div className={styles.table__item}>
            <Text variant="body1">{localField('irr')}</Text>
            <Text variant="heading4">{estate.profitability?.irr || 13}%</Text>
          </div>
        </section>
        <hr className={styles.hr} />
        {/*Table 2*/}
        <section className={styles.table}>
          <div className={styles.table__item}>
            <Text variant="body1">{localField('beach')}</Text>
            <Text variant="heading4">1 {localField('min')}</Text>
          </div>
          <div className={styles.table__item}>
            <Text variant="body1">{localField('mall')}</Text>
            <Text variant="heading4">26 {localField('min')}</Text>
          </div>
          <div className={styles.table__item}>
            <Text variant="body1">{localField('airport')}</Text>
            <Text variant="heading4">
              {estate.infrastructure?.airportTime?.car ||
                estate.infrastructure?.airportTime?.walk ||
                30}{' '}
              {localField('min')}
            </Text>
          </div>
        </section>
        {/*Map*/}
        {!!estate.location?.mapUrl && (
          <>
            <hr className={styles.hr} />
            <section>
              <Map url={estate.location?.mapUrl} />
            </section>
          </>
        )}
        <hr className={styles.hr} />
        <section className={styles.progress}>
          <Progress
            value={estate.grade?.investmentSecurity || 9}
            label={localField('security')}
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
            label={localField('project_location')}
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
            label={localField('invest_potential')}
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
            label={localField('comfort')}
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
          {
            clickable ?
                <Button
                    style={{
                      margin: 'auto',
                      width: '80%'
                    }}
                    onClick={deleteFromCollection}
                >Удалить
                </Button> :
                <></>
          }
        </section>
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
