import { FC } from 'react';
import styles from './Card.module.scss';
import { Beach, VectorRating } from '@/shared/assets/icons';
import { Estate } from '@/widgets/Filter/api/filterApi';

const DEFAULT_IMG =
  'https://cdn.prod.website-files.com/672b5797ac1486cdfc5122ac/67aa547c02740c42abf52609_675f0debfa47fa6400a3c65a_Exterior_03.jpeg';

type CardProps = Estate;

export const Card: FC<CardProps> = ({
  id,
  level,
  beachTravelTime,
  grade,
  buildEndDate,
  priceMin,
  facilityImages,
  interiorImages,
  exteriorImages,
  name,
}) => {
  const img = exteriorImages?.[0] || facilityImages?.[0] || interiorImages?.[0] || DEFAULT_IMG;

  return (
    <div className={styles.card}>
      <a href={`/property/${id}`} className={styles.card__image}>
        <img src={img} alt="" />
        <div className={styles.card__rating}>
          {grade} <VectorRating />
        </div>
        <div className={styles.card__details}>
          {buildEndDate !== '-' && (
            <span className={styles.card__details__item}>{buildEndDate}</span>
          )}
          <span className={styles.card__details__item}>{level}</span>
          <span className={styles.card__details__item}>
            <Beach /> {beachTravelTime} мин
          </span>
        </div>
      </a>
      <a href={`/property/${id}`} className={styles.card__title}>
        {name}
      </a>
      <p>
        <strong>Стоимость от</strong>{' '}
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(priceMin)}
      </p>
      {/*<p>
        Доходность до <strong>136%</strong> за 10 лет
      </p>*/}
    </div>
  );
};
