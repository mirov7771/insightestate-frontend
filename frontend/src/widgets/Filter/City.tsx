import { ChangeEvent, FC } from 'react';
import { City as CityImg } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, RadioButton } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { localField } from '@/i18n/localField';

export const City: FC = () => {
  const { setFilters, city } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, city: e.target.value }));
  };

  return (
    <Accordion icon={<CityImg />} title={localField('city')}>
      <div className={styles.content}>
        <RadioButton
          name="city"
          value="Phuket"
          onChange={handleClick}
          checked={city === 'Phuket'}
          label="Phuket"
        />
        <RadioButton
          name="city"
          value="Bangkok"
          onChange={handleClick}
          checked={city === 'Bangkok'}
          label="Bangkok"
        />
        <RadioButton
            name="city"
            value="Pattaya"
            onChange={handleClick}
            checked={city === 'Pattaya'}
            label="Pattaya"
        />
      </div>
    </Accordion>
  );
};
