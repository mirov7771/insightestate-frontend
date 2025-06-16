import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router';

export const Company: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, managementCompanyEnabled } = useFilters();
  const [value, setValue] = useState(managementCompanyEnabled);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setValue((prevState) => (prevState === 'true' ? 'false' : 'true'));
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      managementCompanyEnabled:
        filtersState.managementCompanyEnabled === 'true' ? undefined : 'true',
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
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
