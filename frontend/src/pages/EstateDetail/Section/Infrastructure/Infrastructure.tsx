import React, { FC } from 'react';
import { Section } from '../Section';
import styles from './Infrastructure.module.scss';
import baby from '@/shared/assets/icons/BabyFace.svg';
import macbook from '@/shared/assets/icons/PerformanceMacbook.svg';
import trainers from '@/shared/assets/icons/Trainers.svg';
import beach from '@/shared/assets/icons/Beach.svg';
import shopping from '@/shared/assets/icons/ShoppingCart.svg';
import airport from '@/shared/assets/icons/Airport.svg';

export const Infrastructure: FC = () => {
  return (
    <Section title="Инфраструктура и Особенности">
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={baby} className={styles.item__icon} alt="icon" />
          <span>Детская комната</span>
        </div>
        <div className={styles.item}>
          <img src={macbook} className={styles.item__icon} alt="icon" />
          <span>Коворкинг</span>
        </div>
        <div className={styles.item}>
          <img src={trainers} className={styles.item__icon} alt="icon" />
          <span>Спортивный зал</span>
        </div>
      </div>
      {/* ------ */}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={beach} className={styles.item__icon} alt="icon" />
          <strong>Пляж</strong>
          <span>1 мин на машине</span>
        </div>
        <div className={styles.item}>
          <img src={shopping} className={styles.item__icon} alt="icon" />
          <strong>Торговый центр</strong>
          <span>26 мин на машине</span>
        </div>
        <div className={styles.item}>
          <img src={airport} className={styles.item__icon} alt="icon" />
          <strong>Аэропорт</strong>
          <span>37 мин на машине</span>
        </div>
      </div>
    </Section>
  );
};
