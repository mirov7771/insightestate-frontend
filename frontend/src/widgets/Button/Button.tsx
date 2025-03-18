import React from 'react';
import { StyledButton, StyledCircularProgress } from './styled';
import { TButtonProps } from './types';

export const Button: TButtonProps = ({ size, isLoading = false, children, ...props }) => {
  const sizeCircularProgress = size === 'small' ? 20 : 24;

  return (
    <StyledButton {...props} size={size} isLoading={isLoading}>
      {isLoading && <StyledCircularProgress size={sizeCircularProgress} />}
      {children}
    </StyledButton>
  );
};
