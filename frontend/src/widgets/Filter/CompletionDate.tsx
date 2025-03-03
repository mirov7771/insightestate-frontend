import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Calendar } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const CompletionDate: FC = () => {
  const { setFilters } = useFilters();
  const [filter, setFilter] = useState<number[]>([]);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(Number(e.target.value))
        ? prevState.filter((val) => val !== Number(e.target.value))
        : [...prevState, Number(e.target.value)]
    );
  };

  useEffect(() => {
    setFilters((filtersState) => ({ ...filtersState, buildEndYears: filter }));
  }, [filter]);

  return (
    <Accordion icon={<Calendar />} title="Дата сдачи объекта">
      <div className={styles.content}>
        <Checkbox
          label="2025"
          value={2025}
          onChange={handleClick}
          checked={filter.includes(2025)}
        />
        <Checkbox
          label="2026"
          value={2026}
          onChange={handleClick}
          checked={filter.includes(2026)}
        />
        <Checkbox
          label="2027"
          value={2027}
          onChange={handleClick}
          checked={filter.includes(2027)}
        />
        <Checkbox
          label="2028"
          value={2028}
          onChange={handleClick}
          checked={filter.includes(2028)}
        />
      </div>
    </Accordion>
  );
};
