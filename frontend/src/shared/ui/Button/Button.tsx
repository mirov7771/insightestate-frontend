import { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bold?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  size?: 'l' | 'm' | 's';
  variant?: 'primary' | 'secondary' | 'cta' | 'base' | 'ai' | 'white' | 'red';
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
  icon,
  ...props
}) => {
  const buttonClassNames = [
    styles.button,
    styles[`button__size-${size}`],
    styles[`button__variant-${variant}`],
    loading ? styles.button_loading : '',
    wide ? styles[`button__wide`] : '',
    bold ? styles.button__bold : '',
    icon ? styles.button__icon : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderChildren = () => {
    if (icon) {
      return icon;
    }
    return loading ? <div className={styles.loader}></div> : children;
  };

  return (
    <button {...props} disabled={props.disabled || loading} className={buttonClassNames}>
      {renderChildren()}
    </button>
  );
};
