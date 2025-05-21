import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.scss';
import { Text } from '@/shared/ui';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${error ? styles.input__error : ''} ${className}`.trim()}>
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
        {error && (
          <Text variant="caption1" as="span" className={styles.errorText}>
            {error}
          </Text>
        )}
      </div>
    );
  }
);
