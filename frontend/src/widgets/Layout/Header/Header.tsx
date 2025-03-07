import { FC } from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/shared/assets/icons';
import { Link } from 'react-router';
import { Button } from '@/shared/ui';

export const Header: FC = () => {
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
          <Link className={styles.menu__link} to="about">
            О нас
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} to="faq">
            Ответы на вопросы
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} to="contact">
            Контакты
          </Link>
        </li>
      </menu>
      <div className={styles.right}>
        <Button bold>Узнать больше</Button>
      </div>
    </header>
  );
};
