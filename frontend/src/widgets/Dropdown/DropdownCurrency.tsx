import { FC, useEffect, useState, MouseEvent } from 'react';
import styles from './Dropdown.module.scss';
import MenuItem from '@mui/material/MenuItem';
import { Text } from '@/shared/ui';
import Menu from '@mui/material/Menu';


export const DropdownCurrency: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [currency, setCurrency] = useState<string>(localStorage.getItem('currency') || '$');

  useEffect(() => {
    if (!localStorage.getItem('currency')) {
      setCurrency('usd');
    } else {
      setCurrency(localStorage.getItem('currency') || '$');
    }
  }, []);

  const handleUSD = () => {
    localStorage.setItem('currency', '$');
    window.location.reload();
  };

  const handleRUB = () => {
    localStorage.setItem('currency', '₽');
    window.location.reload();
  };

  const handleTHB = () => {
    localStorage.setItem('currency', '฿');
    window.location.reload();
  };

  const getCurrencySym = () => {
    return localStorage.getItem('currency') || '$'
  }

  return (
    <div className={styles.container_currency}>
      <button type="button" className={styles.button_currency} onClick={handleClick}>
        <Text variant="body1" className={styles.button_currency_text}>{getCurrencySym()}
          {'  '}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.558058 1.05806C0.802136 0.813981 1.19786 0.813981 1.44194 1.05806L6 5.61612L10.5581 1.05806C10.8021 0.813981 11.1979 0.813981 11.4419 1.05806C11.686 1.30214 11.686 1.69786 11.4419 1.94194L6.44194 6.94194C6.19786 7.18602 5.80214 7.18602 5.55806 6.94194L0.558058 1.94194C0.313981 1.69786 0.313981 1.30214 0.558058 1.05806Z" fill="#202020"/>
          </svg>
        </Text>
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
            handleUSD();
          }}
        >
          <Text variant="heading5">USD, $</Text>
        </MenuItem>
        <MenuItem
          classes={{ root: styles.listItem }}
          onClick={() => {
            handleClose();
            handleRUB();
          }}
        >
          <Text variant="heading5">RUB, ₽</Text>
        </MenuItem>
        <MenuItem
            classes={{ root: styles.listItem }}
            onClick={() => {
              handleClose();
              handleTHB();
            }}
        >
          <Text variant="heading5">THB, ฿</Text>
        </MenuItem>
      </Menu>
    </div>
  );
};
