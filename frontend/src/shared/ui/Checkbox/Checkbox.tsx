import { FC, InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';
import Tick from './Tick.svg?react';
import { Text } from '@/shared/ui';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Checkbox: FC<CheckboxProps> = ({ label, checked = false, onChange, ...props }) => {
  const checkboxClassNames = [styles.checkbox, checked ? styles.checkbox_checked : '']
    .filter(Boolean)
    .join(' ');

  return (
    <label className={checkboxClassNames}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox__input}
        {...props}
      />
      <span className={styles.checkbox__box}>
        <Tick />
      </span>
      {label && <Text variant="body1">{label}</Text>}
    </label>
  );
};
