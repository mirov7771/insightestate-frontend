import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Vector } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const Beach: FC = () => {
  const { setFilters, beachTravelTimes } = useFilters();
  const [filter, setFilter] = useState<string[]>(beachTravelTimes || []);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );

    setFilters((filtersState) => {
      return {
        ...filtersState,
        beachTravelTimes: filtersState.beachTravelTimes?.includes(e.target.value)
          ? filtersState.beachTravelTimes?.filter((val) => val !== e.target.value)
          : [...(filtersState.beachTravelTimes || []), e.target.value],
      };
    });
  };

  useEffect(() => {
    setFilters((filtersState) => ({ ...filtersState, beachTravelTimes: filter }));
  }, [filter]);

  return (
    <Accordion icon={<Vector />} title="Время до пляжа">
      <div className={styles.content}>
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('1')}
          label="Менее 5 мин пешком"
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('2')}
          label="6-10 мин пешком"
        />
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('3')}
          label="11-30 мин пешком"
        />
        <Checkbox
            value="11"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('11')}
            label="Менее 5 мин на машине"
        />
        <Checkbox
            value="12"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('12')}
            label="6-10 мин на машине"
        />
        <Checkbox
            value="13"
            onChange={handleClick}
            checked={beachTravelTimes?.includes('13')}
            label="11-30 мин на машине"
        />
      </div>
    </Accordion>
  );
};
