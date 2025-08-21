import { FC, MouseEvent, useState } from 'react';
import styles from './Developer.module.scss';
import { Button, Text } from '@/shared/ui';
import { IconCheck, IconChevronDown, IconFileTypePdf } from '@/shared/assets/icons';
import DeveloperLogo from './developer-logo.png';
import MaterialMenu from '@mui/material/Menu';
import MaterialMenuItem from '@mui/material/MenuItem';
import { useWindowResize } from '@/shared/utils/useWindowResize';

export const Developer: FC = () => {
  const { width } = useWindowResize();
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

  return (
    <div className={styles.developer}>
      <div className={styles.developer__top}>
        <Text variant="heading4">Застройщик</Text>
        <div className={styles.developer__tags}>
          <span className={`${styles.developer__tag} ${styles.developer__tag_green}`}>
            <IconCheck />
            <Text variant="body2" bold>
              Есть сертификат EIA
            </Text>
          </span>
          <span className={`${styles.developer__tag} ${styles.developer__tag_green}`}>
            <IconCheck />
            <Text variant="body2" bold>
              Земля выкуплена
            </Text>
          </span>
        </div>
      </div>
      <div className={styles.developer__bottom}>
        <div className={styles.developer__info}>
          <div className={styles.developer__logo}>
            <img src={DeveloperLogo} alt="developer-logo" />
          </div>
          <div>
            <Text className={styles.developer__info_header} variant="heading5">
              Lunique Real Estate
            </Text>
            <Text className={styles.developer__info_text} variant="body1">
              +66 33 674 868
            </Text>
            <Text className={styles.developer__info_text} variant="body1">
              info@luniquerealestate.com
            </Text>
          </div>
        </div>
        <div className={styles.developer__percentages}>
          <div className={styles.developer__percentages_line}>
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">68%</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                Продано <br />
                юнитов
              </Text>
            </div>
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">12</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                Всего <br />
                проектов
              </Text>
            </div>
          </div>
          <div className={styles.developer__percentages_line}>
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">9</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                Сдано <br />
                проектов
              </Text>
            </div>
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">3</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                Строится <br />
                проектов
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.developer__presentation}>
        <div className={styles.developer__presentation_info}>
          <Text variant="heading5">Презентация от застройщика</Text>
          <Text className={styles.developer__presentation_info_text} variant="body1">
            Контакты и цены скрыты — версия адаптирована для показа клиентам
          </Text>
        </div>
        <Button
          variant="base"
          type="button"
          className={`${styles.developer__presentation_button} ${openLanguage ? styles.developer__presentation_button_active : ''}`}
          onClick={handleOpenLanguage}
        >
          <span className={styles.developer__presentation_button_content}>
            <IconFileTypePdf />
            <Text variant="body1" bold>
              Скачать
            </Text>
            <IconChevronDown />
          </span>
          <MaterialMenu
            classes={{ paper: styles.menu__paper }}
            className={styles.menu}
            open={openLanguage}
            anchorEl={anchorElLanguage}
            onClose={handleCloseLanguage}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: width >= 1200 ? 'right' : 'center',
            }}
            transformOrigin={{
              vertical: -8,
              horizontal: width >= 1200 ? 'right' : 'center',
            }}
          >
            <MaterialMenuItem
              classes={{ root: styles.menu__item_root }}
              onClick={handleCloseLanguage}
            >
              <Text variant="body2" bold>
                На русском
              </Text>
            </MaterialMenuItem>
            <MaterialMenuItem
              classes={{ root: styles.menu__item_root }}
              onClick={handleCloseLanguage}
            >
              <Text variant="body2" bold>
                На английском
              </Text>
            </MaterialMenuItem>
          </MaterialMenu>
        </Button>
      </div>
    </div>
  );
};
