import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import styles from './Input.module.scss';
import { Text } from '@/shared/ui';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  icon?: ReactNode;
  iconOnClick?: () => void;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', icon = null, iconOnClick, ...props }, ref) => {
    return (
      <div
        className={`${styles.wrapper} ${error ? styles.input__error : ''} ${!!icon ? styles.input__icon : ''} ${className}`.trim()}
      >
        {label && (
          <Text variant="heading4" as="label" className={styles.label}>
            {label}
          </Text>
        )}
        <input
          ref={ref}
          className={`${styles.input} ${error ? styles.input__error : ''}`}
          {...props}
        />
        {!!icon && (
          <div className={styles.icon} onClick={iconOnClick}>
            {icon}
          </div>
        )}
        {error && (
          <Text variant="caption1" as="span" className={styles.errorText}>
            {error}
          </Text>
        )}
      </div>
    );
  }
);
