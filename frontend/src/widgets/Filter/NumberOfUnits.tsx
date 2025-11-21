import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const NumberOfUnits: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, untis } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        untis: filtersState.untis?.includes(e.target.value)
          ? filtersState.untis?.filter((val) => val !== e.target.value)
          : [...(filtersState.untis || []), e.target.value],
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
        untis: [],
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
      isActiveFilter={!!untis?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            onChange={handleClick}
            checked={untis?.includes('1')}
            value="1"
            label={formatMessage({ id: 'unit_filter_1' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={untis?.includes('2')}
              value="2"
              label={formatMessage({ id: 'unit_filter_2' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={untis?.includes('3')}
              value="3"
              label={formatMessage({ id: 'unit_filter_3' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={untis?.includes('4')}
              value="4"
              label={formatMessage({ id: 'unit_filter_4' })}
          />
          <Checkbox
              onChange={handleClick}
              checked={untis?.includes('5')}
              value="5"
              label={formatMessage({ id: 'unit_filter_5' })}
          />
        </div>
      }
    />
  );
};
