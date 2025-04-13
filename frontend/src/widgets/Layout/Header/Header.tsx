import {FC, useEffect, useState} from 'react';
import styles from './Header.module.scss';
import { Logo, Menu } from '@/shared/assets/icons';
import {Link, useNavigate} from 'react-router';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';
import { localField } from '@/i18n/localField';
import { MobileMenu } from '@/widgets/Layout/Header/MobileMenu';
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {isMobile} from "react-device-detect";

export const Header: FC<{ basicToken: string }> = ({ basicToken }) => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [profileImage, setProfileImage] = useState<string>("https://insightestate.pro/estate-images/profile_img.png")
  const goTo = () => {
    navigate("/profile")
  };

  const handleClickMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    estateCollectionApi.getAgentInfo(basicToken).then((r) => {
      setProfileImage(r.data.profileImage || "https://insightestate.pro/estate-images/profile_img.png")
    }).catch((e) => console.log(e))
  }, []);

  return (
    <>
      <MobileMenu profileUrl="/profile" showMobileMenu={showMobileMenu} />
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
          {/*<li className={styles.menu__item}>*/}
          {/*  <Link className={styles.menu__link} to={profileUrl}>*/}
          {/*    {localField('profile')}*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*  <li className={styles.menu__item}>*/}
          {/*    <Link className={styles.menu__link} to="contact">*/}
          {/*      Контакты*/}
          {/*    </Link>*/}
          {/*  </li>*/}
        </menu>
        <div className={styles.right}>
          {isMobile ? <></> :
          <>
            <Dropdown />
            <Link
                to="/profile"
            >
              <img
                  src={profileImage}
                  alt="icon"
                  className={styles.profile_icon}
                  onClick={goTo}
              />
            </Link>
          </>
          }
          {/*<Button bold onClick={goTo}>Узнать больше</Button>*/}
        </div>
      </header>
    </>
  );
};
