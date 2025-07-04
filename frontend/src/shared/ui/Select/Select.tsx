import { FC, InputHTMLAttributes } from 'react';
import styles from './Select.module.scss';
import { IconChevronLeft } from '@/shared/assets/icons';

type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  options: Array<{ id: string; name: string }>;
  className?: string;
  error?: string;
  label?: string;
};

export const Select: FC<SelectProps> = ({ className, options, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`.trim()}>
      <select className={styles.input} {...props}>
        {options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
      <span className={styles.arrow}>
        <IconChevronLeft />
      </span>
    </div>
  );
};
