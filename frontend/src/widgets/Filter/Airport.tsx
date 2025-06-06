import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from './FilterLayout';

export const Airport: FC<{ renderName?: boolean }> = ({ renderName }) => {
  const { formatMessage } = useIntl();
  const { setFilters, airportTravelTimes } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        airportTravelTimes: filtersState.airportTravelTimes?.includes(e.target.value)
          ? filtersState.airportTravelTimes?.filter((val) => val !== e.target.value)
          : [...(filtersState.airportTravelTimes || []), e.target.value],
      };
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      airportTravelTimes: [],
    }));
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'airport_time' }) : ''}
      isActiveFilter={!!airportTravelTimes?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            value="1"
            onChange={handleClick}
            checked={airportTravelTimes?.includes('1')}
            label={formatMessage({ id: 'min_30_car' })}
          />
          <Checkbox
            value="2"
            onChange={handleClick}
            checked={airportTravelTimes?.includes('2')}
            label={formatMessage({ id: 'min_60_car' })}
          />
          <Checkbox
            value="3"
            onChange={handleClick}
            checked={airportTravelTimes?.includes('3')}
            label={formatMessage({ id: 'min_60_plus_car' })}
          />
        </div>
      }
    />
  );
};
