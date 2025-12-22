import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { useSearchParams } from 'react-router';

export const Eia: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, eia } = useFilters();
  const [value, setValue] = useState(eia);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setValue((prevState) => (prevState === 'true' ? 'false' : 'true'));
    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      eia: filtersState.eia === 'true' ? undefined : 'true',
    }));
    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  return (
    <div className={`${styles.content} ${styles.content__border}`}>
      <Checkbox
        name="eia"
        onChange={handleClick}
        checked={value === 'true'}
        label={formatMessage({ id: 'eia' })}
      />
    </div>
  );
};
