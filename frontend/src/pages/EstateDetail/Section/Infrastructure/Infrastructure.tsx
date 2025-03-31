import React, { FC } from 'react';
import { Section } from '../Section';
import styles from './Infrastructure.module.scss';
import baby from '@/shared/assets/icons/BabyFace.svg';
import macbook from '@/shared/assets/icons/PerformanceMacbook.svg';
import trainers from '@/shared/assets/icons/Trainers.svg';
import beach from '@/shared/assets/icons/Beach.svg';
import shopping from '@/shared/assets/icons/ShoppingCart.svg';
import airport from '@/shared/assets/icons/Airport.svg';
import {localField} from "@/i18n/localField";

export const Infrastructure: FC<{
  childRoom: boolean;
  coworking: boolean;
  gym: boolean;
  airportTime?: number;
  beachTime?: number;
  mallTime?: number;
}> = ({ beachTime, airportTime, mallTime, gym, childRoom, coworking }) => {
  return (
    <Section title={localField('infrastructure')}>
      <div className={styles.wrapper}>
        {childRoom && (
          <div className={styles.item}>
            <img src={baby} className={styles.item__icon} alt="icon" />
            <span>Детская комната</span>
          </div>
        )}
        {coworking && (
          <div className={styles.item}>
            <img src={macbook} className={styles.item__icon} alt="icon" />
            <span>Коворкинг</span>
          </div>
        )}
        {gym && (
          <div className={styles.item}>
            <img src={trainers} className={styles.item__icon} alt="icon" />
            <span>Спортивный зал</span>
          </div>
        )}
      </div>
      {/* ------ */}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={beach} className={styles.item__icon} alt="icon" />
          <strong>Пляж</strong>
          <span>{beachTime} мин на машине</span>
        </div>
        <div className={styles.item}>
          <img src={shopping} className={styles.item__icon} alt="icon" />
          <strong>Торговый центр</strong>
          <span>{mallTime} мин на машине</span>
        </div>
        <div className={styles.item}>
          <img src={airport} className={styles.item__icon} alt="icon" />
          <strong>Аэропорт</strong>
          <span>{airportTime} мин на машине</span>
        </div>
      </div>
    </Section>
  );
};
