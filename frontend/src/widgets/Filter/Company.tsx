import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const Company: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, managementCompanyEnabled } = useFilters();
  const [value, setValue] = useState(managementCompanyEnabled);

  const handleClick = () => {
    setValue((prevState) => (prevState === 'true' ? 'false' : 'true'));
    setFilters((filtersState) => ({
      ...filtersState,
      managementCompanyEnabled:
        filtersState.managementCompanyEnabled === 'true' ? undefined : 'true',
    }));
  };

  return (
    <div className={`${styles.content} ${styles.content__border}`}>
      <Checkbox
        name="managementCompanyEnabled"
        onChange={handleClick}
        checked={value === 'true'}
        label={formatMessage({ id: 'uk' })}
      />
    </div>
  );
};
