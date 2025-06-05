import { ChangeEvent, FC } from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';

export const Region: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, beachName } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({
      ...filtersState,
      beachName: filtersState.beachName?.includes(e.target.value)
        ? filtersState.beachName?.filter((val) => val !== e.target.value)
        : [...(filtersState.beachName || []), e.target.value],
    }));
  };

  const handleReset = () => {
    setFilters((filtersState) => ({
      ...filtersState,
      beachName: [],
    }));
  };

  return (
    <FilterLayout
      name={formatMessage({ id: 'region' })}
      isActiveFilter={!!beachName?.length}
      onResetFilter={handleReset}
      filter={
        <div className={`${styles.content} ${styles.content__border}`}>
          <Checkbox
            name="beachName"
            value="Kata"
            onChange={handleClick}
            checked={beachName?.includes('Kata')}
            label="Kata"
          />
          <Checkbox
            name="beachName"
            value="Mai Khao"
            onChange={handleClick}
            checked={beachName?.includes('Mai Khao')}
            label="Mai Khao"
          />
          <Checkbox
            name="beachName"
            value="Layan"
            onChange={handleClick}
            checked={beachName?.includes('Layan')}
            label="Layan"
          />
          <Checkbox
            name="beachName"
            value="Bang Tao"
            onChange={handleClick}
            checked={beachName?.includes('Bang Tao')}
            label="Bang Tao"
          />
          <Checkbox
            name="beachName"
            value="Rawai"
            onChange={handleClick}
            checked={beachName?.includes('Rawai')}
            label="Rawai"
          />
          <Checkbox
            name="beachName"
            value="Kamala"
            onChange={handleClick}
            checked={beachName?.includes('Kamala')}
            label="Kamala"
          />
          <Checkbox
            name="beachName"
            value="Naithon"
            onChange={handleClick}
            checked={beachName?.includes('Naithon')}
            label="Naithon"
          />
          <Checkbox
            name="beachName"
            value="Karon"
            onChange={handleClick}
            checked={beachName?.includes('Karon')}
            label="Karon"
          />
          <Checkbox
            name="beachName"
            value="Surin"
            onChange={handleClick}
            checked={beachName?.includes('Surin')}
            label="Surin"
          />
          <Checkbox
            name="beachName"
            value="Nai Yang"
            onChange={handleClick}
            checked={beachName?.includes('Nai Yang')}
            label="Nai Yang"
          />
          <Checkbox
            name="beachName"
            value="Ao Yon"
            onChange={handleClick}
            checked={beachName?.includes('Ao Yon')}
            label="Ao Yon"
          />
        </div>
      }
    />
  );
};
