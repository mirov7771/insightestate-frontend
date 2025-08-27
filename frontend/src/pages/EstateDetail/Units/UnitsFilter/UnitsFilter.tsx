import { FC } from 'react';
import { Button, Text } from '@/shared/ui';
import styles from './UnitsFilter.module.scss';
import { IconAdjustmentsFilter } from '@/shared/assets/icons';
import { ShortFilter } from './ShortFilter/ShortFilter';
import { FormattedMessage } from 'react-intl';

export const UnitsFilter: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Button className={styles.button} size="s" variant="base">
        <IconAdjustmentsFilter />
        <Text variant="body1" bold>
          <FormattedMessage id="units.filters" />
        </Text>
      </Button>
      <ShortFilter />
    </div>
  );
};
