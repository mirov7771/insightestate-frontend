import { ChangeEvent, FC } from 'react';
import { Calendar } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const CompletionDate: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, buildEndYears } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => {
      return {
        ...filtersState,
        buildEndYears: filtersState.buildEndYears?.includes(Number(e.target.value))
          ? filtersState.buildEndYears?.filter((val) => val !== Number(e.target.value))
          : [...(filtersState.buildEndYears || []), Number(e.target.value)],
      };
    });
  };

  return (
    <Accordion
      icon={<Calendar />}
      title={formatMessage({ id: 'completion_date' })}
      activeFilters={buildEndYears}
    >
      <div className={styles.content}>
        <Checkbox
          label="2025"
          value={2025}
          onChange={handleClick}
          checked={buildEndYears?.includes(2025)}
        />
        <Checkbox
          label="2026"
          value={2026}
          onChange={handleClick}
          checked={buildEndYears?.includes(2026)}
        />
        <Checkbox
          label="2027"
          value={2027}
          onChange={handleClick}
          checked={buildEndYears?.includes(2027)}
        />
        <Checkbox
          label="2028"
          value={2028}
          onChange={handleClick}
          checked={buildEndYears?.includes(2028)}
        />
      </div>
    </Accordion>
  );
};
