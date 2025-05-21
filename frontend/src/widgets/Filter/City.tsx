import { ChangeEvent, FC } from 'react';
import { City as CityImg } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox, RadioButton } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const City: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, city } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      city: filtersState.city?.includes(e.target.value)
        ? filtersState.city?.filter((val) => val !== e.target.value)
        : [...(filtersState.city || []), e.target.value],
    }));
  };

  return (
    <Accordion icon={<CityImg />} title={formatMessage({ id: 'city' })}>
      <div className={styles.content}>
        <Checkbox
          name="city"
          value="Phuket"
          onChange={handleClick}
          checked={city?.includes('Phuket')}
          label="Phuket"
        />
        <Checkbox
          name="city"
          value="Bangkok"
          onChange={handleClick}
          checked={city?.includes('Bangkok')}
          label="Bangkok"
        />
        <Checkbox
          name="city"
          value="Pattaya"
          onChange={handleClick}
          checked={city?.includes('Pattaya')}
          label="Pattaya"
        />
      </div>
    </Accordion>
  );
};
