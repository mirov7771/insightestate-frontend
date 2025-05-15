import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bold?: boolean;
  loading?: boolean;
  size?: 'l' | 'm' | 's';
  variant?: 'primary' | 'secondary' | 'cta' | 'base';
  wide?: boolean;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'm',
  variant = 'primary',
  wide = false,
  className,
  loading,
  bold = false,
  ...props
}) => {
  const buttonClassNames = [
    styles.button,
    styles[`button__size-${size}`],
    styles[`button__variant-${variant}`],
    loading ? styles.button_loading : '',
    wide ? styles[`button__wide`] : '',
    bold ? styles.button__bold : '',
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
