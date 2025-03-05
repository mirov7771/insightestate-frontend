import { FC } from 'react';
import { Section } from '../Section';
import { Button } from '@/shared/ui';
import styles from './AverageYield.module.scss';

export const AverageYield: FC = () => {
  return (
    <Section title="Средняя доходность" rightSide={<Button>Индивидуальный расчет</Button>}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <span className={styles.bold}>ROI за 10 лет</span>
          <span className={styles.text}>136%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>IRR за 10 лет</span>
          <span className={styles.text}>13,1%</span>
        </div>
        <div className={styles.item}>
          <span className={styles.bold}>IRR за 10 лет</span>
          <span className={styles.text}>5,1%</span>
        </div>
      </div>
    </Section>
  );
};
