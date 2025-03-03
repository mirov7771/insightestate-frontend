import { FC, useEffect } from 'react';
import styles from './Filter.module.scss';
import { PropertyType } from './PropertyType';
import { CompletionDate } from './CompletionDate';
import { NumberOfBedrooms } from './NumberOfBedrooms';
import { Price } from './Price';
import { Potential } from './Potential';

export const Filter: FC = () => {
  return (
    <>
      <div className={styles.header}>
        <h5>Параметры поиска</h5>
        <span className={styles.reset}>Сбросить фильтры</span>
      </div>
      <PropertyType />
      <CompletionDate />
      <NumberOfBedrooms />
      <Price />
      <Potential />
    </>
  );
};
