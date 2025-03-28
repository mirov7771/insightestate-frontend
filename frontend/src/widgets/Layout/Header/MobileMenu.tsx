import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router';
import { localField } from '@/i18n/localField';

type MobileMenuProps = {
  profileUrl: string;
  showMobileMenu: boolean;
};

export const MobileMenu: FC<MobileMenuProps> = ({ showMobileMenu, profileUrl }) => {
  return (
    <menu className={`${styles.mobileMenu} ${showMobileMenu ? styles.mobileMenu__show : ''}`}>
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
  );
};
