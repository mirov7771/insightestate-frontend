import React, { ChangeEvent, FC, useState } from 'react';
import styles from '@/pages/Login/Login.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { BaseField } from '@/widgets/BaseField/BaseField';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import {getNavigate} from "@/pages/Authorization";

export const Login: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;

    setUsername(username);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    setPassword(password);
  };

  const handleLogin = async () => {
    setLoading(true);
    const rs = await detailApi.login(username, password);

    if (rs) {
      getNavigate().then((r) => navigate(r)).catch((e) => {
        console.log(e)
        navigate('/listing')
      });
    }
    setPassword('');
    setLoading(false);
  };

  return (
    <>
      <div className={`${styles.card} ${styles.cardContainer}`}>
        <div className={styles.profileImgCard}>
          <LogoIcon />
        </div>
        <Spacer height={8} width={100} />
        <BaseField onChange={onChangeUsername} value={username} name="username" label="Email" />
        <Spacer height={8} width={100} />
        <BaseField
          onChange={onChangePassword}
          value={password}
          type="password"
          name="password"
          label={localField('password')}
        />
        <Spacer height={20} width={100} />
        <Button onClick={handleLogin} wide size={'l'} loading={loading}>
          {localField('log_in')}
        </Button>
        <Spacer height={20} width={100} />
        <div className={styles.centerRegistration}>
          <a href={'/sign-up'} className="button">
            {localField('sign_up')}
          </a>
        </div>
      </div>
      <Politics />
    </>
  );
};

export const Politics = () => {
  return (
    <div className={styles.politics}>
      {localField('politics_1')}{' '}
      <a
        href="https://www.insightestate.com/privacy"
        target="_blank"
        className="button"
        rel="noreferrer"
      >
        {localField('politics_2')}
      </a>
    </div>
  );
};
