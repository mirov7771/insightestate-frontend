import React, { ChangeEvent, FC, useState } from 'react';
import styles from '@/pages/SignUp/SignUp.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { BaseField } from '@/widgets/BaseField/BaseField';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { detailApi } from '@/widgets/Detail/api/detailApi';

export const SignUp: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;

    setUsername(username);
  };

  const handleLogin = async () => {
    setLoading(true);
    const rs = await detailApi.signUp(username);

    if (rs) navigate('/sign-up-end');
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
        <Spacer height={20} width={100} />
        <Button onClick={handleLogin} wide size={'l'} loading={loading}>
          {localField('receive_code')}
        </Button>
        <Spacer height={20} width={100} />
        <div className={styles.centerRegistration}>
          <a href={'/login'} className="button">
            {localField('log_in')}
          </a>
        </div>
      </div>
      <FooterInfo />
    </>
  );
};

export const FooterInfo = () => {
  return <div className={styles.politics}>{localField('footer_info_text')}</div>;
};
