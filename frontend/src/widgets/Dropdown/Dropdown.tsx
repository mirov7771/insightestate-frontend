import {FC, useEffect, useState} from 'react';
import styles from './Dropdown.module.scss';
import { localField } from '@/i18n/localField';
import {Globe} from '@/shared/assets/icons';

export const Dropdown: FC = () => {
  const [dropdownState, setDropdownState] = useState({ open: false });
  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });
  const handleClickOutside = () => setDropdownState({ open: false });
  const [locale, setLocale] = useState<string>(localStorage.getItem('language') || 'ru')

  useEffect(() => {
    setLocale(localStorage.getItem('language') || 'ru')
  }, []);

  const handleRusLanguage = () => {
    localStorage.setItem('language', 'ru');
    handleClickOutside();
    window.location.reload();
  };

  const handleEngLanguage = () => {
    localStorage.setItem('language', 'en');
    handleClickOutside();
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <button
          type="button"
          className={styles.button}
          style={{width: locale === 'en' ? 120 : 90}}
          onClick={handleDropdownClick}
      >
         <div className={styles.icon}>
           <Globe />
         </div>
           {localField('language')}
      </button>
      {dropdownState.open && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={handleRusLanguage}>Rus</li>
            <li onClick={handleEngLanguage}>Eng</li>
          </ul>
        </div>
      )}
    </div>
  );
};
