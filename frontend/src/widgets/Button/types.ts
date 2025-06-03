import { ElementType, ReactElement } from 'react';
import { ButtonProps } from '@mui/material';

export type TButtonProps = <C extends ElementType>(
  props: ButtonProps<C, { className?: string; component?: C; isLoading?: boolean }>
) => ReactElement | null;
