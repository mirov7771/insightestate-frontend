import { FC } from 'react';
import { Checkbox, Text } from '@/shared/ui';
import styles from './WideFilters.module.scss';

export const FilterRooms: FC = () => {
  return (
    <div className={styles.rooms}>
      <div className={styles.rooms__header}>
        <Text variant="heading5">Количество спален</Text>
        <Text variant="body1" bold className={styles.reset}>
          Сбросить
        </Text>
      </div>
      <div className={styles.rooms__container}>
        <Checkbox name="rooms" value="studio" label="Студия" />
        <Checkbox name="rooms" value="1" label="1 спальня" />
        <Checkbox name="rooms" value="2" label="2 спальни" />
        <Checkbox name="rooms" value="3" label="3 спальни" />
        <Checkbox name="rooms" value="4" label="4+ спален" />
      </div>
    </div>
  );
};
