import { ChangeEvent, FC, MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import MuiAvatar from '@mui/material/Avatar';
import styles from './Profile.module.scss';
import { OfferCollectionArrowLeft } from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';
import { useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import { detailApi } from '@/widgets/Detail/api/detailApi';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Info } from './Info/Info';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import { ProfileSkeleton } from '@/pages/Profile/ProfileSkeleton/ProfileSkeleton';
import { usersApi } from '@/shared/api/users';
import { TData } from './types';

export const Profile: FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('basicToken'));
  const [data, setData] = useState<TData>({
    username: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    whatsUp: '',
    tgName: '',
    profileImage: '',
  });
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const [updateStatus, setUpdateStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const refAvatar = useRef<HTMLInputElement>(null);
  const handleClickAvatar = () => {
    if (refAvatar.current) {
      refAvatar.current.click();
    }
  };
  const infoDescription = useMemo(() => {
    const { phone, email, location } = data;
    const result = [];

    if (phone) result.push(phone);
    if (email) result.push(email);
    if (location) result.push(location);

    return result.join(' / ');
  }, [data]);

  const onChangeProfileImage = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setUpdateStatus('LOADING');
      const profileImage = e.target.files;
      const imageUrl = await detailApi.uploadProfileImage(profileImage!![0]);

      await detailApi.profileUpdate({ ...data, profileImage: imageUrl || '' });

      setData((prev) => ({
        ...prev,
        password: prev.password || '',
        profileImage: imageUrl || '',
      }));
      setUpdateStatus('SUCCESS');
    } catch (e) {
      console.log({ e });
      setUpdateStatus('ERROR');
    }
  };

  const handleGoBack: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(-2)
  };

  const handleProfileUpdate = async (updatedData: typeof data) => {
    try {
      setUpdateStatus('LOADING');
      await detailApi.profileUpdate(updatedData);
      setUpdateStatus('SUCCESS');
    } catch (e) {
      setUpdateStatus('ERROR');
      console.log({ e });
    }
  };

  const deleteUser = async () => {
    try {
      if (token) {
        setUpdateStatus('LOADING');
        await usersApi.deleteUser(token);
        setUpdateStatus('SUCCESS');
        localStorage.removeItem('basicToken');
        navigate('/');
      }
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    setStatus('LOADING');
    setToken(localStorage.getItem('basicToken'));
    estateCollectionApi
      .getAgentInfo(token!!)
      .then((r) => {
        setData({
          location: r.data.location || '',
          tgName: r.data.tgName || '',
          whatsUp: r.data.whatsUp || '',
          password: '',
          phone: r.data.mobileNumber || '',
          profileImage: r.data.profileImage || '',
          email: r.data.login || localStorage.getItem('email') || '',
          username: r.data.fio || '',
        });
        setStatus('SUCCESS');
      })
      .catch((e) => {
        console.log(e);
        setStatus('ERROR');
        navigate('/listing');
      });
  }, []);

  return (
    <div className={styles.layout}>
      {status === 'LOADING' ? (
        <ProfileSkeleton />
      ) : (
        <>
          <Button className={styles.back} variant="base" size="s" onClick={handleGoBack}>
            <OfferCollectionArrowLeft />
            <Text variant="heading5">{formatMessage({ id: 'common.back' })}</Text>
          </Button>
          <div>
            <MuiAvatar
              className={styles.avatar}
              onClick={handleClickAvatar}
              src={data.profileImage}
            >
              <Text variant="heading3" align="center">
                {data.username[0]}
              </Text>
            </MuiAvatar>
            <input
              type="file"
              accept="image/*"
              style={{
                display: 'none',
              }}
              ref={refAvatar}
              onChange={onChangeProfileImage}
            />
          </div>
          <Text variant="heading2" as="h2">
            {data.username}
          </Text>
          <Text variant="body1" className={styles.layout__description}>
            {infoDescription}
          </Text>
          <div className={styles.main}>
            <Text className={styles.main__header} variant="heading3">
              {formatMessage({ id: 'profile.personalInformation' })}
            </Text>
            <div className={styles.info}>
              <Info
                name={formatMessage({ id: 'profile.fullName' })}
                value={data.username}
                dataKey="username"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
              <Info
                inputType="tel"
                name={formatMessage({ id: 'profile.phoneNumber' })}
                value={data.phone}
                dataKey="phone"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
              <Info
                name={formatMessage({ id: 'profile.location' })}
                value={data.location}
                dataKey="location"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
              <Info
                inputType="email"
                name={formatMessage({ id: 'profile.email' })}
                value={data.email}
                dataKey="email"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
              <Info
                inputType="password"
                name={formatMessage({ id: 'profile.password' })}
                value={data.password}
                dataKey="password"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
            </div>
          </div>
          <div className={styles.main}>
            <Text className={styles.main__header} variant="heading3">
              {formatMessage({ id: 'profile.messengers' })}
            </Text>
            <div className={styles.info}>
              <Info
                name="Telegram"
                value={data.tgName}
                dataKey="tgName"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
              <Info
                name="WhatsApp"
                value={data.whatsUp}
                dataKey="whatsUp"
                setData={setData}
                handleProfileUpdate={handleProfileUpdate}
                isLoading={updateStatus === 'LOADING'}
                data={data}
              />
            </div>
          </div>
          <div className={styles.main}>
            <Text className={styles.main__header} variant="heading3">
              {formatMessage({ id: 'profile.account' })}
            </Text>
            <div className={styles.info}>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <Text variant="heading4">{formatMessage({ id: 'profile.deleteAccount' })}</Text>
                  <Text className={styles.content__value} variant="body1">
                    {formatMessage({ id: 'profile.accountDeletionNotice' })}
                  </Text>
                </div>
                <Button
                  variant="base"
                  className={styles.button}
                  onClick={deleteUser}
                  disabled={updateStatus === 'LOADING'}
                >
                  <Text variant="heading5">{formatMessage({ id: 'common.delete' })}</Text>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
