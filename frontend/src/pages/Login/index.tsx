import React, { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import styles from '@/pages/Login/Login.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Button, Input, Text } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { isAxiosError } from 'axios';
import { getNavigate } from '@/pages/Authorization';

export const Login: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value.trim());
    setError('');
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
    setError('');
  };

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (username && password) {
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
          } = e.response?.data as { status: { code: string; description: string } };

          setError(description);
        }
      } finally {
        setLoading(false);
      }
    }

    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <Text variant="heading2" align="center" className={styles.header}>
        С возвращением
      </Text>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input
          placeholder="Ваша электронная почта"
          onChange={onChangeUsername}
          value={username}
          name="username"
        />
        <Input
          placeholder={localField('password')}
          onChange={onChangePassword}
          value={password}
          type="password"
          name="password"
        />
        <Button onClick={handleLogin} wide size="l" loading={loading}>
          <Text variant="heading4" align="center" as="span">
            {localField('log_in')}
          </Text>
        </Button>
        {error && (
          <Text variant="caption1" className={styles.error}>
            {error}
          </Text>
        )}
      </form>

      <Text variant="body1" as="p" className={styles.signUp} align="center">
        Нет аккаунта?{' '}
        <Link to="/sign-up" className="button">
          {localField('sign_up_2')}
        </Link>
      </Text>
    </div>
  );
};
