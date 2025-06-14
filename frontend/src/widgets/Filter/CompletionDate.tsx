import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import {useSearchParams} from "react-router";

export const CompletionDate: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, buildEndYears } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        pageNumber: 0,
        buildEndYears: filtersState.buildEndYears?.includes(Number(e.target.value))
          ? filtersState.buildEndYears?.filter((val) => val !== Number(e.target.value))
          : [...(filtersState.buildEndYears || []), Number(e.target.value)],
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
        buildEndYears: [],
      };
    });
    setSearchParams(params => {
      params.set("page", '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={renderName ? formatMessage({ id: 'completion_date' }) : ''}
      isActiveFilter={!!buildEndYears?.length}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Checkbox
            label="2025"
            value={2025}
            onChange={handleClick}
            checked={buildEndYears?.includes(2025)}
          />
          <Checkbox
            label="2026"
            value={2026}
            onChange={handleClick}
            checked={buildEndYears?.includes(2026)}
          />
          <Checkbox
            label="2027"
            value={2027}
            onChange={handleClick}
            checked={buildEndYears?.includes(2027)}
          />
          <Checkbox
            label="2028"
            value={2028}
            onChange={handleClick}
            checked={buildEndYears?.includes(2028)}
          />
        </div>
      }
    />
  );
};
