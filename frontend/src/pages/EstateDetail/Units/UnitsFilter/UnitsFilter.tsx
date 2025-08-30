import { FC } from 'react';
import styles from './UnitsFilter.module.scss';
import { ShortFilter } from './ShortFilter/ShortFilter';
import { WideFilters } from './WideFilters/WideFilters';

export const UnitsFilter: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <WideFilters />
      <ShortFilter />
    </div>
  );
};
