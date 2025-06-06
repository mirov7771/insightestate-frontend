import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox, Text } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';

export const City: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, city } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      city: filtersState.city?.includes(e.target.value)
        ? filtersState.city?.filter((val) => val !== e.target.value)
        : [...(filtersState.city || []), e.target.value],
    }));
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      city: [],
    }));
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
        </div>
      }
    />
  );
};
