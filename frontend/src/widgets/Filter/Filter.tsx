import { FC } from 'react';
import styles from './Filter.module.scss';
import { PropertyType } from './PropertyType';
import { CompletionDate } from './CompletionDate';
import { NumberOfBedrooms } from './NumberOfBedrooms';
import { Price } from './Price';
import { Potential } from './Potential';
import { DEFAULT_FILTERS, useFilters } from '@/widgets/Filter/model/useFilters';

export const Filter: FC = () => {
  const { setFilters } = useFilters();
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <>
      <div className={styles.header}>
        <h5>Параметры поиска</h5>
        <span className={styles.reset} onClick={resetFilters}>
          Сбросить фильтры
        </span>
      </div>
      <PropertyType />
      <CompletionDate />
      <NumberOfBedrooms />
      <Price />
      <Potential />
    </>
  );
};
