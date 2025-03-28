import { ChangeEvent, FC } from 'react';
import { Bed } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { localField } from '@/i18n/localField';

export const NumberOfBedrooms: FC = () => {
  const { setFilters, rooms } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        rooms: filtersState.rooms?.includes(e.target.value)
          ? filtersState.rooms?.filter((val) => val !== e.target.value)
          : [...(filtersState.rooms || []), e.target.value],
      };
    });
  };

  return (
    <Accordion icon={<Bed />} title={localField('number_of_bedrooms')}>
      <div className={styles.content}>
        <Checkbox onChange={handleClick} checked={rooms?.includes('0')} value="0" label="Студия" />
        <Checkbox
          onChange={handleClick}
          checked={rooms?.includes('1')}
          value="1"
          label="1 спальня"
        />
        <Checkbox
          onChange={handleClick}
          checked={rooms?.includes('2')}
          value="2"
          label="2 спальни"
        />
        <Checkbox
          onChange={handleClick}
          checked={rooms?.includes('3')}
          value="3"
          label="3 спальни"
        />
        <Checkbox
          onChange={handleClick}
          checked={rooms?.includes('4')}
          value="4"
          label="4+ спальни"
        />
      </div>
    </Accordion>
  );
};
