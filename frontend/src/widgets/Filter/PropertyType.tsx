import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { Checkbox } from '@/shared/ui';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const PropertyType: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, types } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      types: filtersState.types?.includes(e.target.name)
        ? filtersState.types?.filter((val) => val !== e.target.name)
        : [...(filtersState.types || []), e.target.name],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      types: [],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'type_of_place' }) : ''}
      isActiveFilter={!!types?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            label={formatMessage({ id: 'villa_type' })}
            name="VILLA"
            onChange={handleClick}
            checked={types?.includes('VILLA')}
          />
          <Checkbox
            label={formatMessage({ id: 'apartment_type' })}
            name="APARTMENT"
            onChange={handleClick}
            checked={types?.includes('APARTMENT')}
          />
        </div>
      }
    />
  );
};
