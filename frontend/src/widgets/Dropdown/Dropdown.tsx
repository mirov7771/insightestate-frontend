import { FC, useEffect, useState } from 'react';
import styles from './Dropdown.module.scss';
import { useIntl } from 'react-intl';
import { Globe } from '@/shared/assets/icons';
import getUserLocale from 'get-user-locale';
import MenuItem from '@mui/material/MenuItem';
import { Text } from '@/shared/ui';
import Menu from '@mui/material/Menu';

export const Dropdown: FC = () => {
  const { formatMessage } = useIntl();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    window.location.reload();
  };

  const handleEngLanguage = () => {
    localStorage.setItem('language', 'en');
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        style={{ width: locale === 'en' ? 120 : 90 }}
        onClick={handleClick}
      >
        <div className={styles.icon}>
          <Globe />
        </div>
        {formatMessage({ id: 'language' })}
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
