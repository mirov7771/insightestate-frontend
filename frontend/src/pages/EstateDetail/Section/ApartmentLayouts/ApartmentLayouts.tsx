import React, { FC } from 'react';
import { Section } from '../Section';
import { Button } from '@/shared/ui';
import styles from './ApartmentLayouts.module.scss';
import { RoomLayouts } from '@/widgets/Detail/api/detailApi';

export const ApartmentLayouts: FC<RoomLayouts> = ({ one, two, three }) => {
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
          <span>
            {one?.square?.min} - {one?.square?.max}
          </span>
          <span>
            {one?.pricePerMeter?.min} - {one?.pricePerMeter?.max}
          </span>
        </div>
        <div className={styles.item}>
          <span>2 спальни</span>
          <span>
            {two?.square?.min} - {two?.square?.max}
          </span>
          <span>
            {two?.pricePerMeter?.min} - {two?.pricePerMeter?.max}
          </span>
        </div>
        <div className={styles.item}>
          <span>3 спальни</span>
          <span>
            {three?.square?.min} - {two?.square?.max}
          </span>
          <span>
            {three?.pricePerMeter?.min} - {two?.pricePerMeter?.max}
          </span>
        </div>
      </div>
    </Section>
  );
};
