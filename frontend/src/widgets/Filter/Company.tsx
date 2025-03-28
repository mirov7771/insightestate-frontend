import { ChangeEvent, FC } from 'react';
import { Money } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, RadioButton } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { localField } from '@/i18n/localField';

export const Company: FC = () => {
  const { setFilters, managementCompanyEnabled } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, managementCompanyEnabled: e.target.value }));
  };

  return (
    <Accordion icon={<Money />} title={localField('uk')}>
      <div className={styles.content}>
        <RadioButton
          name="managementCompanyEnabled"
          value="true"
          onChange={handleClick}
          checked={managementCompanyEnabled === 'true'}
          label="Да"
        />
        <RadioButton
          name="managementCompanyEnabled"
          value="false"
          onChange={handleClick}
          checked={managementCompanyEnabled === 'false'}
          label="Нет"
        />
      </div>
    </Accordion>
  );
};
