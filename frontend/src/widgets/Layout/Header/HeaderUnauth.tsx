import { FC } from 'react';
import styles from './Header.module.scss';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';

export const HeaderUnauth: FC = () => {
  return (
    <>
      <header className={styles.header_unatuh}>
        <div className={styles.right_unauth}>
          <Dropdown />
        </div>
      </header>
    </>
  );
};
