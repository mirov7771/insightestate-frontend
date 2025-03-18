import styled from '@emotion/styled';
import { theme } from '@/theme/theme';
import { TTextProps } from './types';

const fontSize = {
  xxxl: 32,
  xxl: 24,
  xl: 20,
  l: 16,
  m: 14,
  s: 12,
};
const lineHeight = {
  xxxl: 40,
  xxl: 32,
  xl: 28,
  l: 24,
  m: 20,
  s: 14,
};

const letterSpacing = {
  xxxl: -0.2,
  xxl: -0.2,
  xl: -0.4,
  l: -0.2,
  m: -0.1,
  s: 0,
};

export const TextUI = styled('p')<TTextProps>`
  font-family: 'Inter', sans-serif;
  font-weight: ${({ isBold }) => (isBold ? 600 : 400)};
  font-size: ${({ size }) => `${fontSize[size]}px`};
  line-height: ${({ size }) => `${lineHeight[size]}px`};
  letter-spacing: ${({ size }) => `${letterSpacing[size]}px`};
  color: ${({ colorTheme }) => (colorTheme ? theme.colors[colorTheme] : theme.colors.black100)};
  text-align: ${({ align }) => align};
  opacity: ${({ opacity }) => opacity || 1};
`;
