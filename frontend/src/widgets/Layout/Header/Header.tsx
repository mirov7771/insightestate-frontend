import { FC } from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/shared/assets/icons';
import { Link } from 'react-router';

export const Header: FC<{ basicToken: string }> = ({ basicToken }) => {
  const profileUrl = `http://insight-estate.site:443/profile?basicToken=${basicToken}`;
  const offerCollection = `offer-collection/${basicToken?.replace('Basic ', '')}`;
  const goTo = () => {
    window.location.href =
      'https://api.whatsapp.com/send/?phone=66811486462&text&type=phone_number&app_absent=0';
  };

  console.log(`basicToken ${basicToken}, profileUrl ${profileUrl}`);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/listing">
          <Logo />
        </Link>
      </div>
      <menu className={styles.menu}>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} to="listing">
            Недвижимость
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} to="user-collection">
            Мои подборки
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} to={profileUrl}>
            Мой профиль
          </Link>
        </li>
        {/*  <li className={styles.menu__item}>*/}
        {/*    <Link className={styles.menu__link} to="contact">*/}
        {/*      Контакты*/}
        {/*    </Link>*/}
        {/*  </li>*/}
      </menu>
      <div className={styles.right}>{/*<Button bold onClick={goTo}>Узнать больше</Button>*/}</div>
    </header>
  );
};
