import { FC } from 'react';
import { TModalProps } from './types';
import {
  StyledSwipeableDrawer,
  StyledWrapperProgress,
  StyledUpperWrapperProgress,
  StyledButton,
  StyledWrapperText,
} from './styled';
import { Spacer } from '../Spacer/Spacer';
import { isMobile } from 'react-device-detect';
import { usersApi } from '@/shared/api/users';
import { useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import {Button, Text} from "@/shared/ui";

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
      localStorage.clear();
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
            <Text align="center" bold variant='body1'>
              {formatMessage({ id: 'deleteProfile' })}
            </Text>
            <Spacer width="100%" height={8} />
            <StyledWrapperText>
              <Text align="left">
                {formatMessage({ id: 'deleteProfileMessage' })}
              </Text>
            </StyledWrapperText>
            <Spacer width="100%" height={8} />
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        <div
          style={{
            display: 'inline-flex',
            gap: '20px',
            margin: 'auto',
          }}
        >
          <Button onClick={onClose} size="l" variant="base" style={{
            width: '200px'
          }}>
            <Text variant="body1">
              {formatMessage({ id: 'deleteProfileNo' })}
            </Text>
          </Button>
          <Button onClick={deleteUser} size="l" variant="primary" style={{
            width: '200px'
          }}>
            <Text variant="body1">
              {formatMessage({ id: 'deleteProfileYes' })}
            </Text>
          </Button>
        </div>
      </StyledSwipeableDrawer>
    </>
  );
};
