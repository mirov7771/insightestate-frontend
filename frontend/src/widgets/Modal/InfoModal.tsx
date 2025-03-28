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
import { isMobile } from 'react-device-detect';
import { localField } from '@/i18n/localField';

export const InfoModal: FC<
  TModalProps & {
    bottom: number;
    title: string;
    children?: React.ReactNode;
    text?: string;
  }
> = ({ onClose, open, anchor, onOpen, title, text, bottom, children }) => {
  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={bottom}
        isMobile={isMobile}
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
                {text ? text : children}
              </Text>
            </StyledWrapperText>
            <Spacer width="100%" height={8} />
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        <StyledButton color="secondary" variant="contained" size="medium" onClick={onClose}>
          {localField('ok')}
        </StyledButton>
      </StyledSwipeableDrawer>
    </>
  );
};
