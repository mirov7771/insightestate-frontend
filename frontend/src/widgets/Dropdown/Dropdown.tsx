import { FC, useEffect, useState, MouseEvent } from 'react';
import styles from './Dropdown.module.scss';
import getUserLocale from 'get-user-locale';
import MenuItem from '@mui/material/MenuItem';
import { Text } from '@/shared/ui';
import Menu from '@mui/material/Menu';

export interface DropdownProps {
  changeLocale?: () => void;
}

export const Dropdown: FC<DropdownProps> = ({ changeLocale }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [locale, setLocale] = useState<string>(localStorage.getItem('language') || 'ru');
  const userLocale = getUserLocale();

  useEffect(() => {
    console.log(userLocale);
    if (!localStorage.getItem('language')) {
      setLocale(userLocale.toLowerCase().indexOf('ru') > -1 ? 'ru' : 'en');
    } else {
      setLocale(localStorage.getItem('language') || 'ru');
    }
  }, []);

  const handleRusLanguage = () => {
    localStorage.setItem('language', 'ru');
    if (changeLocale) changeLocale();
    else window.location.reload();
  };

  const handleEngLanguage = () => {
    localStorage.setItem('language', 'en');
    if (changeLocale) changeLocale();
    else window.location.reload();
  };

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} style={{ width: 70 }} onClick={handleClick}>
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 40 40"
            fill="none"
            className="navbar1_dropdown_svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.3102 10.2745C19.4071 10.2492 19.5089 10.2432 19.6093 10.2579C19.7393 10.2527 19.8695 10.2501 20 10.2501C20.1305 10.2501 20.2608 10.2527 20.3907 10.2579C20.4911 10.2432 20.5929 10.2492 20.6898 10.2745C23.0236 10.4399 25.2291 11.4406 26.8943 13.1058C28.7228 14.9343 29.75 17.4142 29.75 20.0001C29.75 21.2805 29.4978 22.5483 29.0078 23.7313C28.5178 24.9142 27.7997 25.989 26.8943 26.8944C25.9889 27.7998 24.9141 28.5179 23.7312 29.0079C22.7612 29.4097 21.7342 29.6516 20.6899 29.7257C20.593 29.751 20.4911 29.757 20.3906 29.7423C20.2606 29.7475 20.1304 29.7501 20 29.7501C19.8696 29.7501 19.7394 29.7475 19.6094 29.7423C19.5089 29.757 19.407 29.751 19.3101 29.7257C18.2659 29.6516 17.2388 29.4097 16.2688 29.0079C15.0859 28.5179 14.0111 27.7998 13.1057 26.8944C12.2003 25.989 11.4822 24.9142 10.9922 23.7313C10.5022 22.5483 10.25 21.2805 10.25 20.0001C10.25 17.4142 11.2772 14.9343 13.1057 13.1058C14.7709 11.4406 16.9764 10.4399 19.3102 10.2745ZM19.922 28.2497C19.0933 26.8435 18.4846 25.3261 18.1108 23.7501H21.8892C21.5154 25.3261 20.9067 26.8435 20.078 28.2497C20.052 28.25 20.026 28.2501 20 28.2501C19.974 28.2501 19.948 28.25 19.922 28.2497ZM21.9096 28.026C22.3345 27.9249 22.7517 27.79 23.1571 27.6221C24.1581 27.2075 25.0675 26.5998 25.8336 25.8337C26.4455 25.2218 26.9564 24.5185 27.3485 23.7501H23.4271C23.1069 25.2315 22.5976 26.6689 21.9096 28.026ZM23.6846 22.2501H27.9373C28.1443 21.5196 28.25 20.7625 28.25 20.0001C28.25 19.2324 28.143 18.4758 27.9373 17.7501H23.6846C23.7797 18.4938 23.8278 19.2452 23.8278 20.0001C23.8278 20.755 23.7797 21.5064 23.6846 22.2501ZM23.4271 16.2501H27.3485C26.9593 15.4875 26.4503 14.7832 25.8336 14.1665C24.745 13.0778 23.3833 12.3248 21.9096 11.9741C22.5976 13.3313 23.1069 14.7687 23.4271 16.2501ZM20.078 11.7505C20.9067 13.1567 21.5154 14.6742 21.8892 16.2501H18.1108C18.4846 14.6742 19.0934 13.1567 19.922 11.7505C19.948 11.7502 19.974 11.7501 20 11.7501C20.026 11.7501 20.052 11.7502 20.078 11.7505ZM18.0904 11.9741C16.6167 12.3248 15.255 13.0778 14.1664 14.1665C13.5497 14.7832 13.0407 15.4875 12.6515 16.2501H16.5729C16.8931 14.7687 17.4024 13.3313 18.0904 11.9741ZM16.3154 17.7501H12.0627C11.857 18.4758 11.75 19.2324 11.75 20.0001C11.75 20.7625 11.8557 21.5196 12.0627 22.2501H16.3154C16.2204 21.5064 16.1722 20.755 16.1722 20.0001C16.1722 19.2452 16.2204 18.4938 16.3154 17.7501ZM17.8287 22.2501H22.1713C22.2751 21.5073 22.3278 20.7556 22.3278 20.0001C22.3278 19.2446 22.2751 18.4929 22.1713 17.7501H17.8287C17.7249 18.4929 17.6722 19.2446 17.6722 20.0001C17.6722 20.7556 17.7249 21.5073 17.8287 22.2501ZM16.5729 23.7501C16.8931 25.2315 17.4024 26.6689 18.0904 28.026C17.6655 27.9249 17.2483 27.79 16.8429 27.6221C15.8419 27.2075 14.9325 26.5998 14.1664 25.8337C13.5545 25.2218 13.0436 24.5185 12.6515 23.7501H16.5729Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
      <Menu
        classes={{ list: styles.list }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleRusLanguage();
          }}
        >
          <Text variant="heading5">Rus</Text>
        </MenuItem>
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleEngLanguage();
          }}
        >
          <Text variant="heading5">Eng</Text>
        </MenuItem>
      </Menu>
    </div>
  );
};
