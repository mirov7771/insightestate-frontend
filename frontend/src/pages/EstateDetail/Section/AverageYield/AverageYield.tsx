import { FC } from 'react';
import { Section } from '../Section';
import styles from './AverageYield.module.scss';
import { Profitability } from '@/widgets/Detail/api/detailApi';
import { useIntl } from 'react-intl';

export const AverageYield: FC<Profitability> = ({ roi, irr, capRateFirstYear }) => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: 'yield' })}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <span className={styles.bold}>{formatMessage({ id: 'roi' })}</span>
          <span className={styles.text}>{roi}%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>{formatMessage({ id: 'irr' })}</span>
          <span className={styles.text}>{irr}%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>{formatMessage({ id: 'net' })}</span>
          <span className={styles.text}>{capRateFirstYear}%</span>
        </div>
      </div>
    </Section>
  );
};
