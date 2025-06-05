import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const Company: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, managementCompanyEnabled } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, managementCompanyEnabled: e.target.value }));
  };

  return (
    <div className={`${styles.content} ${styles.content__border}`}>
      <Checkbox
        name="managementCompanyEnabled"
        value="true"
        onChange={handleClick}
        checked={managementCompanyEnabled === 'true'}
        label={formatMessage({ id: 'uk' })}
      />
    </div>
  );
};
