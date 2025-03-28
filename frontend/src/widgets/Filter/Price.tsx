import { ChangeEvent, FC } from 'react';
import { Coins } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, RadioButton } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import {localField} from "@/i18n/localField";

export const Price: FC = () => {
  const { setFilters, price } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, price: e.target.value }));
  };

  return (
    <Accordion icon={<Coins />} title={localField('price')}>
      <div className={styles.content}>
        <RadioButton
          name="price"
          value="1"
          onChange={handleClick}
          checked={price === '1'}
          label="до $100 000"
        />
        <RadioButton
          name="price"
          value="2"
          onChange={handleClick}
          checked={price === '2'}
          label="$100 000 — $200 000"
        />
        <RadioButton
          name="price"
          value="3"
          onChange={handleClick}
          checked={price === '3'}
          label="$200 000 — $500 000"
        />
        <RadioButton
          name="price"
          value="4"
          onChange={handleClick}
          checked={price === '4'}
          label="$500 000 — $1 000 000"
        />
        <RadioButton
          name="price"
          value="5"
          onChange={handleClick}
          checked={price === '5'}
          label="от $1 000 000"
        />
      </div>
    </Accordion>
  );
};
