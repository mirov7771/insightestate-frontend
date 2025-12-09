import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox, Text } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const City: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, city } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      city: filtersState.city?.includes(e.target.value)
        ? filtersState.city?.filter((val) => val !== e.target.value)
        : [...(filtersState.city || []), e.target.value],
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
      city: [],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'city' }) : ''}
      isActiveFilter={!!city?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            name="city"
            value="Phuket"
            onChange={handleClick}
            checked={city?.includes('Phuket')}
            label="Phuket"
          />
          <Checkbox
            name="city"
            value="Bangkok"
            onChange={handleClick}
            checked={city?.includes('Bangkok')}
            label="Bangkok"
          />
          <Checkbox
            name="city"
            value="Pattaya"
            onChange={handleClick}
            checked={city?.includes('Pattaya')}
            label="Pattaya"
          />
          <Checkbox
              name="city"
              value="Samui"
              onChange={handleClick}
              checked={city?.includes('Samui')}
              label="Samui"
          />
          <Checkbox
              name="city"
              value="Hua Hin"
              onChange={handleClick}
              checked={city?.includes('Hua Hin')}
              label="Hua Hin"
          />
          <Checkbox
              name="city"
              value="Chiang Mai"
              onChange={handleClick}
              checked={city?.includes('Chiang Mai')}
              label="Chiang Mai"
          />
        </div>
      }
    />
  );
};
