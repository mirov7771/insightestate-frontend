import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import styles from '@/pages/Login/Login.module.scss';
import { Button, Input, Text } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { isAxiosError } from 'axios';
import { getNavigate } from '@/pages/Authorization';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { validationEmail, validationPassword } from '@/pages/Register/validations';

const Login: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState<{ password: string; username: string }>({
    username: '',
    password: '',
  });
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value.trim());
    setError('');
    setFormErrors((prevState) => ({ ...prevState, username: '' }));
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
    setError('');
    setFormErrors((prevState) => ({ ...prevState, password: '' }));
  };

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    const errors: typeof formErrors = {
      username: validationEmail(username, formatMessage),
      password: validationPassword(password, formatMessage),
    };

    setFormErrors(errors);

    if (!Object.values(errors).some((val) => val)) {
      setLoading(true);
      try {
        const rs = await detailApi.login(username, password);

        if (rs) {
          getNavigate()
            .then((r) => navigate(r))
            .catch((e) => {
              console.log(e);
              navigate('/listing');
            });
          setPassword('');
        }
      } catch (e) {
        if (isAxiosError(e)) {
          const {
            status: { description },
          } = (e.response?.data as { status: { code: string; description: string } }) || {
            status: {},
          };

          console.log('Error,', description);
          setError(formatMessage({ id: 'login.wrongLoginOrPassword' }));
        }
      } finally {
        setLoading(false);
      }
    }

    setLoading(false);
  };

  return (
    <LayoutForm
      header={formatMessage({ id: 'login.welcomeBack' })}
      onSubmit={handleLogin}
      form={
        <>
          <Input
            placeholder={formatMessage({ id: 'login.emailPlaceholder' })}
            onChange={onChangeUsername}
            value={username}
            name="username"
            error={formErrors.username}
          />
          <Input
            placeholder={formatMessage({ id: 'password' })}
            onChange={onChangePassword}
            value={password}
            type="password"
            name="password"
            error={formErrors.password}
          />
          <Button onClick={handleLogin} wide size="l" loading={loading}>
            <Text variant="body1" bold align="center" as="span">
              {formatMessage({ id: 'log_in' })}
            </Text>
          </Button>
          {error ? (
            <Text variant="caption1" className={styles.error}>
              {error}
            </Text>
          ) : (
            <></>
          )}
        </>
      }
      bottomText={
        <>
          <Text variant="body1" as="p" className={styles.signUp} align="center">
            <FormattedMessage
              id="login.forgotPassword"
              values={{
                a: (chunk) => (
                  <Link to="/reset-password" className="button">
                    {chunk}
                  </Link>
                ),
              }}
            />
          </Text>

          <Text variant="body1" as="p" className={styles.signUp} align="center">
            <FormattedMessage
              id="login.haveAccount"
              values={{
                a: (chunk) => (
                  <Link to="/register" className="button">
                    {chunk}
                  </Link>
                ),
              }}
            />
          </Text>
        </>
      }
    />
  );
};

export default Login;
