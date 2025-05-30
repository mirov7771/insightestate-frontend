import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Airport as AirportIcon } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const Airport: FC = () => {
  const { formatMessage } = useIntl();
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
    <Accordion
      icon={<AirportIcon />}
      title={formatMessage({ id: 'airport_time' })}
      activeFilters={airportTravelTimes}
    >
      <div className={styles.content}>
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={airportTravelTimes?.includes('1')}
          label={formatMessage({ id: 'min_30_car' })}
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={airportTravelTimes?.includes('2')}
          label={formatMessage({ id: 'min_60_car' })}
        />
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={airportTravelTimes?.includes('3')}
          label={formatMessage({ id: 'min_60_plus_car' })}
        />
      </div>
    </Accordion>
  );
};
