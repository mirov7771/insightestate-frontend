import { FC } from 'react';
import styles from './Info.module.scss';
import {
  Airport,
  Beach,
  Calendar,
  Car,
  CityBuilding,
  Conference,
  Constructing,
  Diamond,
  Home,
} from '@/shared/assets/icons';

export const Info: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Diamond /> Класс
        </span>
        <span className={styles.text}>Люкс</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Home /> Тип объекта
        </span>
        <span className={styles.text}>Квартира</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Calendar /> Дата сдачи
        </span>
        <span className={styles.text}>31.12.2028</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <CityBuilding /> Всего этажей
        </span>
        <span className={styles.text}>4</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Conference /> Всего квартир
        </span>
        <span className={styles.text}>237</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Beach /> До пляжа
        </span>
        <span className={styles.text}>1 мин</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Airport /> До аэропорта
        </span>
        <span className={styles.text}>37 мин</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Car /> Парковка
        </span>
        <span className={styles.text}>185</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Constructing /> Застройщик
        </span>
        <span className={styles.text}>Banyan Group Residences</span>
      </div>
    </div>
  );
};
