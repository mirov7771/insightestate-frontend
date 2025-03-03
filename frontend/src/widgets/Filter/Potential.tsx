import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Vector } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const Potential: FC = () => {
  const { setFilters } = useFilters();
  const [filter, setFilter] = useState<string[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );
  };

  useEffect(() => {
    setFilters((filtersState) => ({ ...filtersState, grades: filter }));
  }, [filter]);

  return (
    <Accordion icon={<Vector />} title="Комфорт и инвестиционный потенциал">
      <div className={styles.content}>
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={filter.includes('3')}
          label="Самые удобные локации"
        />
        <Checkbox
          value="4"
          onChange={handleClick}
          checked={filter.includes('4')}
          label="Самые комфортные для жизни"
        />
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={filter.includes('1')}
          label="Самые безопасные для инвестиций"
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={filter.includes('2')}
          label="Наибольшая доходность"
        />
      </div>
    </Accordion>
  );
};
