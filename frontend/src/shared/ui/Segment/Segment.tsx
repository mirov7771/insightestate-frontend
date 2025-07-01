import { FC, ReactNode } from 'react';
import styles from './Segment.module.scss';
import { Text } from '@/shared/ui';

export type IconTabOption = {
  icon: ReactNode;
  value: number;
  disabled?: boolean;
  text?: string;
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
          className={`${styles.tab} ${value === option.value ? styles.active : ''} ${!!option.text ? styles.full : ''}`}
          onClick={() => !option.disabled && onChange(option.value)}
          disabled={option.disabled}
        >
          {option.icon}
          {!!option.text && (
            <Text className={styles.tab__text} variant="body2" bold>
              {option.text}
            </Text>
          )}
        </button>
      ))}
    </div>
  );
};
