import { FC } from 'react';
import { TModalProps } from './types';
import {
  StyledSwipeableDrawer,
  StyledWrapperProgress,
  StyledUpperWrapperProgress,
  StyledWrapperText,
} from './styled';
import { Spacer } from '../Spacer/Spacer';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import {Button, Text} from "@/shared/ui";
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

export const UserSubscriptionModal: FC<
  TModalProps & { bottom: number; }
> = ({ onClose, open, anchor, onOpen, bottom }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const deleteSubscription = async () => {
    estateCollectionApi.deleteUserSubscription()
        .then(() => {
          localStorage.clear();
          localStorage.setItem('openAuth', '1')
          navigate('/');
          window.location.reload();
        }).catch((e) => console.log(e))
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
            <Text align="center" bold variant='heading4'>
              {formatMessage({ id: 'deleteSubscription' })}
            </Text>
            <Spacer width="100%" height={8} />
            <StyledWrapperText>
              <Text align="left" variant='body1'>
                {formatMessage({ id: 'deleteSubscriptionMessage' })}
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
              {formatMessage({ id: 'deleteSubscriptionNo' })}
            </Text>
          </Button>
          <Button onClick={deleteSubscription} size="l" variant="primary" style={{
            width: '200px'
          }}>
            <Text variant="body1">
              {formatMessage({ id: 'deleteSubscriptionYes' })}
            </Text>
          </Button>
        </div>
      </StyledSwipeableDrawer>
    </>
  );
};
