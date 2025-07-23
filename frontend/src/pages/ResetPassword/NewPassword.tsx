import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { Button, Input, Text, useNotifications } from '@/shared/ui';
import { resetPasswordApi } from '@/shared/api/resetPassword/resetPasswordApi';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { getNavigate } from '@/pages/Authorization';
import { validationPassword } from '@/pages/Register/validations';
import { isAxiosError } from 'axios';

const NewPassword: FC = () => {
  const { formatMessage } = useIntl();
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const location = useLocation();
  const { login = '', code = '' } = location.state || {};
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const [formErrors, setFormErrors] = useState<{ password: string; repeatPassword: string }>({
    password: '',
    repeatPassword: '',
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'password') {
      setPassword(value);
      setFormErrors((prev) => ({ ...prev, password: '' }));
    }
    if (name === 'repeatPassword') {
      setRepeatPassword(value);
      setFormErrors((prev) => ({ ...prev, repeatPassword: '' }));
    }
  };

  const handleSubmit: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errors: typeof formErrors = {
      password: validationPassword(password, formatMessage),
      repeatPassword: validationPassword(repeatPassword, formatMessage),
    };

    setFormErrors(errors);

    try {
      if (
        code &&
        login &&
        password === repeatPassword &&
        !Object.values(errors).some((val) => val)
      ) {
        setStatus('LOADING');
        await resetPasswordApi.resetConfirm({ newPassword: password, login, confirmCode: code });
        await detailApi.login(login, password);
        setStatus('SUCCESS');
        const route = await getNavigate();

        navigate(route);
      }
    } catch (e) {
      if (isAxiosError(e)) {
        const { description } = e.response?.data?.status || { description: '' };

        notify({ message: description, severity: 'error', duration: 5000 });
      }
      setStatus('ERROR');
    }
  };

  const handleBack = () => {
    navigate('/login');
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
            error={formErrors.password}
          />
          <Input
            name="repeatPassword"
            value={repeatPassword}
            onChange={handleChangeInput}
            placeholder={formatMessage({ id: 'reset.confirmPassword' })}
            type="password"
            autoComplete={'new-password'}
            error={formErrors.repeatPassword}
          />
          <Button
            wide
            size={'l'}
            type="submit"
            onSubmit={handleSubmit}
            loading={status === 'LOADING'}
          >
            <Text variant="body1" bold align="center" as="span">
              {formatMessage({ id: 'log_in' })}
            </Text>
          </Button>
          <Button
            onClick={handleBack}
            wide
            variant="text"
            size={'l'}
            loading={status === 'LOADING'}
          >
            <Text variant="body1" bold align="center" as="span">
              {formatMessage({ id: 'common.back' })}
            </Text>
          </Button>
        </>
      }
      onSubmit={handleSubmit}
    />
  );
};

export default NewPassword;
