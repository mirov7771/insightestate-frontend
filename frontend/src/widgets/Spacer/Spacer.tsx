import { FC } from 'react';
import { StyledSpacer } from './styled';
import { TSpacerProps } from './types';

export const Spacer: FC<TSpacerProps> = ({ width, height }) => {
  return <StyledSpacer width={width} height={height} />;
};
