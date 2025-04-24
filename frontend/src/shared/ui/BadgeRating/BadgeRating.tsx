import { ReactNode } from 'react';
import styles from './BadgeRating.module.scss';

type BadgeRatingProps = {
  icon: ReactNode;
  text: string;
  background?: 'white' | 'primary';
  className?: string;
  size?: 'sm' | 'md';
};

export const BadgeRating = ({
  icon,
  text,
  size = 'md',
  background = 'white',
  className,
}: BadgeRatingProps) => {
  const classes = [styles.badge, styles[size], styles[background], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
