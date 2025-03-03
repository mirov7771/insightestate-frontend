import { ChangeEvent, FC } from 'react';
import { Home } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { Accordion, Checkbox } from '@/shared/ui';

export const PropertyType: FC = () => {
  const { setFilters, types } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      types: filtersState.types?.includes(e.target.name)
        ? filtersState.types?.filter((val) => val !== e.target.name)
        : [...(filtersState.types || []), e.target.name],
    }));
  };

  return (
    <Accordion icon={<Home />} title="Тип объекта">
      <div className={styles.content}>
        <Checkbox
          label="Вилла"
          name="VILLA"
          onChange={handleClick}
          checked={types?.includes('VILLA')}
        />
        <Checkbox
          label="Квартира"
          name="APARTMENT"
          onChange={handleClick}
          checked={types?.includes('APARTMENT')}
        />
      </div>
    </Accordion>
  );
};
