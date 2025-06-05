import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox, Text } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from './FilterLayout';

export const Beach: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, beachTravelTimes } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      beachTravelTimes: filtersState.beachName?.includes(e.target.value)
        ? filtersState.beachName?.filter((val) => val !== e.target.value)
        : [...(filtersState.beachName || []), e.target.value],
    }));
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      beachTravelTimes: [],
    }));
  };

  return (
    <FilterLayout
      name={formatMessage({ id: 'beach_time' })}
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
            label="До 5 минут"
          />
          <Checkbox
            name="beachName"
            value="2"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('2')}
            label="До 15 минут"
          />
          <Checkbox
            name="beachName"
            value="3"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('3')}
            label="До 30 минут"
          />
          <Text variant="heading5">{formatMessage({ id: 'beach.car' })}</Text>
          <Checkbox
            name="beachName"
            value="11"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('11')}
            label="До 5 минут"
          />
          <Checkbox
            name="beachName"
            value="12"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('12')}
            label="До 15 минут"
          />
          <Checkbox
            name="beachName"
            value="13"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('13')}
            label="До 30 минут"
          />
        </div>
      }
    />
  );
};
