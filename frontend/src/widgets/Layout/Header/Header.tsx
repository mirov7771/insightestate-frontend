import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { Logo, Menu } from '@/shared/assets/icons';
import { Link } from 'react-router';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';
import { localField } from '@/i18n/localField';
import { MobileMenu } from '@/widgets/Layout/Header/MobileMenu';

export const Header: FC<{ basicToken: string }> = ({ basicToken }) => {
  const profileUrl = `http://insight-estate.site:8081/profile?basicToken=${basicToken}`;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const offerCollection = `offer-collection/${basicToken?.replace('Basic ', '')}`;
  const goTo = () => {
    window.location.href =
      'https://api.whatsapp.com/send/?phone=66811486462&text&type=phone_number&app_absent=0';
  };

  const handleClickMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  console.log(`basicToken ${basicToken}, profileUrl ${profileUrl}`);
  return (
    <>
      <MobileMenu profileUrl={profileUrl} showMobileMenu={showMobileMenu} />
      <header className={styles.header}>
        <span className={styles.menu__icon} onClick={handleClickMobileMenu}>
          <Menu />
        </span>
        <div className={styles.logo}>
          <Link to="/listing">
            <Logo />
          </Link>
        </div>
        <menu className={styles.menu}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="listing">
              {localField('properties')}
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="user-collection">
              {localField('selections')}
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to={profileUrl}>
              {localField('profile')}
            </Link>
          </li>
          {/*  <li className={styles.menu__item}>*/}
          {/*    <Link className={styles.menu__link} to="contact">*/}
          {/*      Контакты*/}
          {/*    </Link>*/}
          {/*  </li>*/}
        </menu>
        <div className={styles.right}>
          <Dropdown />
          {/*<Button bold onClick={goTo}>Узнать больше</Button>*/}
        </div>
      </header>
    </>
  );
};
