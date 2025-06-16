import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox, Text } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from './FilterLayout';
import { useSearchParams } from 'react-router';

export const Beach: FC<{ renderName?: boolean }> = ({ renderName }) => {
  const { formatMessage } = useIntl();
  const { setFilters, beachTravelTimes } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      beachTravelTimes: filtersState.beachTravelTimes?.includes(e.target.value)
        ? filtersState.beachTravelTimes?.filter((val) => val !== e.target.value)
        : [...(filtersState.beachTravelTimes || []), e.target.value],
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
      beachTravelTimes: [],
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'beach_time' }) : ''}
      isActiveFilter={!!beachTravelTimes?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Text variant="heading5">{formatMessage({ id: 'beach.walk' })}</Text>
          <Checkbox
            name="beachName"
            value="1"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('1')}
            label={formatMessage({ id: 'from_5' })}
          />
          <Checkbox
            name="beachName"
            value="2"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('2')}
            label={formatMessage({ id: 'from_15' })}
          />
          <Checkbox
            name="beachName"
            value="3"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('3')}
            label={formatMessage({ id: 'from_30' })}
          />
          <Text variant="heading5">{formatMessage({ id: 'beach.car' })}</Text>
          <Checkbox
            name="beachName"
            value="11"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('11')}
            label={formatMessage({ id: 'from_5' })}
          />
          <Checkbox
            name="beachName"
            value="12"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('12')}
            label={formatMessage({ id: 'from_15' })}
          />
          <Checkbox
            name="beachName"
            value="13"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('13')}
            label={formatMessage({ id: 'from_30' })}
          />
        </div>
      }
    />
  );
};
