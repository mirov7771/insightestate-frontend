import { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Logo, Menu } from '@/shared/assets/icons';
import { Link, useLocation, useNavigate } from 'react-router';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';
import { useIntl } from 'react-intl';
import { MobileMenu } from '@/widgets/Layout/Header/MobileMenu';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { isMobile } from 'react-device-detect';

export const Header: FC<{ basicToken: string }> = ({ basicToken }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(
    'https://lotsof.properties/estate-images/profile_img.png'
  );
  const [collectionCount, setCollectionCount] = useState(0)
  const goTo = () => {
    navigate('/profile');
  };

  const location = useLocation();

  const handleClickMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    estateCollectionApi
      .getAgentInfo(basicToken)
      .then((r) => {
        setProfileImage(
          r.data.profileImage || 'https://lotsof.properties/estate-images/profile_img.png'
        );
        setCollectionCount(r.data.collectionCount || 0)
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <MobileMenu
        profileUrl="/profile"
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
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
            <Link
              className={
                location.pathname === '/listing' ? styles.menu__link : styles.menu__link_no_select
              }
              to="listing"
            >
              {formatMessage({ id: 'properties' })}
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              className={
                location.pathname === '/user-collection'
                  ? styles.menu__link
                  : styles.menu__link_no_select
              }
              to="user-collection"
            >
              {formatMessage({ id: 'selections' })}
            </Link>
          </li>
          {/*<li className={styles.menu__item}>*/}
          {/*  <Link className={styles.menu__link} to={profileUrl}>*/}
          {/*    {formatMessage({ id: 'profile' })}*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*  <li className={styles.menu__item}>*/}
          {/*    <Link className={styles.menu__link} to="contact">*/}
          {/*      Контакты*/}
          {/*    </Link>*/}
          {/*  </li>*/}
        </menu>
        <div className={styles.right}>
          {isMobile ? (
            <>
              <Dropdown />
            </>
          ) : (
            <>
              <Dropdown />
              <Link to="/profile">
                <img src={profileImage} alt="icon" className={styles.profile_icon} onClick={goTo} />
              </Link>
            </>
          )}
          {/*<Button bold onClick={goTo}>Узнать больше</Button>*/}
        </div>
      </header>
    </>
  );
};
