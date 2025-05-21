import { FC } from 'react';
import { Skeleton } from '@mui/material';
import styles from './ProfileSkeleton.module.scss';

export const ProfileSkeleton: FC = () => {
  return (
    <div>
      <Skeleton className={styles.avatar} variant="circular" />
      <Skeleton className={styles.name} variant="text" />
      <Skeleton className={styles.description} variant="text" />

      <div className={styles.info}>
        <Skeleton className={styles.info__header} />
        <div className={styles.info__wrapper}>
          <Skeleton className={styles.info__name} />
          <Skeleton className={styles.info__value} />
        </div>
      </div>
      <div className={styles.info}>
        <Skeleton className={styles.info__header} />
        <div className={styles.info__wrapper}>
          <Skeleton className={styles.info__name} />
          <Skeleton className={styles.info__value} />
        </div>
      </div>
      <div className={styles.info}>
        <Skeleton className={styles.info__header} />
        <div className={styles.info__wrapper}>
          <Skeleton className={styles.info__name} />
          <Skeleton className={styles.info__value} />
        </div>
      </div>
    </div>
  );
};
