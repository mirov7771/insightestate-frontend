import { FC, JSX, ReactNode } from 'react';
import styles from './TextV2.module.scss';

type TextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'subheading1'
  | 'subheading2'
  | 'body1'
  | 'body2'
  | 'caption1'
  | 'heading1_upper'
  | 'heading2_upper'
  | 'heading3_upper'
  | 'heading4_upper'
  | 'heading5_upper';

type TextAlign = 'left' | 'center' | 'right';

type TextProps = {
  children?: ReactNode;
  align?: TextAlign;
  as?: keyof JSX.IntrinsicElements;
  bold?: boolean;
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
  bold = false,
  onClick,
}) => {
  return (
      children ?
          <Component
              className={`${styles.text} ${styles[variant]} ${styles[align]} ${bold ? styles.bold : null} ${className}`}
              onClick={onClick}
          >
            {children ?? ''}
          </Component> : <></>
  );
};
