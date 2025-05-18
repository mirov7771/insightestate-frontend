import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router';
import { useIntl } from 'react-intl';

type MobileMenuProps = {
  profileUrl: string;
  showMobileMenu: boolean;
};

export const MobileMenu: FC<MobileMenuProps> = ({ showMobileMenu, profileUrl }) => {
  const { formatMessage } = useIntl();

  return (
    <menu className={`${styles.mobileMenu} ${showMobileMenu ? styles.mobileMenu__show : ''}`}>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to="listing">
          {formatMessage({ id: 'properties' })}
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to="user-collection">
          {formatMessage({ id: 'selections' })}
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to={profileUrl}>
          {formatMessage({ id: 'profile' })}
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
