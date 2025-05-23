import { FC, ReactNode } from 'react';
import { Progress } from './Progress';
import styles from './Progresses.module.scss';

type ProgressesProps = {
  items: {
    label: string;
    value: number;
    className?: string;
    icon?: ReactNode;
    max?: number;
    min?: number;
  }[];
};

export const Progresses: FC<ProgressesProps> = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item) => (
        <Progress {...item} />
      ))}
    </div>
  );
};
