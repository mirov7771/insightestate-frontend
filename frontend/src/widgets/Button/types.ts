import React from 'react';
import { ButtonProps } from '@mui/material';

export type TButtonProps = <C extends React.ElementType>(
  props: ButtonProps<C, { className?: string; component?: C; isLoading?: boolean }>
) => React.ReactElement | null;
