import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import {useSearchParams} from "react-router";

export const NumberOfBedrooms: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, rooms } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        rooms: filtersState.rooms?.includes(e.target.value)
          ? filtersState.rooms?.filter((val) => val !== e.target.value)
          : [...(filtersState.rooms || []), e.target.value],
      };
    });
    setSearchParams(params => {
      params.set("page", '0');
      return params;
    });
  };

  const handleReset = () => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        rooms: [],
      };
    });
    setSearchParams(params => {
      params.set("page", '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'number_of_bedrooms' }) : ''}
      isActiveFilter={!!rooms?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            onChange={handleClick}
            checked={rooms?.includes('0')}
            value="0"
            label={formatMessage({ id: 'studio' })}
          />
          <Checkbox
            onChange={handleClick}
            checked={rooms?.includes('1')}
            value="1"
            label={`1 ${formatMessage({ id: 'bedroom' })}`}
          />
          <Checkbox
            onChange={handleClick}
            checked={rooms?.includes('2')}
            value="2"
            label={`2 ${formatMessage({ id: 'bedrooms' })}`}
          />
          <Checkbox
            onChange={handleClick}
            checked={rooms?.includes('3')}
            value="3"
            label={`3 ${formatMessage({ id: 'bedrooms' })}`}
          />
          <Checkbox
            onChange={handleClick}
            checked={rooms?.includes('4')}
            value="4"
            label={`4+ ${formatMessage({ id: 'bedrooms' })}`}
          />
        </div>
      }
    />
  );
};
