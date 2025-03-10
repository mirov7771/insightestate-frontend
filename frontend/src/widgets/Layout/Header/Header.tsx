import {FC, useEffect} from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/shared/assets/icons';
import {Link, useSearchParams} from 'react-router';
import { Button } from '@/shared/ui';

export const Header: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
      localStorage.setItem('basicToken', searchParams.get('basicToken') || localStorage.getItem('basicToken') || '');
  }, []);
  const basicToken = localStorage.getItem('basicToken')
  const profileUrl = `http://insight-estate.site:443/profile?basicToken=${basicToken}`
  console.log(`basicToken ${basicToken}, profileUrl ${profileUrl}`)
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
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
          <Link className={styles.menu__link} to="offer-collection">
            Сформировать оффер
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
      <div className={styles.right}>
        <Button bold>Узнать больше</Button>
      </div>
    </header>
  );
};
