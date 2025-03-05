import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  size?: 'l' | 'm' | 's';
  variant?: 'primary' | 'secondary' | 'cta';
  wide?: boolean;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'm',
  variant = 'primary',
  wide = false,
  className,
  loading,
  ...props
}) => {
  const buttonClassNames = [
    styles.button,
    styles[`button__size-${size}`],
    styles[`button__variant-${variant}`],
    loading ? styles.button_loading : '',
    wide ? styles[`button__wide`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...props} disabled={props.disabled || loading} className={buttonClassNames}>
      {loading ? <div className={styles.loader}></div> : children}
    </button>
  );
};
