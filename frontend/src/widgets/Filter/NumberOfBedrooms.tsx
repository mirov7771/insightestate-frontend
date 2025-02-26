import { ChangeEvent, FC, useState } from 'react';
import { Bed } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';

export const NumberOfBedrooms: FC = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );
  };

  return (
    <Accordion icon={<Bed />} title="Количество спален">
      <div className={styles.content}>
        <Checkbox onChange={handleClick} checked={filter.includes('0')} value="0" label="Студия" />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('1br')}
          value="1br"
          label="1 спальня"
        />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('2br')}
          value="2br"
          label="2 спальни"
        />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('3br')}
          value="3br"
          label="3 спальни"
        />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('4br+')}
          value="4br+"
          label="4+ спальни"
        />
      </div>
    </Accordion>
  );
};
