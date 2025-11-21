import {ChangeEvent, FC, useEffect, useMemo, useState} from 'react';
import styles from './Filter.module.scss';
import Slider from '@mui/material/Slider';
import { Input } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { debounce, formatNumber } from '@/shared/utils';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const Size: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, sizeMin, sizeMax } = useFilters();
  const maxCurrSize = 1000

  const [value, setValues] = useState<number[]>([sizeMin || 0, sizeMax || maxCurrSize]);
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedSetMinSize = useMemo(
    () =>
      debounce((val: number) => {
        setFilters((prevState) => ({ ...prevState, sizeMin: val }));
      }, 500),
    [setFilters]
  );

  const debouncedSetMaxSize = useMemo(
    () =>
      debounce((val: number) => {
        setFilters((prevState) => ({ ...prevState, sizeMax: val }));
      }, 500),
    [setFilters]
  );

  const handleChange = (event: Event, newValue: number[]) => {
    setValues(newValue);
  };
  const handleChangeCommitted = (newValue: number[]) => {
    setFilters((prevState) => ({ ...prevState, sizeMax: newValue[1], sizeMin: newValue[0] }));
  };

  const handleChangeInput = (type: 'min' | 'max') => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(' ', '').replaceAll(' ', '')
    let val = Number(value) || (type === 'min' ? 0 : maxCurrSize);
    if (value === '') val = 0

    if (type === 'min') {
      setValues((prev) => [val, prev[1]]);
      debouncedSetMinSize(val);
    }
    if (type === 'max') {
      setValues((prev) => [prev[0], val]);
      debouncedSetMaxSize(val);
    }
  };

  const isActiveFilter = useMemo(() => {
    return (
      (typeof sizeMin === 'number' && sizeMin > 0) ||
      (typeof sizeMax === 'number' && sizeMax < maxCurrSize)
    );
  }, [sizeMax, sizeMin]);

  const handleReset = () => {
    setValues([0, maxCurrSize]);
    setFilters((filtersState) => ({
      ...filtersState,
      sizeMin: 0,
      sizeMax: maxCurrSize,
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  useEffect(() => {
    setValues([sizeMin || 0, sizeMax || maxCurrSize])
  }, [sizeMin, sizeMax]);

  return (
    <FilterLayout
      name={`${formatMessage({ id: 'size_filter' })}`}
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
            max={maxCurrSize}
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
