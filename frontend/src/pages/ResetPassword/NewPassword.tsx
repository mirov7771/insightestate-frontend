import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { Button, Input, Text } from '@/shared/ui';
import { resetPasswordApi } from '@/shared/api/resetPassword/resetPasswordApi';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { getNavigate } from '@/pages/Authorization';

export const NewPassword: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const { login = '', code = '' } = location.state || {};
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'repeatPassword') {
      setRepeatPassword(value);
    }
  };

  const handleSubmit: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      if (code && login && password === repeatPassword) {
        setStatus('LOADING');
        await resetPasswordApi.resetConfirm({ newPassword: password, login, confirmCode: code });
        await detailApi.login(login, password);
        setStatus('SUCCESS');
        const route = await getNavigate();

        navigate(route);
      }
    } catch (e) {
      setStatus('ERROR');
      console.log({ e });
    }
  };

  return (
    <LayoutForm
      header={formatMessage({ id: 'reset.newPassword' })}
      headerHint={formatMessage({ id: 'reset.newPasswordDescription' })}
      form={
        <>
          <Input
            name="password"
            value={password}
            onChange={handleChangeInput}
            placeholder={formatMessage({ id: 'reset.newPassword' })}
            type="password"
          />
          <Input
            name="repeatPassword"
            value={repeatPassword}
            onChange={handleChangeInput}
            placeholder={formatMessage({ id: 'reset.confirmPassword' })}
            type="password"
            autoComplete={'new-password'}
          />
          <Button
            wide
            size={'l'}
            type="submit"
            onSubmit={handleSubmit}
            loading={status === 'LOADING'}
          >
            <Text variant="heading4" align="center" as="span">
              {formatMessage({ id: 'log_in' })}
            </Text>
          </Button>
        </>
      }
      onSubmit={handleSubmit}
    />
  );
};
