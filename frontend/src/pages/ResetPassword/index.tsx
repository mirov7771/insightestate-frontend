import { ChangeEvent, FC, FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Input, Text } from '@/shared/ui';
import { useIntl } from 'react-intl';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { resetPasswordApi } from '@/shared/api/resetPassword/resetPasswordApi';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import { validationEmail } from '@/pages/Register/validations';

const ResetPassword: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const [formErrors, setFormErrors] = useState<{ email: string }>({ email: '' });

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setFormErrors({ email: '' });
  };

  const handeSendEmail: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    const error = validationEmail(email, formatMessage);

    setFormErrors({ email: error });

    try {
      if (!error) {
        setStatus('LOADING');
        await resetPasswordApi.reset(email);

        setStatus('SUCCESS');
        navigate('/reset-password/code', { state: { login: email } });
      }
    } catch (e) {
      setStatus('ERROR');
      console.log({ e });
    }
  };

  const handleBack = () => {
    navigate('/register');
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');

    return () => {
      setStatus('IDLE');
    };
  }, []);

  return (
    <LayoutForm
      header={formatMessage({ id: 'reset.password' })}
      headerHint={formatMessage({ id: 'reset.enterEmail' })}
      form={
        <>
          <Input
            onChange={handleChangeEmail}
            value={email}
            name="email"
            placeholder={formatMessage({ id: 'login.emailPlaceholder' })}
            error={formErrors.email}
          />
          <Button onClick={handeSendEmail} wide size={'l'} loading={status === 'LOADING'}>
            <Text variant="body1" bold align="center" as="span">
              {formatMessage({ id: 'login.continue' })}
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
      onSubmit={handeSendEmail}
    />
  );
};

export default ResetPassword;
