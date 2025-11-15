import { FC, MouseEvent, useState } from 'react';
import styles from './Developer.module.scss';
import { Button, Text } from '@/shared/ui';
import { IconCheck, IconChevronDown, IconFileTypePdf, IconX } from '@/shared/assets/icons';
import MaterialMenu from '@mui/material/Menu';
import MaterialMenuItem from '@mui/material/MenuItem';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import { EstateDetail as TEstateDetail } from '@/widgets/Detail/api/detailApi';
import { FormattedMessage, useIntl } from 'react-intl';

export const Developer: FC<TEstateDetail> = ({
  developer,
  projectCount,
  eiaEnabled,
  landPurchased,
  unitCount,
  projectId,
}) => {
  const { formatMessage } = useIntl();
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

  const handleCloseLanguageRus = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(null);
    openPresentation('RUS');
  };

  const handleCloseLanguageEng = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorElLanguage(null);
    openPresentation('ENG');
  };

  //TODO переделать на бэк
  const openPresentation = (lang: string) => {
    window.open(`https://lotsof.properties/estate-images/${projectId}_${lang}.pdf`);
  };

  const isPresentation = () => {
    return developer?.presentation || false;
  };

  return (
    <div className={styles.developer}>
      <div className={styles.developer__top}>
        <Text variant="heading4">{formatMessage({ id: 'developer_title' })}</Text>
        <div className={styles.developer__tags}>
          <span
            className={`${styles.developer__tag} ${eiaEnabled ? styles.developer__tag_green : styles.developer__tag_grey}`}
          >
            {eiaEnabled ? <IconCheck /> : <IconX />}
            <Text variant="body2" bold>
              {formatMessage({ id: 'developer_eia' })}
            </Text>
          </span>
          <span
            className={`${styles.developer__tag} ${landPurchased ? styles.developer__tag_green : styles.developer__tag_grey}`}
          >
            {landPurchased ? <IconCheck /> : <IconX />}
            <Text variant="body2" bold>
              {formatMessage({ id: 'developer_land' })}
            </Text>
          </span>
        </div>
      </div>
      <div className={styles.developer__bottom}>
        <div className={styles.developer__info}>
          {/*<div className={styles.developer__logo}>*/}
          {/*  <img src={DeveloperLogo} alt="developer-logo" />*/}
          {/*</div>*/}
          <div>
            <Text className={styles.developer__info_header} variant="heading5">
              {developer?.name}
            </Text>
            <Text className={styles.developer__info_text} variant="body1">
              {developer?.phone}
            </Text>
            <Text className={styles.developer__info_text} variant="body1">
              {developer?.email}
            </Text>
          </div>
        </div>
        <div className={styles.developer__percentages}>
          <div className={styles.developer__percentages_line}>
            {unitCount?.sailed && unitCount?.total ? (
              <div className={styles.developer__percentages_item}>
                <Text variant="heading3">
                  {((unitCount?.sailed / unitCount?.total) * 100).toFixed()}%
                </Text>
                <Text className={styles.developer__percentages_item_text} variant="body1">
                  <FormattedMessage id="developer_sold" values={{ br: () => <br /> }} />
                </Text>
              </div>
            ) : (
              <></>
            )}
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">{projectCount?.total}</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                <FormattedMessage id="developer_total" values={{ br: () => <br /> }} />
              </Text>
            </div>
          </div>
          <div className={styles.developer__percentages_line}>
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">{projectCount?.finished}</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                <FormattedMessage id="developer_finished" values={{ br: () => <br /> }} />
              </Text>
            </div>
            <div className={styles.developer__percentages_item}>
              <Text variant="heading3">{projectCount?.build}</Text>
              <Text className={styles.developer__percentages_item_text} variant="body1">
                <FormattedMessage id="developer_build" values={{ br: () => <br /> }} />
              </Text>
            </div>
          </div>
        </div>
      </div>
      {isPresentation() ? (
        <div className={styles.developer__presentation}>
          <div className={styles.developer__presentation_info}>
            <Text variant="heading5">{formatMessage({ id: 'developer_presentation_title' })}</Text>
            <Text className={styles.developer__presentation_info_text} variant="body1">
              {formatMessage({ id: 'developer_presentation_desc' })}
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
                {formatMessage({ id: 'developer_presentation_download' })}
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
                onClick={handleCloseLanguageRus}
              >
                <Text variant="body2" bold>
                  {formatMessage({ id: 'developer_presentation_ru' })}
                </Text>
              </MaterialMenuItem>
              <MaterialMenuItem
                classes={{ root: styles.menu__item_root }}
                onClick={handleCloseLanguageEng}
              >
                <Text variant="body2" bold>
                  {formatMessage({ id: 'developer_presentation_en' })}
                </Text>
              </MaterialMenuItem>
            </MaterialMenu>
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
