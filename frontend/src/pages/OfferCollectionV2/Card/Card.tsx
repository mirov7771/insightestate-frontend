import { FC, useState } from 'react';
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

export const Card: FC = () => {
  const [like, setLike] = useState(false);
  const handleClickLikeButton = () => {
    setLike(!like);
  };

  return (
    <div className={styles.wrapper}>
      {/*  Main Info */}
      <section>
        {/*Rating*/}
        <div className={styles.badges}>
          <BadgeRating
            icon={
              <span className={styles.icon}>
                <VectorRating />
              </span>
            }
            size="sm"
            text="9.2"
            background="primary"
          />
          <BadgeRating
            icon={
              <span className={`${styles.icon} ${styles.icon__primary}`}>
                <OfferCollectionMapPinFilled />
              </span>
            }
            size="sm"
            text="Thalang"
            background="white"
          />
        </div>
        {/*Name and Price*/}
        <Text className={styles.header} variant="heading2">
          Laguna Beach Residences Bayside
        </Text>
        <Text variant="heading3">
          от $661,006 <span className={styles.price}>• $5,850 м2</span>
        </Text>
      </section>
      {/* Info Mini Cards */}
      <section className={styles.info__wrapper}>
        <div className={styles.info__card}>
          <Text align="center" variant="heading4">
            2 спальни
          </Text>
          <Text className={styles.info__description} align="center" variant="caption1">
            Планировка
          </Text>
        </div>
        <div className={styles.info__card}>
          <Text align="center" variant="heading4">
            113 m<sup>2</sup>
          </Text>
          <Text className={styles.info__description} align="center" variant="caption1">
            Площадь
          </Text>
        </div>
        <div className={styles.info__card}>
          <Text align="center" variant="heading4">
            6
          </Text>
          <Text className={styles.info__description} align="center" variant="caption1">
            Всего этажей
          </Text>
        </div>
      </section>
      <hr className={styles.hr} />
      {/*Table 1*/}
      <section className={styles.table}>
        <div className={styles.table__item}>
          <Text variant="body1">Дата сдачи</Text>
          <Text variant="heading4">Q4 2028</Text>
        </div>
        <div className={styles.table__item}>
          <Text variant="body1">ROI за 10 лет</Text>
          <Text variant="heading4">136%</Text>
        </div>
        <div className={styles.table__item}>
          <Text variant="body1">IRR</Text>
          <Text variant="heading4">13,1%</Text>
        </div>
      </section>
      <hr className={styles.hr} />
      {/*Table 2*/}
      <section className={styles.table}>
        <div className={styles.table__item}>
          <Text variant="body1">Пляж</Text>
          <Text variant="heading4">1 мин</Text>
        </div>
        <div className={styles.table__item}>
          <Text variant="body1">Торговый центр</Text>
          <Text variant="heading4">26 мин</Text>
        </div>
        <div className={styles.table__item}>
          <Text variant="body1">Аэропорт</Text>
          <Text variant="heading4">37 мин</Text>
        </div>
      </section>
      <hr className={styles.hr} />
      {/*Map*/}
      <section>
        <Text variant="heading2">Map</Text>
      </section>
      <hr className={styles.hr} />
      <section className={styles.progress}>
        <Progress
          value={8.4}
          label="Безопасность вложений"
          icon={
            <span className={styles.icon}>
              <VectorRating />
            </span>
          }
          min={0}
          max={10}
        />
        <Progress
          value={9.0}
          label="Расположение"
          icon={
            <span className={styles.icon}>
              <VectorRating />
            </span>
          }
          min={0}
          max={10}
        />
        <Progress
          value={9.5}
          label="Инвестиционый потенциал"
          icon={
            <span className={styles.icon}>
              <VectorRating />
            </span>
          }
          min={0}
          max={10}
        />
        <Progress
          value={9.4}
          label="Комфорт жизни"
          icon={
            <span className={styles.icon}>
              <VectorRating />
            </span>
          }
          min={0}
          max={10}
        />
        <Button onClick={handleClickLikeButton} className={styles.like} variant="cta" size="l" wide>
          <span className={styles.like__icon}>{like ? <Heart /> : <OfferCollectionHeart />}</span>
          <Text variant="heading4">Мне нравится</Text>
        </Button>
      </section>
    </div>
  );
};
