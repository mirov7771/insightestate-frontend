import { ChangeEvent, FC, FormEventHandler, useEffect, useState } from 'react';
import styles from './SignUpEnd.module.scss';
import { Button, Input, Text, useNotifications } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { LayoutForm } from '@/widgets/RegistrationLayout/LayoutForm/LayoutForm';
import { isAxiosError } from 'axios';

const SignUpEnd: FC = () => {
  const { formatMessage } = useIntl();
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.trim());
  };

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (email && code) {
      try {
        setLoading(true);
        const rs = await detailApi.signUpCheck(email, code);

        if (rs) navigate('/register');
      } catch (e) {
        if (isAxiosError(e)) {
          notify({
            message: e.response?.data?.status?.description,
            severity: 'error',
            duration: 5000,
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');
  }, []);

  return (
    <div className={styles.wrapper}>
      <LayoutForm
        header={formatMessage({ id: 'sign_up' })}
        headerHint={
          <>
            <Text variant="body1" as="p" align="center" className={styles.description}>
              <FormattedMessage id="login.signUpText" values={{ email }} />
              <br />
              <Link to="/sign-up">{formatMessage({ id: 'login.notYou' })}</Link>
            </Text>
          </>
        }
        form={
          <>
            <Input
              onChange={onChangeCode}
              value={code}
              name="code"
              autoComplete={'one-time-code webauthn'}
              placeholder={formatMessage({ id: 'code' })}
            />
            <Button onClick={handleLogin} wide size={'l'} loading={loading}>
              <Text variant="body1" bold align="center" as="span">
                {formatMessage({ id: 'confirm_button' })}
              </Text>
            </Button>
          </>
        }
        onSubmit={handleLogin}
        bottomText={
          <>
            <Text variant="caption1" as="p" className={styles.description} align="center">
              {formatMessage({ id: 'footer_info_text' })}
            </Text>
            <Text variant="body1" as="p" className={styles.signUp} align="center">
              <FormattedMessage
                id="login.signIn"
                values={{ a: (chunk) => <Link to="/login">{chunk}</Link> }}
              />
            </Text>
          </>
        }
      />
    </div>
  );
};

export default SignUpEnd;
