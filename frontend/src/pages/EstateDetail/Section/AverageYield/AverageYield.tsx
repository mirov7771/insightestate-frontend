import { FC } from 'react';
import { Section } from '../Section';
import styles from './AverageYield.module.scss';
import { Profitability } from '@/widgets/Detail/api/detailApi';
import { localField } from '@/i18n/localField';

export const AverageYield: FC<Profitability> = ({ roi, irr, capRateFirstYear }) => {
  return (
    <Section title={localField('yield')}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <span className={styles.bold}>{localField('roi')}</span>
          <span className={styles.text}>{roi}%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>{localField('irr')}</span>
          <span className={styles.text}>{irr}%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>{localField('net')}</span>
          <span className={styles.text}>{capRateFirstYear}%</span>
        </div>
      </div>
    </Section>
  );
};
