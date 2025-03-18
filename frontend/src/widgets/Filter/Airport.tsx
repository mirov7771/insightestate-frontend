import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Vector } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const Airport: FC = () => {
  const { setFilters, airportTravelTimes } = useFilters();
  const [filter, setFilter] = useState<string[]>(airportTravelTimes || []);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );

    setFilters((filtersState) => {
      return {
        ...filtersState,
        airportTravelTimes: filtersState.airportTravelTimes?.includes(e.target.value)
          ? filtersState.airportTravelTimes?.filter((val) => val !== e.target.value)
          : [...(filtersState.airportTravelTimes || []), e.target.value],
      };
    });
  };

  useEffect(() => {
    setFilters((filtersState) => ({ ...filtersState, airportTravelTimes: filter }));
  }, [filter]);

  return (
    <Accordion icon={<Vector />} title="Время до аэропорта">
      <div className={styles.content}>
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={airportTravelTimes?.includes('1')}
          label="до 30 мин на машине"
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={airportTravelTimes?.includes('2')}
          label="до 60 мин на машине"
        />
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={airportTravelTimes?.includes('3')}
          label="60+ на машине"
        />
      </div>
    </Accordion>
  );
};
