import { ChangeEvent, FC, useState } from 'react';
import { Coins } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';

export const Price: FC = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );
  };

  return (
    <Accordion icon={<Coins />} title="Стоимость">
      <div className={styles.content}>
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={filter.includes('1')}
          label="до $100 000"
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={filter.includes('2')}
          label="$100 000 — $200 000"
        />
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={filter.includes('3')}
          label="$200 000 — $500 000"
        />
        <Checkbox
          value="4"
          onChange={handleClick}
          checked={filter.includes('4')}
          label="$500 000 — $1 000 000"
        />
        <Checkbox
          value="5"
          onChange={handleClick}
          checked={filter.includes('5')}
          label="от $1 000 000"
        />
      </div>
    </Accordion>
  );
};
