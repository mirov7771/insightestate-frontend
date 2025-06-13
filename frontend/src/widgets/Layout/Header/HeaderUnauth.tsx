import { FC } from 'react';
import styles from './Header.module.scss';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';

export const HeaderUnauth: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.right}>
          <Dropdown unauth/>
        </div>
      </header>
    </>
  );
};
