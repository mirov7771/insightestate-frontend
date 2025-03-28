import { FC } from 'react';
import styles from './Filter.module.scss';
import { PropertyType } from './PropertyType';
import { CompletionDate } from './CompletionDate';
import { NumberOfBedrooms } from './NumberOfBedrooms';
import { Price } from './Price';
import { Potential } from './Potential';
import { DEFAULT_FILTERS, useFilters } from '@/widgets/Filter/model/useFilters';
import { Airport } from '@/widgets/Filter/Airport';
import { Beach } from '@/widgets/Filter/Beach';
import { Company } from '@/widgets/Filter/Company';
import { Region } from '@/widgets/Filter/Region';
import { City } from '@/widgets/Filter/City';
import {localField} from "@/i18n/localField";

export const Filter: FC = () => {
  const { setFilters } = useFilters();
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <>
      <div className={styles.header}>
        <h5>{localField('filter_params')}</h5>
        <span className={styles.reset} onClick={resetFilters}>
          {localField('filter_clear')}
        </span>
      </div>
      <City />
      <PropertyType />
      <CompletionDate />
      <NumberOfBedrooms />
      <Price />
      <Potential />
      <Beach />
      <Airport />
      <Company />
      <Region />
    </>
  );
};
