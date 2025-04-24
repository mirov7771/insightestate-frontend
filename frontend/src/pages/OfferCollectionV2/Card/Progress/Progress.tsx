import styles from './Progress.module.scss';
import { ReactNode } from 'react';
import { Text } from '@/shared/ui';

type Props = {
  label: string;
  value: number;
  className?: string;
  icon?: ReactNode;
  max?: number;
  min?: number;
};

export const Progress = ({ icon, label, value, min = 0, max = 10, className }: Props) => {
  const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <div className={styles.topRow}>
        <div className={styles.label}>
          <Text variant="body1">{label}</Text>
          {icon && <span className={styles.icon}>{icon}</span>}
        </div>
        <div className={styles.value}>
          <Text variant="heading4">{value.toFixed(1).replace('.', ',')}</Text>
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
