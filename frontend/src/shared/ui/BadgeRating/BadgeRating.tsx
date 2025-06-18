import { ReactNode } from 'react';
import styles from './BadgeRating.module.scss';

type BadgeRatingProps = {
  text: string;
  background?: 'white' | 'primary';
  className?: string;
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
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
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
