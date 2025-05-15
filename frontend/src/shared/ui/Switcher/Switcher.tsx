import { ChangeEvent, FC } from 'react';
import styles from './Switcher.module.scss';

type SwitcherProps = {
  checked: boolean;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  disabled?: boolean;
};

export const Switcher: FC<SwitcherProps> = ({
  id,
  disabled,
  onChange,
  className,
  value,
  checked,
}) => {
  const classes = [
    styles.switcher__label,
    checked ? styles.checked : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`${styles.switcher} ${className || ''}`}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={classes}>
        <input
          type="checkbox"
          className={styles.switcher__input}
          checked={checked}
          onChange={disabled ? undefined : onChange}
          disabled={disabled}
          id={id}
          data-type={checked ? 'checked' : 'blank'}
          value={value}
        />
        <span className={styles.switcher__inner} />
      </label>
    </div>
  );
};
