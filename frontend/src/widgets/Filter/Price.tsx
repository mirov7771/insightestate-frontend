import { ChangeEvent, FC } from 'react';
import { Coins } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Input } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { CustomSlider } from '@/widgets/Filter/CustomSlider';

export const Price: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, minPrice, maxPrice } = useFilters();

  const handleClick = (event: Event, value: number | number[], activeThumb: number) => {
    setFilters((filtersState) => ({
      ...filtersState,
      minPrice: activeThumb,
      maxPrice: value as number,
    }));
  };

  const handleMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, minPrice: (e.target.value || 0) as number }));
  };

  const handleMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, maxPrice: (e.target.value || 0) as number }));
  };

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
          valueLabelDisplay={'on'}
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
