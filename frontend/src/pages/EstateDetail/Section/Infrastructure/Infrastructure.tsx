import { FC } from 'react';
import { Section } from '../Section';
import styles from './Infrastructure.module.scss';
import baby from '@/shared/assets/icons/BabyFace.svg';
import macbook from '@/shared/assets/icons/PerformanceMacbook.svg';
import trainers from '@/shared/assets/icons/Trainers.svg';
import beach from '@/shared/assets/icons/Beach.svg';
import shopping from '@/shared/assets/icons/ShoppingCart.svg';
import airport from '@/shared/assets/icons/Airport.svg';
import { useIntl } from 'react-intl';

export const Infrastructure: FC<{
  childRoom: boolean;
  coworking: boolean;
  gym: boolean;
  airportTime?: number;
  beachTime?: number;
  mallTime?: number;
}> = ({ beachTime, airportTime, mallTime, gym, childRoom, coworking }) => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: 'infrastructure' })}>
      <div className={styles.wrapper}>
        {childRoom && (
          <div className={styles.item}>
            <img src={baby} className={styles.item__icon} alt="icon" />
            <span>{formatMessage({ id: 'kids' })}</span>
          </div>
        )}
        {coworking && (
          <div className={styles.item}>
            <img src={macbook} className={styles.item__icon} alt="icon" />
            <span>{formatMessage({ id: 'co_working' })}</span>
          </div>
        )}
        {gym && (
          <div className={styles.item}>
            <img src={trainers} className={styles.item__icon} alt="icon" />
            <span>{formatMessage({ id: 'gym' })}</span>
          </div>
        )}
      </div>
      {/* ------ */}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={beach} className={styles.item__icon} alt="icon" />
          <strong>{formatMessage({ id: 'beach' })}</strong>
          <span>
            {beachTime} {formatMessage({ id: 'min_on_car' })}
          </span>
        </div>
        <div className={styles.item}>
          <img src={shopping} className={styles.item__icon} alt="icon" />
          <strong>{formatMessage({ id: 'mall' })}</strong>
          <span>
            {mallTime} {formatMessage({ id: 'min_on_car' })}
          </span>
        </div>
        <div className={styles.item}>
          <img src={airport} className={styles.item__icon} alt="icon" />
          <strong>{formatMessage({ id: 'airport' })}</strong>
          <span>
            {airportTime} {formatMessage({ id: 'min_on_car' })}
          </span>
        </div>
      </div>
    </Section>
  );
};
