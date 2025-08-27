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

  const prs = [
    'TH-UTP-NK-00120',
    'TH-HKT-SU-00100',
    'TH-HKT-SU-00073',
    'TH-HKT-RW-00117',
    'TH-HKT-RW-00092',
    'TH-HKT-RW-00084',
    'TH-HKT-RW-00082',
    'TH-HKT-RW-00081',
    'TH-HKT-RW-00076',
    'TH-HKT-RW-00043',
    'TH-HKT-RW-00031',
    'TH-HKT-RW-00029',
    'TH-HKT-RW-00024',
    'TH-HKT-RW-00001',
    'TH-HKT-AY-00147',
    'TH-HKT-BT-00002',
    'TH-HKT-BT-00003',
    'TH-HKT-BT-00006',
    'TH-HKT-BT-00008',
    'TH-HKT-PT-00077',
    'TH-HKT-NY-00013',
    'TH-HKT-NI-00060',
    'TH-HKT-NI-00054',
    'TH-HKT-NH-00136',
    'TH-HKT-LY-00139',
    'TH-HKT-LY-00138',
    'TH-HKT-LY-00048',
    'TH-HKT-LY-00045',
    'TH-HKT-LY-00042',
    'TH-HKT-LY-00016',
    'TH-HKT-LY-00015',
    'TH-HKT-KT-00069',
    'TH-HKT-KT-00005',
    'TH-HKT-KR-00044',
    'TH-HKT-KL-00104',
    'TH-HKT-KL-00074',
    'TH-HKT-KL-00051',
    'TH-HKT-BT-00014',
    'TH-HKT-BT-00012',
    'TH-HKT-BT-00018',
    'TH-HKT-BT-00019',
    'TH-HKT-BT-00020',
    'TH-HKT-BT-00021',
    'TH-HKT-BT-00026',
    'TH-HKT-BT-00034',
    'TH-HKT-BT-00036',
    'TH-HKT-BT-00049',
    'TH-HKT-BT-00057',
    'TH-HKT-BT-00142',
    'TH-HKT-BT-00103',
    'TH-HKT-BT-00102',
    'TH-HKT-BT-00058',
    'TH-UTP-WA-00135',
    'TH-UTP-WA-00135',
    'TH-UTP-NK-00121',
    'TH-UTP-JT-00123',
    'TH-UTP-JT-00122',
    'TH-UTP-JT-00114',
    'TH-UTP-JT-00111',
    'TH-UTP-DT-00118',
    'TH-UTP-DT-00107',
    'TH-HKT-SU-00093',
    'TH-HKT-SU-00038',
    'TH-HKT-RW-00033',
    'TH-HKT-PT-00097',
    'TH-HKT-NY-00078',
    'TH-HKT-NI-00098',
    'TH-HKT-NI-00030',
    'TH-HKT-NI-00010',
    'TH-HKT-NI-00007',
    'TH-HKT-MK-00066',
    'TH-HKT-LY-00146',
    'TH-HKT-LY-00053',
    'TH-HKT-LY-00035',
    'TH-HKT-LY-00032',
    'TH-HKT-LY-00028',
    'TH-HKT-KN-00096',
    'TH-HKT-KL-00050',
    'TH-HKT-KL-00027',
    'TH-HKT-BT-00106',
    'TH-HKT-BT-00068',
    'TH-HKT-BT-00064',
    'TH-HKT-BT-00046',
    'TH-HKT-BT-00039',
    'TH-HKT-BT-00011',
    'TH-HKT-BT-00009',
    'TH-HKT-BT-00004',
    'TH-HKT-AY-00075',
    'TH-HKT-AY-00063',
    'TH-BKK-WT-00130',
    'TH-BKK-WT-00128',
    'TH-BKK-WT-00124',
    'TH-BKK-WT-00094',
    'TH-BKK-TB-00132',
    'TH-BKK-RTH-00087',
    'TH-BKK-RTH-00086',
    'TH-BKK-LK-00134',
    'TH-BKK-KT-00125',
    'TH-BKK-KS-00089',
    'TH-BKK-CT-00131',
    'TH-BKK-BR-00127',
    'TH-BKK-BN-00126',
  ];
  const isPresentation = () => {
    return prs.includes(projectId);
  };
  //TODO переделать на бэк

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
