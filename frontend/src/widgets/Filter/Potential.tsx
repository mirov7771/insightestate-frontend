import { ChangeEvent, FC, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';

export const Potential: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, grades } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        grades: filtersState.grades?.includes(e.target.value)
          ? filtersState.grades?.filter((val) => val !== e.target.value)
          : [...(filtersState.grades || []), e.target.value],
      };
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      grades: [],
    }));
  };

  return (
    <FilterLayout
      name={formatMessage({ id: 'potential' })}
      isActiveFilter={!!grades?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            value="3"
            onChange={handleClick}
            checked={grades?.includes('3')}
            label={formatMessage({ id: 'invest_f1' })}
          />
          <Checkbox
            value="4"
            onChange={handleClick}
            checked={grades?.includes('4')}
            label={formatMessage({ id: 'invest_f2' })}
          />
          <Checkbox
            value="1"
            onChange={handleClick}
            checked={grades?.includes('1')}
            label={formatMessage({ id: 'invest_f3' })}
          />
          <Checkbox
            value="2"
            onChange={handleClick}
            checked={grades?.includes('2')}
            label={formatMessage({ id: 'invest_f4' })}
          />
        </div>
      }
    />
  );
};
