import React, { FC } from 'react';
import { Section } from '../Section';
import { Button } from '@/shared/ui';
import styles from './ApartmentLayouts.module.scss';

export const ApartmentLayouts: FC = () => {
  return (
    <Section title="Доступные планировки" rightSide={<Button>Подобрать индивидуально</Button>}>
      <div>
        <div className={`${styles.item__header} ${styles.item}`}>
          <span>Планировка</span>
          <span>Площадь, м2</span>
          <span>Стоимость, $</span>
        </div>
        <div className={styles.item}>
          <span>1 спальня</span>
          <span>26 — 39</span>
          <span>89 554 — 169 494</span>
        </div>
        <div className={styles.item}>
          <span>2 спальни</span>
          <span>57 — 65</span>
          <span>198 101 — 288 552</span>
        </div>
        <div className={styles.item}>
          <span>3 спальни</span>
          <span>113 — 123</span>
          <span>394 233 — 512 887</span>
        </div>
      </div>
    </Section>
  );
};
