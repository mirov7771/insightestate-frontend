import { FC, ReactElement } from 'react';
import { Text } from '@/shared/ui';
import styles from './Filter.module.scss';

type FilterLayoutProps = {
  filter: ReactElement;
  isActiveFilter: boolean;
  onResetFilter: () => void;
  name?: string;
};

export const FilterLayout: FC<FilterLayoutProps> = ({
  isActiveFilter,
  onResetFilter,
  filter,
  name,
}) => {
  return (
    <div className={styles.layout}>
      {!!name && (
        <div className={styles.layout__header}>
          {name && <Text variant="heading5">{name}</Text>}
          {isActiveFilter && (
            <Text className={styles.layout__reset} variant="heading5" onClick={onResetFilter}>
              Reset
            </Text>
          )}
        </div>
      )}
      <div>{filter}</div>
    </div>
  );
};
