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
import {usersApi} from "@/shared/api/users";
import {useNavigate} from "react-router";
import {useIntl} from "react-intl";

export const UserDeleteModal: FC<
  TModalProps & {
    bottom: number;
    id: string;
  }
> = ({ onClose, open, anchor, onOpen, bottom, id }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const deleteUser = async () => {
    try {
        await usersApi.deleteUser(id);
        localStorage.removeItem('basicToken');
        navigate('/');
        window.location.reload();
    } catch (e) {
      console.log({ e });
    } finally {
      localStorage.clear()
    }
  };
  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={bottom + 7}
        isMobile={isMobile}
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Spacer width="100%" height={8} />
            <Spacer width="100%" height={8} />
            <Text size="xl" align="center" colorTheme={'black200'} isBold>
                {formatMessage({ id: 'deleteProfile' })}
            </Text>
            <Spacer width="100%" height={8} />
            <StyledWrapperText>
              <Text size="m" align="left" colorTheme={'black200'}>
                  {formatMessage({ id: 'deleteProfileMessage' })}
              </Text>
            </StyledWrapperText>
            <Spacer width="100%" height={8} />
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        <div style={{
            display: 'inline-flex',
            gap: '20px',
            width: '90%',
            margin: 'auto'
        }}>
            <StyledButton color="secondary" variant="contained" size="small" onClick={deleteUser}>
                {formatMessage({ id: 'deleteProfileYes' })}
            </StyledButton>
            <StyledButton color="primary" variant="contained" size="small" onClick={onClose}>
                {formatMessage({ id: 'deleteProfileNo' })}
            </StyledButton>
        </div>
      </StyledSwipeableDrawer>
    </>
  );
};
