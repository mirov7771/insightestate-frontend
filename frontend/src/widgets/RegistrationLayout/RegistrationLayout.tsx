import { FC, useEffect, useState } from 'react';
import styles from './RegistrationLayout.module.scss';
import Img from './image20.jpg';
import Img1 from './image21.png';
import { Outlet } from 'react-router';

export const RegistrationLayout: FC = () => {
  const [locale, setLocale] = useState<string>(localStorage.getItem('language') || 'ru');

  useEffect(() => {
    setLocale(localStorage.getItem('language') || 'ru');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <Outlet />
      </div>
      <div className={styles.wrapper__right}>
        <img src={locale === 'ru' ? Img : Img1} alt="" className={styles.img} />
      </div>
    </div>
  );
};
