import { FC } from 'react';
import { Section } from '../Section';
import { Button } from '@/shared/ui';
import styles from './AverageYield.module.scss';
import { Profitability } from '@/widgets/Detail/api/detailApi';

export const AverageYield: FC<Profitability> = ({ roi, irr, capRateFirstYear }) => {
  return (
    <Section title="Средняя доходность" rightSide={<Button>Индивидуальный расчет</Button>}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <span className={styles.bold}>ROI за 10 лет</span>
          <span className={styles.text}>{roi}%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>IRR за 10 лет</span>
          <span className={styles.text}>{irr}%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>Чистый арендный доход</span>
          <span className={styles.text}>{capRateFirstYear}%</span>
        </div>
      </div>
    </Section>
  );
};
