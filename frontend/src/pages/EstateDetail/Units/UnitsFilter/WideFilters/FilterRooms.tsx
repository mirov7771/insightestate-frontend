import { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { Checkbox, Text } from '@/shared/ui';
import styles from './WideFilters.module.scss';
import { FormattedMessage } from 'react-intl';
import { useUnitsFilters } from '@/pages/EstateDetail/Units/UnitsContext';

export const FilterRooms: FC = () => {
  const { setFiltersParams, filtersParams } = useUnitsFilters();

  const handleClick: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.currentTarget.value;
    const updatedRoomsFilter = filtersParams.rooms?.includes(val)
      ? [...(filtersParams.rooms || [])].filter((value) => value !== val)
      : [...(filtersParams.rooms || []), val];

    setFiltersParams((prev) => ({
      ...prev,
      rooms: updatedRoomsFilter,
    }));
  };

  const handleReset = () => {
    setFiltersParams((prev) => ({ ...prev, rooms: [] }));
  };

  return (
    <div className={styles.rooms}>
      <div className={styles.rooms__header}>
        <Text variant="heading5">
          <FormattedMessage id="units.filter.wide.bedrooms" />
        </Text>
        {!!filtersParams.rooms?.length && (
          <Text variant="body1" bold className={styles.reset} onClick={handleReset}>
            <FormattedMessage id="units.filter.wide.reset" />
          </Text>
        )}
      </div>
      <div className={styles.rooms__container}>
        <Checkbox
          name="rooms"
          value="studio"
          label={<FormattedMessage id="units.bedroom.Studio" />}
          onChange={handleClick}
          checked={filtersParams.rooms?.includes('studio')}
        />
        <Checkbox
          name="rooms"
          value="1"
          label={<FormattedMessage id="units.bedroom.1" />}
          onChange={handleClick}
          checked={filtersParams.rooms?.includes('1')}
        />
        <Checkbox
          name="rooms"
          value="2"
          label={<FormattedMessage id="units.bedroom.2" />}
          onChange={handleClick}
          checked={filtersParams.rooms?.includes('2')}
        />
        <Checkbox
          name="rooms"
          value="3"
          label={<FormattedMessage id="units.bedroom.3" />}
          onChange={handleClick}
          checked={filtersParams.rooms?.includes('3')}
        />
        <Checkbox
          name="rooms"
          value="4"
          label={<FormattedMessage id="units.bedroom.4" />}
          onChange={handleClick}
          checked={filtersParams.rooms?.includes('4')}
        />
      </div>
    </div>
  );
};
