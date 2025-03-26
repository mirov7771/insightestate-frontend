import React, { FC } from 'react';
import { TModalProps } from './types';
import {
  StyledSwipeableDrawer,
  StyledWrapperProgress,
  StyledUpperWrapperProgress,
  StyledButton,
  StyledWrapperText,
} from './styled';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';

export const InfoModal: FC<TModalProps & { title: string; text: string; bottom: number }> = ({
  onClose,
  open,
  anchor,
  onOpen,
  title,
  text,
  bottom
}) => {
  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={bottom}
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Spacer width="100%" height={8} />
            <Spacer width="100%" height={8} />
            <Text size="xl" align="center" colorTheme={'black200'} isBold>
              {title}
            </Text>
            <Spacer width="100%" height={8} />
            <StyledWrapperText>
              <Text size="m" align="left" colorTheme={'black200'}>
                {text}
              </Text>
            </StyledWrapperText>
            <Spacer width="100%" height={8} />
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        <StyledButton color="secondary" variant="contained" size="medium" onClick={onClose}>
          Понятно
        </StyledButton>
      </StyledSwipeableDrawer>
    </>
  );
};
