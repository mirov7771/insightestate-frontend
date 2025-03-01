import { FC } from 'react';
import styles from './Card.module.scss';
import { Beach, VectorRating } from '@/shared/assets/icons';

export const Card: FC = () => {
  return (
    <div className={styles.card}>
      <a href="#" className={styles.card__image}>
        <img
          src="https://cdn.prod.website-files.com/672b5797ac1486cdfc5122ac/67aa547c02740c42abf52609_675f0debfa47fa6400a3c65a_Exterior_03.jpeg"
          alt=""
        />
        <div className={styles.card__rating}>
          9,3 <VectorRating />
        </div>
        <div className={styles.card__details}>
          <span className={styles.card__details__item}>31.12.2028</span>
          <span className={styles.card__details__item}>Люкс</span>
          <span className={styles.card__details__item}>
            <Beach /> 1 мин
          </span>
        </div>
      </a>
      <a href="#" className={styles.card__title}>
        LAGUNA BEACH RESIDENCES BAYSIDE
      </a>
      <p>
        <strong>Стоимость от</strong> $661 006
      </p>
      <p>
        Доходность до <strong>136%</strong> за 10 лет
      </p>
    </div>
  );
};
