import { ChangeEvent, FC, useMemo, useState } from 'react';
import styles from './Filter.module.scss';
import Slider from '@mui/material/Slider';
import { Input } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { debounce, formatNumber } from '@/shared/utils';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const Price: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, minPrice, maxPrice } = useFilters();
  const currency = localStorage.getItem('currency') || '$'
  const maxCurrPrice = currency === '$' ? 4000000 : (currency === '฿' ? 160000000 : 400000000)

  const [value, setValues] = useState<number[]>([0, maxCurrPrice]);
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
        console.log('!!!',val);
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
    const value = e.target.value.replaceAll(' ', '').replaceAll(' ', '')
    const val = Number(value) || (type === 'min' ? 0 : maxCurrPrice);

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
      (typeof maxPrice === 'number' && maxPrice < maxCurrPrice)
    );
  }, [maxPrice, minPrice]);

  const handleReset = () => {
    setValues([0, maxCurrPrice]);
    setFilters((filtersState) => ({
      ...filtersState,
      minPrice: 0,
      maxPrice: maxCurrPrice,
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };


  return (
    <FilterLayout
      name={`${formatMessage({ id: 'price' })}, ${currency}`}
      isActiveFilter={isActiveFilter}
      onResetFilter={handleReset}
      filter={
        <div className={styles.content}>
          <div className={styles.price}>
            <Input value={formatNumber(value[0])} onChange={handleChangeInput('min')} />
            <Input value={formatNumber(value[1])} onChange={handleChangeInput('max')} />
          </div>
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
            valueLabelDisplay="off"
          />
        </div>
      }
    />
  );
};
