import { ChangeEvent, FC } from 'react';
import { Money } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, RadioButton } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const Company: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, managementCompanyEnabled } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, managementCompanyEnabled: e.target.value }));
  };

  return (
    <Accordion icon={<Money />} title={formatMessage({ id: 'uk' })}>
      <div className={styles.content}>
        <RadioButton
          name="managementCompanyEnabled"
          value="true"
          onChange={handleClick}
          checked={managementCompanyEnabled === 'true'}
          label={formatMessage({ id: 'yes' })}
        />
        <RadioButton
          name="managementCompanyEnabled"
          value="false"
          onChange={handleClick}
          checked={managementCompanyEnabled === 'false'}
          label={formatMessage({ id: 'no' })}
        />
      </div>
    </Accordion>
  );
};
