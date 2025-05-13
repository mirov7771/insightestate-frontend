import React, { ChangeEvent, FC, FormEventHandler, useEffect, useState } from 'react';
import styles from '@/pages/Register/Register.module.scss';
import { LogoIcon } from '@/shared/assets/icons';
import { Button, Input, Text } from '@/shared/ui';
import { Link, useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { getNavigate } from '@/pages/Authorization';

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
    setEmail(e.target.value.trim());
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

  const handleLogin: FormEventHandler<HTMLButtonElement | HTMLFormElement> = async (e) => {
    e.preventDefault();
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
      getNavigate()
        .then((r) => navigate(r))
        .catch((e) => {
          console.log(e);
          navigate('/listing');
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
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <Text variant="heading2" align="center" className={styles.header}>
          Приветствуем вас
        </Text>
        <Text variant="body1" as="p" align="center" className={styles.description}>
          Пожалуйста, заполните ваши данные. Ваши ФИО и номер телефона будут видны клиентам в оффере
        </Text>
        <form className={styles.form} onSubmit={handleLogin}>
          <Input
            onChange={onChangeUsername}
            value={username}
            name="username"
            placeholder={localField('surname_name')}
          />
          <Input name="email" value={email} onChange={onChangeEmail} placeholder="Email" />
          <Input
            name="phone"
            value={phone}
            onChange={onChangePhone}
            placeholder={localField('phone_number')}
          />
          <Input
            name="location"
            value={location}
            onChange={onChangeLocation}
            placeholder={localField('location')}
          />
          <Input
            name="whatsUp"
            value={whatsUp}
            onChange={onChangeWhatsUp}
            placeholder={localField('wa')}
          />
          <Input
            name="tgName"
            value={tgName}
            onChange={onChangeTgName}
            placeholder={localField('tg')}
          />
          <Button
            onClick={() => document.getElementById('profileImage')!!.click()}
            size="s"
            wide
            type="button"
          >
            <Text variant="heading5" align="center" as="span">
              {localField('photo')}
            </Text>
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
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder={localField('password')}
          />

          <Button onClick={handleLogin} wide size={'l'} loading={loading} type="submit">
            <Text variant="heading4" align="center" as="span">
              {localField('registration')}
            </Text>
          </Button>
        </form>

        <Text variant="body2" as="p" className={styles.signUp} align="center">
          {localField('politics_1')}{' '}
          <a
            href="https://www.insightestate.com/privacy"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            {localField('politics_2')}
          </a>
        </Text>

        <Text variant="body1" as="p" className={styles.signUp} align="center">
          Уже есть аккаунт? <Link to="/login">{localField('log_in')}</Link>
        </Text>
      </div>
    </>
  );
};
