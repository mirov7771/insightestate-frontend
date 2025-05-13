import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from '@/pages/Register/Register.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { BaseField } from '@/widgets/BaseField/BaseField';
import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import {getNavigate} from "@/pages/Authorization";

export const Register: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const [whatsUp, setWhatsUp] = useState('');
  const [tgName, setTgName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;

    setUsername(username);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setEmail(email);
  };

  const onChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    const location = e.target.value;

    setLocation(location);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;

    setPhone(phone);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    setPassword(password);
  };

  const onChangeWhatsUp = (e: ChangeEvent<HTMLInputElement>) => {
    const whatsUp = e.target.value;

    setWhatsUp(whatsUp);
  };

  const onChangeTgName = (e: ChangeEvent<HTMLInputElement>) => {
    const tgName = e.target.value;

    setTgName(tgName);
  };

  const handleLogin = async () => {
    setLoading(true);
    const rs = await detailApi.register(
      username,
      email,
      password,
      phone,
      location,
      whatsUp,
      tgName,
      profileImage
    );

    if (rs) {
      getNavigate().then((r) => navigate(r)).catch((e) => {
        console.log(e)
        navigate('/listing')
      });
    }
    setLoading(false);
  };

  const onChangeProfileImage = async (e: ChangeEvent<HTMLInputElement>) => {
    debugger;
    const profileImage = e.target.files;
    const imageUrl = await detailApi.uploadProfileImage(profileImage!![0]);

    setProfileImage(imageUrl!!);
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');
  }, []);

  return (
    <>
      <div className={`${styles.card} ${styles.cardContainer}`}>
        <div className={styles.profileImgCard}>
          <LogoIcon />
        </div>
        <Spacer height={8} width={100} />
        <BaseField
          onChange={onChangeUsername}
          value={username}
          name="username"
          label={localField('surname_name')}
        />
        <Spacer height={8} width={100} />
        <BaseField name="email" value={email} onChange={onChangeEmail} label="Email" />
        <Spacer height={8} width={100} />
        <BaseField
          name="phone"
          value={phone}
          onChange={onChangePhone}
          label={localField('phone_number')}
        />
        <Spacer height={8} width={100} />
        <BaseField
          name="location"
          value={location}
          onChange={onChangeLocation}
          label={localField('location')}
        />
        <Spacer height={8} width={100} />
        <BaseField
          name="whatsUp"
          value={whatsUp}
          onChange={onChangeWhatsUp}
          label={localField('wa')}
        />
        <Spacer height={8} width={100} />
        <BaseField
          name="tgName"
          value={tgName}
          onChange={onChangeTgName}
          label={localField('tg')}
        />
        <Spacer height={8} width={100} />
        <Button onClick={() => document.getElementById('profileImage')!!.click()} size="s" wide>
          {localField('photo')}
        </Button>
        <input
          id="profileImage"
          style={{
            display: 'none',
          }}
          accept="image/*"
          type="file"
          name="profileImage"
          onChange={onChangeProfileImage}
        />
        {profileImage ? (
          <img src={profileImage} alt="profileImage" className={styles.profileIcon} />
        ) : (
          <></>
        )}
        <Spacer height={8} width={100} />
        <BaseField
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          label={localField('password')}
        />

        <Spacer height={20} width={100} />
        <Button onClick={handleLogin} wide size={'l'} loading={loading}>
          {localField('registration')}
        </Button>
        <Spacer height={20} width={100} />
        <div className={styles.centerRegistration}>
          <a href={'/login'} className="button">
            {localField('log_in')}
          </a>
        </div>
      </div>
    </>
  );
};
