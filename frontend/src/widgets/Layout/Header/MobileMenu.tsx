import { Dispatch, FC, SetStateAction } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router';
import { useIntl } from 'react-intl';

type MobileMenuProps = {
  profileUrl: string;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
};

export const MobileMenu: FC<MobileMenuProps> = ({
  showMobileMenu,
  setShowMobileMenu,
  profileUrl,
}) => {
  const { formatMessage } = useIntl();

  return (
    <menu className={`${styles.mobileMenu} ${showMobileMenu ? styles.mobileMenu__show : ''}`}>
      <li className={styles.menu__item}>
          <Link className={styles.menu__link} to="main_menu" onClick={() => setShowMobileMenu(false)}>
              {formatMessage({ id: 'main_menu' })}
          </Link>
      </li>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to="listing" onClick={() => setShowMobileMenu(false)}>
          {formatMessage({ id: 'properties' })}
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link
          className={styles.menu__link}
          to="user-collection"
          onClick={() => setShowMobileMenu(false)}
        >
          {formatMessage({ id: 'selections' })}
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link
          className={styles.menu__link}
          to={profileUrl}
          onClick={() => setShowMobileMenu(false)}
        >
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
