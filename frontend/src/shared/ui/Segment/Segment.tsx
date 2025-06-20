import { FC, ReactNode } from 'react';
import styles from './Segment.module.scss';

export type IconTabOption = {
  icon: ReactNode;
  value: number;
  disabled?: boolean;
};

type IconTabsProps = {
  onChange: (value: number) => void;
  options: IconTabOption[];
  value: string | number;
  className?: string;
};

export const Segment: FC<IconTabsProps> = ({ options, className, value, onChange }) => {
  return (
    <div className={`${styles.tabs} ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`${styles.tab} ${value === option.value ? styles.active : ''}`}
          onClick={() => !option.disabled && onChange(option.value)}
          disabled={option.disabled}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};
