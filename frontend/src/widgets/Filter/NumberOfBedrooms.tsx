import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Bed } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const NumberOfBedrooms: FC = () => {
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
    setFilters((filtersState) => ({ ...filtersState, rooms: filter }));
  }, [filter]);

  return (
    <Accordion icon={<Bed />} title="Количество спален">
      <div className={styles.content}>
        <Checkbox onChange={handleClick} checked={filter.includes('0')} value="0" label="Студия" />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('1')}
          value="1"
          label="1 спальня"
        />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('2')}
          value="2"
          label="2 спальни"
        />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('3')}
          value="3"
          label="3 спальни"
        />
        <Checkbox
          onChange={handleClick}
          checked={filter.includes('4')}
          value="4"
          label="4+ спальни"
        />
      </div>
    </Accordion>
  );
};
