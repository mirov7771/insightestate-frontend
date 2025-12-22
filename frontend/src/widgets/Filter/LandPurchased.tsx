import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router';
import {FilterLayout} from "@/widgets/Filter/FilterLayout";

export const LandPurchased: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, landPurchased } = useFilters();
  const [value, setValue] = useState(landPurchased);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickYes = () => {
    setValue((prevState) => (prevState === 'true' ? undefined : 'true'));
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      landPurchased: filtersState.landPurchased === 'true' ? undefined : 'true',
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
      landPurchased: filtersState.landPurchased === 'false' ? undefined : 'false',
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
      landPurchased: undefined,
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
      <FilterLayout
          name={`${formatMessage({ id: 'landPurchased' })}`}
          isActiveFilter={!!landPurchased}
          onResetFilter={handleReset}
          filter={
            <div className={styles.content}>
              <Checkbox
                  name="landPurchasedy"
                  onChange={handleClickYes}
                  checked={value === 'true'}
                  label={formatMessage({ id: 'yes' })}
              />
              <Checkbox
                  name="landPurchasedn"
                  onChange={handleClickNo}
                  checked={value === 'false'}
                  label={formatMessage({ id: 'no' })}
              />
            </div>
          }
      />
  );
};
