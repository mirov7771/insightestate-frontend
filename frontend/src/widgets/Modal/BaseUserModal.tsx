import { ChangeEvent, FC, useEffect, useState } from 'react';
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
import { BaseField } from '@/widgets/BaseField/BaseField';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { isMobile } from 'react-device-detect';
import {FormattedMessage, useIntl} from "react-intl";

export const BaseUserModal: FC<TModalProps & { id: string; object: string; token: string }> = ({
  onClose,
  open,
  anchor,
  onOpen,
  id,
  object,
  token,
}) => {
  const { formatMessage } = useIntl();
  const [agree, setAgree] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const clickAgree = () => {
    setAgree(true);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const clickSend = (e: ChangeEvent) => {
    estateCollectionApi
      .helpWithClient(token, {
        name: name,
        lastName: lastName,
        location: location,
        phone: phone,
        objectName: object,
        objectId: id,
      })
      .then(() => {
        onClose(e);
      })
      .catch((e) => {
        console.log(e);
        onClose(e);
      });
  };

  useEffect(() => {
    setAgree(false);
  }, [open]);

  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={agree ? 10 : 20}
        isMobile={isMobile}
      >
        <StyledUpperWrapperProgress>
          {agree ? (
            <StyledWrapperProgress>
              <Spacer width="100%" height={8} />
              <Spacer width="100%" height={8} />
              <Text size="xl" align="center" colorTheme={'black200'} isBold>
                {formatMessage({id : 'help_client'})}
              </Text>
              <Spacer width="100%" height={8} />
              <BaseField onChange={onChangeName} value={name} name="name" label={formatMessage({id : 'help_firstName'})} />
              <Spacer width="100%" height={8} />
              <BaseField
                onChange={onChangeLastName}
                value={lastName}
                name="lastName"
                label={formatMessage({id : 'help_lastName'})}
              />
              <Spacer width="100%" height={8} />
              <BaseField onChange={onChangePhone} value={phone} name="phone" label={formatMessage({id : 'help_phone'})} />
              <Spacer width="100%" height={8} />
              <BaseField value={object} name="object" disabled={true} label={formatMessage({id : 'help_object'})} />
              <Spacer width="100%" height={8} />
              <BaseField
                onChange={onLocation}
                value={location}
                name="location"
                label={formatMessage({id : 'help_city'})}
              />
            </StyledWrapperProgress>
          ) : (
            <StyledWrapperProgress>
              <Spacer width="100%" height={8} />
              <Spacer width="100%" height={8} />
              <Text size="xl" align="center" colorTheme={'black200'} isBold>
                {formatMessage({id : 'help_title'})}
              </Text>
              <Spacer width="100%" height={8} />
              <StyledWrapperText>
                <Text size="m" align="left" colorTheme={'black200'}>
                  <FormattedMessage
                      id="help_text"
                      values={{ br: () => <br /> }}
                  />
                </Text>
              </StyledWrapperText>
              <Spacer width="100%" height={8} />
            </StyledWrapperProgress>
          )}
        </StyledUpperWrapperProgress>
        <Spacer width="100%" height={24} />
        {agree ? (
          <StyledButton color="secondary" variant="contained" size="medium" onClick={clickSend}>
            {formatMessage({id : 'help_button1'})}
          </StyledButton>
        ) : (
          <StyledButton color="secondary" variant="contained" size="medium" onClick={clickAgree}>
            {formatMessage({id : 'help_button2'})}
          </StyledButton>
        )}
      </StyledSwipeableDrawer>
    </>
  );
};
