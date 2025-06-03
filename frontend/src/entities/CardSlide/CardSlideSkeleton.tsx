import { FC } from 'react';
import { Skeleton } from '@mui/material';
import styles from './CardSlide.module.scss';

export const CardSlideSkeleton: FC = () => {
  return (
    <div className={styles.skeleton}>
      <Skeleton className={styles.skeleton__slider} />
      <Skeleton variant="text" className={styles.skeleton__name} />
      <Skeleton variant="text" className={styles.skeleton__description} />
      <Skeleton variant="text" className={styles.skeleton__description} />
    </div>
  );
};
