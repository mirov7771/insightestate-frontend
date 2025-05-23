import {ChangeEvent, FC, useEffect, useState} from 'react';
import { Coins } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Input } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { CustomSlider } from '@/widgets/Filter/CustomSlider';
import {formatNumber} from "@/shared/utils";

export const Price: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, minPrice, maxPrice } = useFilters();
  const [ values, setValues ] = useState<number[]>([0,1000000])

    useEffect(() => {
        if (minPrice == 0 && maxPrice == 1000000) setValues([0,1000000])
    }, [minPrice, maxPrice]);

  const handleClick = (event: Event, value: number | number[], activeThumb: number) => {
    setValues(value as number[])
    setFilters((filtersState) => ({
      ...filtersState,
      minPrice: (value as number[])[0],
      maxPrice: (value as number[])[1],
    }));
  };

  const handleMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, minPrice: (e.target.value || 0) as number }));
  };

  const handleMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target.value || 0) as number
    if (value > 0)
        setFilters((filtersState) => ({ ...filtersState, maxPrice: (e.target.value || 0) as number }));
  };

  const labelValue = (value: number) => {
      if (value === 0)
          return '0 $'
      return `${formatNumber(value)} $`
  }

  return (
    <Accordion icon={<Coins />} title={formatMessage({ id: 'price' })}>
      <div className={styles.content}>
        <CustomSlider
          min={0}
          max={1000000}
          step={10000}
          style={{
            width: '95%',
            marginTop: '10px',
          }}
          getAriaValueText={labelValue}
          valueLabelFormat={labelValue}
          valueLabelDisplay={'on'}
          value={values}
          onChange={handleClick}
        />
        <div
          style={{
            display: 'inline-flex',
            width: '95%',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Input
            placeholder={'min'}
            value={minPrice}
            name="min"
            type={'number'}
            defaultValue={0}
            onChange={handleMinPrice}
            style={{
              minHeight: '30px',
              fontSize: '12px',
            }}
          />
          <p>-</p>
          <Input
            placeholder={'max'}
            value={maxPrice}
            name="max"
            type={'number'}
            defaultValue={1000000}
            onChange={handleMaxPrice}
            style={{
              minHeight: '30px',
              fontSize: '12px',
            }}
          />
        </div>
      </div>
    </Accordion>
  );
};
