import { MouseEventHandler, ElementType, ReactNode, CSSProperties } from 'react';
import { theme } from '@/theme/theme';

export type TTextProps = {
  size: 'xxxl' | 'xxl' | 'xl' | 'l' | 'm' | 's';
  align?: 'left' | 'right' | 'center';
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  colorTheme?: keyof (typeof theme)['colors'];
  href?: string;
  isBold?: boolean;
  onClick?: MouseEventHandler;
  opacity?: number;
  style?: CSSProperties;
};
