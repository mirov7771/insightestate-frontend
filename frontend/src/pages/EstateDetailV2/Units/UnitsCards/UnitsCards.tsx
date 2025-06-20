import { FC } from 'react';
import { Unit } from '@/shared/api/units';
import styles from './UnitsCards.module.scss';
import PlaceholderImg from '../assets/placeholder.png';
import { Button, Text } from '@/shared/ui';
import { Plus } from '@/shared/assets/icons';
import { useIntl } from 'react-intl';

export const UnitsCards: FC<{ items: Unit[] }> = ({ items }) => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.container}>
      {items.map((unit) => (
        <div className={styles.unit}>
          <div className={styles.unit__plan}>
            <div className={styles.unit__plan__img}>
              <img src={unit.planImage || PlaceholderImg} alt="plan" />
            </div>
            <div className={styles.unit__plan__info}>
              <Text variant="body1" className={styles.unit__name}>
                {formatMessage({ id: `units.bedroom.${unit.rooms}` })}, {unit.square}&nbsp;м
                <sup>2</sup>
              </Text>
              <Text variant="heading5">${unit.price}</Text>
            </div>
          </div>
          <div className={styles.unit__base}>
            <Text variant="body1" className={styles.unit__name}>
              {formatMessage({ id: 'units.floor' })}
            </Text>
            <Text variant="heading5">{unit.floor || '-'}</Text>
          </div>
          <div className={styles.unit__base}>
            <Text variant="body1" className={styles.unit__name}>
              {formatMessage({ id: 'units.number' })}
            </Text>
            <Text variant="heading5">{unit.number}</Text>
          </div>
          <div className={styles.unit__base}>
            <Text variant="body1" className={styles.unit__name}>
              {formatMessage({ id: 'units.annualIncome' })}
            </Text>
            <Text variant="heading5">&ndash;</Text>
          </div>
          <div className={styles.unit__base}>
            <Text variant="body1" className={styles.unit__name}>
              {formatMessage({ id: 'units.payback' })}
            </Text>
            <Text variant="heading5">&ndash;</Text>
          </div>
          <div className={`${styles.unit__base} ${styles.unit__base_center}`}>
            {/*<Button variant="primary" className={styles.unit__button}>
              <Plus />
            </Button>*/}
          </div>
        </div>
      ))}
    </section>
  );
};
