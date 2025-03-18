import styled from '@emotion/styled';
import { TSpacerProps } from '@/widgets/Spacer/types';

export const StyledSpacer = styled('div')<TSpacerProps>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
`;
