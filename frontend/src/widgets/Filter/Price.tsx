import { ChangeEvent, FC, useMemo, useState } from 'react';
import styles from './Filter.module.scss';
import Slider from '@mui/material/Slider';
import { Input } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import {debounce, formatNumber} from '@/shared/utils';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const Price: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, minPrice, maxPrice } = useFilters();
  const [value, setValues] = useState<number[]>([0, 4000000]);
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedSetMinPrice = useMemo(
    () =>
      debounce((val: number) => {
        setFilters((prevState) => ({ ...prevState, minPrice: val }));
      }, 500),
    [setFilters]
  );

  const debouncedSetMaxPrice = useMemo(
    () =>
      debounce((val: number) => {
        setFilters((prevState) => ({ ...prevState, maxPrice: val }));
      }, 500),
    [setFilters]
  );

  const handleChange = (event: Event, newValue: number[]) => {
    setValues(newValue);
  };
  const handleChangeCommitted = (newValue: number[]) => {
    setFilters((prevState) => ({ ...prevState, maxPrice: newValue[1], minPrice: newValue[0] }));
  };

  const handleChangeInput = (type: 'min' | 'max') => (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value) || (type === 'min' ? 0 : 4000000);

    if (type === 'min') {
      setValues((prev) => [val, prev[1]]);
      debouncedSetMinPrice(val);
    }
    if (type === 'max') {
      setValues((prev) => [prev[0], val]);
      debouncedSetMaxPrice(val);
    }
  };

  const isActiveFilter = useMemo(() => {
    return (
      (typeof minPrice === 'number' && minPrice > 0) ||
      (typeof maxPrice === 'number' && maxPrice < 4000000)
    );
  }, [maxPrice, minPrice]);

  const handleReset = () => {
    setValues([0, 4000000]);
    setFilters((filtersState) => ({
      ...filtersState,
      minPrice: 0,
      maxPrice: 4000000,
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <FilterLayout
      name={formatMessage({ id: 'price' })}
      isActiveFilter={isActiveFilter}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <Slider
            className={styles.slider}
            classes={{ thumb: styles.thumb, track: styles.track, rail: styles.track }}
            min={0}
            max={4000000}
            onChangeCommitted={(e, value) => {
              handleChangeCommitted(value as number[]);
            }}
            value={value}
            onChange={(event, value) => handleChange(event, value as number[])}
            valueLabelDisplay="auto"
          />
          <div className={styles.price}>
            <Input value={formatNumber(value[0])} onChange={handleChangeInput('min')} />
            <Input value={formatNumber(value[1])} onChange={handleChangeInput('max')} />
          </div>
        </div>
      }
    />
  );
};
