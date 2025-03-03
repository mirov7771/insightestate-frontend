import { FC, InputHTMLAttributes } from 'react';
import styles from './RadioButton.module.scss';

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const RadioButton: FC<RadioButtonProps> = ({ label, className, ...props }) => {
  const radioButtonClassNames = [styles.radio, className].filter(Boolean).join(' ');

  return (
    <label className={radioButtonClassNames}>
      <input type="radio" {...props} className={styles.radio__input} />
      <span className={styles.radio__custom} />
      {!!label && <span className={styles.radio__label}>{label}</span>}
    </label>
  );
};
