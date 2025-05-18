import React, { ChangeEvent, FC, FormEventHandler, useEffect, useState } from 'react';
import styles from './SignUpEnd.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Button, Input, Text } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { detailApi } from '@/widgets/Detail/api/detailApi';

export const SignUpEnd: FC = () => {
  const { formatMessage } = useIntl();
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
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <Text variant="heading2" align="center" className={styles.header}>
        {formatMessage({ id: 'sign_up' })}
      </Text>
      <Text variant="body1" as="p" align="center" className={styles.description}>
        <FormattedMessage id="login.signUpText" values={{ email }} />
        <br />
        <Link to="/sign-up">{formatMessage({ id: 'login.notYou' })}</Link>
      </Text>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input
          onChange={onChangeCode}
          value={code}
          name="code"
          placeholder={formatMessage({ id: 'code' })}
        />
        <Button onClick={handleLogin} wide size={'l'} loading={loading}>
          <Text variant="heading4" align="center" as="span">
            {formatMessage({ id: 'confirm_button' })}
          </Text>
        </Button>
      </form>
      <Text variant="caption2" as="p" className={styles.description} align="center">
        {formatMessage({ id: 'footer_info_text' })}
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
