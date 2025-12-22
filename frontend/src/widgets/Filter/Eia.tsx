import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import {Checkbox, Input} from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router';
import {FilterLayout} from "@/widgets/Filter/FilterLayout";

export const Eia: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, eia } = useFilters();
  const [value, setValue] = useState(eia);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickYes = () => {
    setValue((prevState) => (prevState === 'true' ? undefined : 'true'));
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      eia: filtersState.eia === 'true' ? undefined : 'true',
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleClickNo = () => {
    setValue((prevState) => (prevState === 'false' ? undefined : 'false'));
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      eia: filtersState.eia === 'false' ? undefined : 'false',
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  const handleReset = () => {
    setValue(undefined)
    setFilters((filtersState) => ({
      ...filtersState,
      minPrice: 0,
      eia: undefined,
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
      <FilterLayout
          name={`${formatMessage({ id: 'eia' })}`}
          isActiveFilter={!!eia}
          onResetFilter={handleReset}
          filter={
            <div className={styles.content}>
              <Checkbox
                  name="eiay"
                  onChange={handleClickYes}
                  checked={value === 'true'}
                  label={formatMessage({ id: 'yes' })}
              />
              <Checkbox
                  name="eian"
                  onChange={handleClickNo}
                  checked={value === 'false'}
                  label={formatMessage({ id: 'no' })}
              />
            </div>
          }
      />
  );
};
