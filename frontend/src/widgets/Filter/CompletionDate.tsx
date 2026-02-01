import {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './Filter.module.scss';
import { Checkbox } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { FilterLayout } from '@/widgets/Filter/FilterLayout';
import { useSearchParams } from 'react-router';

export const CompletionDate: FC<{ renderName?: boolean }> = ({ renderName = true }) => {
  const { formatMessage } = useIntl();
  const { setFilters, buildEndYears } = useFilters();
  const [, setSearchParams] = useSearchParams();

  const [uiYears, setUiYears] = useState<number[]>(buildEndYears || []);

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    console.log('[UI] click year:', value);

    setUiYears((prev) => {
      const next = prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];

      console.log('[UI] uiYears:', next);
      return next;
    });
  };

  useEffect(() => {
    console.log('[SYNC] buildEndYears → uiYears', buildEndYears);
    setUiYears(buildEndYears || []);
  }, [buildEndYears]);


  useEffect(() => {
    const same =
        uiYears.length === (buildEndYears?.length || 0) &&
        uiYears.every((y) => buildEndYears?.includes(y));

    if (same) {
      console.log('[DEBOUNCE] skip — years not changed');
      return;
    }

    console.log('[DEBOUNCE] apply filters', uiYears);

    const timeout = setTimeout(() => {
      setFilters((filtersState) => ({
        ...filtersState,
        pageNumber: 0,           // ✅ сбрасываем ТОЛЬКО при реальном изменении
        buildEndYears: uiYears,
      }));

      setSearchParams((params) => {
        params.set('page', '0');
        return params;
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [uiYears, buildEndYears, setFilters, setSearchParams]);

  const handleReset = () => {
    console.log('[RESET] completion date');

    setUiYears([]);

    setFilters((filtersState) => ({
      ...filtersState,
      pageNumber: 0,
      buildEndYears: [],
    }));

    setSearchParams((params) => {
      params.set('page', '0');
      return params;
    });
  };

  useEffect(() => {
    console.log('[Filter] buildEndYears changed:', buildEndYears);
  }, [buildEndYears]);

  return (
      <FilterLayout
          name={renderName ? formatMessage({ id: 'completion_date' }) : ''}
          isActiveFilter={uiYears.length > 0}
          onResetFilter={handleReset}
          filter={
            <div className={styles.content}>
              <Checkbox
                  label="2025"
                  value={2025}
                  onChange={handleClick}
                  checked={uiYears.includes(2025)}
              />
              <Checkbox
                  label="2026"
                  value={2026}
                  onChange={handleClick}
                  checked={uiYears.includes(2026)}
              />
              <Checkbox
                  label="2027"
                  value={2027}
                  onChange={handleClick}
                  checked={uiYears.includes(2027)}
              />
              <Checkbox
                  label="2028"
                  value={2028}
                  onChange={handleClick}
                  checked={uiYears.includes(2028)}
              />
            </div>
          }
      />
  );
};
