import { FC, useEffect, useState, MouseEvent } from 'react';
import styles from './UserProfile.module.scss';
import MaterialMenu from '@mui/material/Menu';
import MaterialMenuItem from '@mui/material/MenuItem';
import { AgentInfo, estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Avatar, Text } from '@/shared/ui';
import { useStatus } from '@/shared/utils/useStatus';
import { useNavigate } from 'react-router';
import {
  IconCheck,
  IconLogout,
  IconSettings,
  IconWorld,
  IconBrandTelegram,
} from '@/shared/assets/icons';
import { useIntl } from 'react-intl';
import { Skeleton } from '@mui/material';

type UserProfileProps = {
  basicToken: string;
};

export const UserProfile: FC<UserProfileProps> = ({ basicToken }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<AgentInfo>();
  const { status, setStatus } = useStatus();
  const language = localStorage.getItem('language') || 'en';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);
  const openLanguage = Boolean(anchorElLanguage);
  const handleOpenLanguage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(event.currentTarget);
  };
  const handleCloseLanguage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(null);
  };

  const handleNavigateToSettings = () => {
    navigate('/profile');
    handleClose();
  };

  const handleExit = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  const handleSetLanguage = (lang: 'en' | 'ru') => () => {
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  useEffect(() => {
    setStatus('LOADING');
    estateCollectionApi
      .getAgentInfo(basicToken)
      .then(({ data }) => {
        setUserInfo(data);
        setStatus('SUCCESS');
      })
      .catch((e) => {
        setStatus('ERROR');
        console.log(e);
      });
  }, []);

  if (status === 'LOADING') {
    return <Skeleton variant="circular" width={40} height={40} />;
  }

  if (status === 'SUCCESS' && userInfo) {
    return (
      <div>
        <Avatar
          variant={'pictures'}
          imgSrc={
            userInfo.profileImage || 'https://lotsof.properties/estate-images/profile_img.png'
          }
          text={userInfo.fio || 'U'}
          onClick={handleOpen}
          className={styles.avatar}
        />
        <MaterialMenu
          classes={{ paper: styles.menu__paper }}
          className={styles.menu}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: -8,
            horizontal: 'right',
          }}
        >
          <div className={styles.menu__info}>
            <Text variant="body1" bold>
              {userInfo.fio}
            </Text>
            {!!userInfo.mobileNumber && (
              <Text variant="body1" className={styles.menu__info_phone}>
                {userInfo.mobileNumber}
              </Text>
            )}
          </div>
          <MaterialMenuItem classes={{ root: styles.menu__item_root }} onClick={handleOpenLanguage}>
            <IconWorld />
            <Text variant="body1" bold>
              {formatMessage({ id: `userProfile.language.${language}` })}
            </Text>
            <MaterialMenu
              open={openLanguage}
              anchorEl={anchorElLanguage}
              onClose={handleCloseLanguage}
              classes={{ paper: `${styles.menu__paper} ${styles.menu__language}` }}
              className={styles.menu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MaterialMenuItem
                classes={{ root: `${styles.menu__item_root} ${styles.menu__item_root_language}` }}
                onClick={handleSetLanguage('ru')}
              >
                <Text variant="body1" bold>
                  {formatMessage({ id: 'userProfile.language.ru' })}
                </Text>
                {language === 'ru' && <IconCheck />}
              </MaterialMenuItem>
              <MaterialMenuItem
                classes={{ root: `${styles.menu__item_root} ${styles.menu__item_root_language}` }}
                onClick={handleSetLanguage('en')}
              >
                <Text variant="body1" bold>
                  {formatMessage({ id: 'userProfile.language.en' })}
                </Text>
                {language === 'en' && <IconCheck />}
              </MaterialMenuItem>
            </MaterialMenu>
          </MaterialMenuItem>
          <MaterialMenuItem classes={{ root: styles.menu__item_root }}>
            <IconBrandTelegram />
            <Text variant="body1" bold>
              {formatMessage({ id: 'userProfile.tgGroup' })}
            </Text>
          </MaterialMenuItem>
          <MaterialMenuItem
            classes={{ root: styles.menu__item_root }}
            onClick={handleNavigateToSettings}
          >
            <IconSettings />
            <Text variant="body1" bold>
              {formatMessage({ id: 'userProfile.settings' })}
            </Text>
          </MaterialMenuItem>
          <MaterialMenuItem
            classes={{ root: `${styles.menu__item_root} ${styles.menu__item_root_red}` }}
            onClick={handleExit}
          >
            <IconLogout />
            <Text variant="body1" bold>
              {formatMessage({ id: 'userProfile.exit' })}
            </Text>
          </MaterialMenuItem>
        </MaterialMenu>
      </div>
    );
  }
};
