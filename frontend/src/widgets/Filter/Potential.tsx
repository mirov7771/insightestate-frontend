import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Vector } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';

export const Potential: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, grades } = useFilters();
  const [filter, setFilter] = useState<string[]>(grades || []);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) =>
      prevState.includes(e.target.value)
        ? prevState.filter((val) => val !== e.target.value)
        : [...prevState, e.target.value]
    );

    setFilters((filtersState) => {
      return {
        ...filtersState,
        grades: filtersState.grades?.includes(e.target.value)
          ? filtersState.grades?.filter((val) => val !== e.target.value)
          : [...(filtersState.grades || []), e.target.value],
      };
    });
  };

  useEffect(() => {
    setFilters((filtersState) => ({ ...filtersState, grades: filter }));
  }, [filter]);

  return (
    <Accordion icon={<Vector />} title={formatMessage({ id: 'potential' })} activeFilters={grades}>
      <div className={styles.content}>
        <Checkbox
          value="3"
          onChange={handleClick}
          checked={grades?.includes('3')}
          label={formatMessage({ id: 'invest_f1' })}
        />
        <Checkbox
          value="4"
          onChange={handleClick}
          checked={grades?.includes('4')}
          label={formatMessage({ id: 'invest_f2' })}
        />
        <Checkbox
          value="1"
          onChange={handleClick}
          checked={grades?.includes('1')}
          label={formatMessage({ id: 'invest_f3' })}
        />
        <Checkbox
          value="2"
          onChange={handleClick}
          checked={grades?.includes('2')}
          label={formatMessage({ id: 'invest_f4' })}
        />
      </div>
    </Accordion>
  );
};
