import { FC, JSX, ReactNode } from 'react';
import styles from './Text.module.scss';

type TextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading3-1'
  | 'heading4'
  | 'heading5'
  | 'subheading'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'caption2'
  | 'heading4_White';

type TextAlign = 'left' | 'center' | 'right';

type TextProps = {
  children: ReactNode;
  align?: TextAlign;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  onClick?: () => void;
  variant?: TextVariant;
};

export const Text: FC<TextProps> = ({
  children,
  variant = 'body1',
  align = 'left',
  className = '',
  as: Component = 'span', // по умолчанию "span"
  onClick,
}) => {
  return (
    <Component
      className={`${styles.text} ${styles[variant]} ${styles[align]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};
