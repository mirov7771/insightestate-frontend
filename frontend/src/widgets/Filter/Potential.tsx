import { ChangeEvent, FC, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const Potential: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, grades } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        grades: filtersState.grades?.includes(e.target.value)
          ? filtersState.grades?.filter((val) => val !== e.target.value)
          : [...(filtersState.grades || []), e.target.value],
      };
    });
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      grades: [],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'potential' }) : ''}
      isActiveFilter={!!grades?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
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
