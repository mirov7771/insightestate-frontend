import { ChangeEvent, FC, useState } from 'react';
import { Home } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';

export const PropertyType: FC = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.name)
        ? prevState.filter((val) => val !== e.target.name)
        : [...prevState, e.target.name]
    );
  };

  return (
    <Accordion icon={<Home />} title="Тип объекта">
      <div className={styles.content}>
        <Checkbox
          label="Вилла"
          name="VILLA"
          onChange={handleClick}
          checked={filter.includes('VILLA')}
        />
        <Checkbox
          label="Квартира"
          name="APARTMENT"
          onChange={handleClick}
          checked={filter.includes('APARTMENT')}
        />
      </div>
    </Accordion>
  );
};
