import { FC } from 'react';
import styles from './Header.module.scss';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';
import { Link } from 'react-router';
import { Logo } from '@/shared/assets/icons';

export const HeaderUnauth: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/listing">
            <Logo />
          </Link>
        </div>
        <div className={styles.right}>
          <Dropdown />
        </div>
      </header>
    </>
  );
};
