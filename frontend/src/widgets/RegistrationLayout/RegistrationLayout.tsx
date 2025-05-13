import { FC } from 'react';
import styles from './RegistrationLayout.module.scss';
import Img from './image20.jpg';
import { Outlet } from 'react-router';

export const RegistrationLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__left}>
        <Outlet />
      </div>
      <div className={styles.wrapper__right}>
        <img src={Img} alt="" className={styles.img} />
      </div>
    </div>
  );
};
