import { ChangeEvent, FC, useState } from 'react';
import { Vector } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';

export const Potential: FC = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );
  };

  return (
    <Accordion icon={<Vector />} title="Комфорт и инвестиционный потенциал">
      <div className={styles.content}>
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={filter.includes('1')}
          label="Самые удобные локации"
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={filter.includes('2')}
          label="Самые комфортные для жизни"
        />
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={filter.includes('3')}
          label="Самые безопасные для инвестиций"
        />
        <Checkbox
          value="4"
          onChange={handleClick}
          checked={filter.includes('4')}
          label="Наибольшая доходность"
        />
      </div>
    </Accordion>
  );
};
