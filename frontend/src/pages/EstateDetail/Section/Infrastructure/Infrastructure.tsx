import React, { FC } from 'react';
import { Section } from '../Section';
import styles from './Infrastructure.module.scss';
import baby from '@/shared/assets/icons/BabyFace.svg';
import macbook from '@/shared/assets/icons/PerformanceMacbook.svg';
import trainers from '@/shared/assets/icons/Trainers.svg';
import beach from '@/shared/assets/icons/Beach.svg';
import shopping from '@/shared/assets/icons/ShoppingCart.svg';
import airport from '@/shared/assets/icons/Airport.svg';
import { localField } from '@/i18n/localField';

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
            <span>{localField('kids')}</span>
          </div>
        )}
        {coworking && (
          <div className={styles.item}>
            <img src={macbook} className={styles.item__icon} alt="icon" />
            <span>{localField('co_working')}</span>
          </div>
        )}
        {gym && (
          <div className={styles.item}>
            <img src={trainers} className={styles.item__icon} alt="icon" />
            <span>{localField('gym')}</span>
          </div>
        )}
      </div>
      {/* ------ */}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={beach} className={styles.item__icon} alt="icon" />
          <strong>{localField('beach')}</strong>
          <span>
            {beachTime} {localField('min_on_car')}
          </span>
        </div>
        <div className={styles.item}>
          <img src={shopping} className={styles.item__icon} alt="icon" />
          <strong>{localField('mall')}</strong>
          <span>
            {mallTime} {localField('min_on_car')}
          </span>
        </div>
        <div className={styles.item}>
          <img src={airport} className={styles.item__icon} alt="icon" />
          <strong>{localField('airport')}</strong>
          <span>
            {airportTime} {localField('min_on_car')}
          </span>
        </div>
      </div>
    </Section>
  );
};
