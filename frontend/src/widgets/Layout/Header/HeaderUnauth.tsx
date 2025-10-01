import { FC } from 'react';
import styles from './Header.module.scss';
import { Dropdown } from '@/widgets/Dropdown/Dropdown';
import {DropdownCurrency} from "@/widgets/Dropdown/DropdownCurrency";

export const HeaderUnauth: FC = () => {
  return (
    <>
      <header className={styles.header_unatuh}>
        <div className={styles.right_unauth}>
          <Dropdown />
          <div
            style={{
                top: 0
            }}
          >
            <DropdownCurrency />
          </div>
        </div>
      </header>
    </>
  );
};
