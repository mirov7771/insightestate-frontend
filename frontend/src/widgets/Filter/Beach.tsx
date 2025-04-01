import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Beach as BeachIcon } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { localField } from '@/i18n/localField';

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
    <Accordion icon={<BeachIcon />} title={localField('beach_time')}>
      <div className={styles.content}>
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('1')}
          label={localField('walk_5')}
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('2')}
          label={localField('walk_10')}
        />
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('3')}
          label={localField('walk_30')}
        />
        <Checkbox
          value="11"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('11')}
          label={localField('car_5')}
        />
        <Checkbox
          value="12"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('12')}
          label={localField('car_10')}
        />
        <Checkbox
          value="13"
          onChange={handleClick}
          checked={beachTravelTimes?.includes('13')}
          label={localField('car_30')}
        />
      </div>
    </Accordion>
  );
};
