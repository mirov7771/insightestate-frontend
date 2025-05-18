import React, { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import styles from './SignUp.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Button, Input, Text } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { isAxiosError } from 'axios';

// Регистрация
export const SignUp: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
    setError('');
  };

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      try {
        const rs = await detailApi.signUp(email);

        if (rs) navigate('/sign-up-end');
      } catch (e) {
        if (isAxiosError(e)) {
          const {
            status: { description },
          } = e.response?.data as { status: { code: string; description: string } };

          setError(description);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <Text variant="heading2" align="center" className={styles.header}>
        {formatMessage({ id: 'sign_up' })}
      </Text>
      <Text variant="body1" as="p" align="center" className={styles.description}>
        {formatMessage({ id: 'login.uniqEstates' })}
      </Text>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input
          onChange={onChangeUsername}
          value={email}
          name="username"
          placeholder={formatMessage({ id: 'login.emailPlaceholder' })}
          error={error}
        />

        <Button onSubmit={handleLogin} wide size="l" loading={loading} type="submit">
          <Text variant="heading4" align="center" as="span">
            {formatMessage({ id: 'login.continue' })}
          </Text>
        </Button>
      </form>

      <Text variant="body2" as="p" className={styles.description} align="center">
        <FormattedMessage
          id="login.agreeText"
          values={{
            a: (chunk) => (
              <a
                href="https://www.insightestate.com/privacy"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {chunk}
              </a>
            ),
          }}
        />
      </Text>

      <Text variant="body1" as="p" className={styles.signUp} align="center">
        <FormattedMessage
          id="login.signIn"
          values={{ a: (chunk) => <Link to="/login">{chunk}</Link> }}
        />
      </Text>
    </div>
  );
};
