import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const NumberOfUnits: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, units } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        units: filtersState.units?.includes(e.target.value)
          ? filtersState.units?.filter((val) => val !== e.target.value)
          : [...(filtersState.units || []), e.target.value],
      };
    });
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        units: [],
      };
    });
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'unit_filter_name' }) : ''}
      isActiveFilter={!!units?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            onChange={handleClick}
            checked={units?.includes('1')}
            value="1"
            label={formatMessage({ id: 'unit_filter_1' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={units?.includes('2')}
              value="2"
              label={formatMessage({ id: 'unit_filter_2' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={units?.includes('3')}
              value="3"
              label={formatMessage({ id: 'unit_filter_3' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={units?.includes('4')}
              value="4"
              label={formatMessage({ id: 'unit_filter_4' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={units?.includes('5')}
              value="5"
              label={formatMessage({ id: 'unit_filter_5' })}
          />
        </div>
      }
    />
  );
};
