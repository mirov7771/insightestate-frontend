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
    'TH-HKT-LY-00146',
    'TH-HKT-RW-00001',
    'TH-HKT-NI-00060',
    'TH-HKT-NY-00078',
    'TH-HKT-BT-00002',
    'TH-HKT-LY-00053',
    'TH-HKT-BT-00003',
    'TH-HKT-BT-00004',
    'TH-HKT-KT-00005',
    'TH-HKT-BT-00006',
    'TH-HKT-NI-00007',
    'TH-HKT-BT-00008',
    'TH-HKT-BT-00009',
    'TH-HKT-NI-00054',
    'TH-HKT-NI-00010',
    'TH-HKT-BT-00011',
    'TH-HKT-BT-00012',
    'TH-HKT-NY-00013',
    'TH-HKT-BT-00014',
    'TH-HKT-AY-00075',
    'TH-HKT-LY-00015',
    'TH-HKT-LY-00016',
    'TH-HKT-BT-00017',
    'TH-HKT-MK-00066',
    'TH-HKT-BT-00018',
    'TH-HKT-BT-00019',
    'TH-HKT-BT-00064',
    'TH-HKT-BT-00020',
    'TH-HKT-BT-00021',
    'TH-HKT-RW-00081',
    'TH-HKT-RW-00082',
    'TH-HKT-BT-00022',
    'TH-HKT-LY-00023',
    'TH-HKT-RW-00024',
    'TH-HKT-BT-00025',
    'TH-HKT-PT-00077',
    'TH-HKT-BT-00026',
    'TH-HKT-KL-00027',
    'TH-HKT-LY-00028',
    'TH-HKT-RW-00029',
    'TH-HKT-RW-00076',
    'TH-HKT-NI-00030',
    'TH-HKT-BT-00061',
    'TH-HKT-RW-00031',
    'TH-HKT-LY-00032',
    'TH-HKT-BT-00106',
    'TH-HKT-RW-00033',
    'TH-HKT-BT-00034',
    'TH-HKT-LY-00035',
    'TH-HKT-BT-00036',
    'TH-HKT-KT-00037',
    'TH-HKT-SU-00038',
    'TH-HKT-BT-00039',
    'TH-HKT-BT-00041',
    'TH-HKT-LY-00042',
    'TH-HKT-RW-00043',
    'TH-HKT-KR-00044',
    'TH-HKT-LY-00045',
    'TH-HKT-BT-00046',
    'TH-HKT-BT-00047',
    'TH-HKT-LY-00048',
    'TH-HKT-BT-00049',
    'TH-HKT-KL-00050',
    'TH-HKT-KL-00051',
    'TH-HKT-BT-00057',
    'TH-HKT-BT-00058',
    'TH-HKT-LY-00062',
    'TH-HKT-AY-00063',
    'TH-HKT-BT-00068',
    'TH-HKT-KT-00069',
    'TH-HKT-SU-00073',
    'TH-HKT-KL-00074',
    'TH-HKT-RW-00084',
    'TH-HKT-NY-00085',
    'TH-BKK-RTH-00086',
    'TH-BKK-RTH-00087',
    'TH-BKK-KS-00089',
    'TH-HKT-BT-00091',
    'TH-HKT-RW-00092',
    'TH-HKT-SU-00093',
    'TH-BKK-WT-00094',
    'TH-HKT-KN-00096',
    'TH-HKT-PT-00097',
    'TH-HKT-NI-00098',
    'TH-HKT-SU-00100',
    'TH-HKT-BT-00102',
    'TH-HKT-BT-00103',
    'TH-HKT-KL-00104',
    'TH-UTP-DT-00107',
    'TH-UTP-JT-00111',
    'TH-UTP-PT-00112',
    'TH-UTP-DT-00113',
    'TH-UTP-JT-00114',
    'TH-HKT-RW-00117',
    'TH-UTP-DT-00118',
    'TH-UTP-NK-00120',
    'TH-UTP-NK-00121',
    'TH-UTP-JT-00122',
    'TH-UTP-JT-00123',
    'TH-BKK-WT-00124',
    'TH-BKK-KT-00125',
    'TH-BKK-BN-00126',
    'TH-BKK-BR-00127',
    'TH-BKK-WT-00128',
    'TH-BKK-WT-00130',
    'TH-BKK-CT-00131',
    'TH-BKK-TB-00132',
    'TH-BKK-LK-00134',
    'TH-UTP-WA-00135',
    'TH-HKT-NH-00136',
    'TH-HKT-LY-00138',
    'TH-HKT-BT-00142',
    'TH-HKT-RW-00163',
    'TH-HKT-AY-00147',
    'TH-HKT-LY-00139',
    'TH-HKT-BT-00151',
    'TH-HKT-BT-00143',
    'TH-HKT-PT-00137',
    'TH-HKT-RW-00148',
    'TH-HKT-NH-00149',
    'TH-HKT-PT-00140',
    'TH-HKT-LY-00144',
    'TH-HKT-BT-00159',
    'TH-BKK-WT-00141',
    'TH-HKT-KT-00145',
    'TH-HKT-BT-00150',
    'TH-HKT-BT-00152',
    'TH-HKT-BT-00203',
    'TH-HKT-BT-00153',
    'TH-BKK-ST-00154',
    'TH-HKT-BT-00155',
    'TH-HKT-NI-00156',
    'TH-HKT-NY-00157',
    'TH-HKT-NY-00158',
    'TH-BKK-PR-00160',
    'TH-BKK-CN-00161',
    'TH-HKT-RW-00162',
    'TH-HKT-BT-00165',
    'TH-HKT-BT-00166',
    'TH-HKT-PT-00168',
    'TH-HKT-MK-00169',
    'TH-HKT-BT-00170',
    'TH-USM-CN-00172',
    'TH-HKT-BT-00174',
    'TH-HKT-PT-00175',
    'TH-HKT-BT-00176',
    'TH-UTP-WA-00177',
    'TH-HKT-BT-00179',
    'TH-HKT-KT-00180',
    'TH-HKT-BT-00181',
    'TH-HKT-KL-00182',
    'TH-HKT-LY-00183',
    'TH-HKT-NI-00184',
    'TH-HKT-BT-00185',
    'TH-HKT-BT-00186',
    'TH-HKT-LY-00187',
    'TH-HKT-LY-00188',
    'TH-HKT-LY-00189',
    'TH-HKT-LY-00190',
    'TH-HKT-BT-00191',
    'TH-HKT-NH-00192',
    'TH-HKT-LY-00193',
    'TH-HKT-BT-00194',
    'TH-HKT-BT-00195',
    'TH-HKT-LY-00196',
    'TH-HKT-RW-00198',
    'TH-HKT-LY-00199',
    'TH-HKT-BT-00200',
    'TH-HKT-BT-00201',
    'TH-HKT-BT-00202',
    'TH-HKT-RW-00204',
    'TH-HKT-LY-00205',
    'TH-HKT-NI-00206',
    'TH-HKT-BT-00207',
    'TH-HKT-NY-00208',
    'TH-HKT-MK-00209',
    'TH-HKT-KR-00210',
    'TH-HKT-LY-00211',
    'TH-HKT-KL-00212',
    'TH-HKT-BT-00213',
    'TH-HKT-NY-00214',
    'TH-HKT-NY-00215',
    'TH-HKT-NY-00216',
    'TH-UTP-WA-00217',
    'TH-HKT-NY-00218',
    'TH-HKT-LY-00219',
    'TH-HKT-NY-00220',
    'TH-HKT-MK-00221',
    'TH-HKT-NY-00222',
    'TH-HKT-PT-00223',
    'TH-HKT-BT-00224',
    'TH-HKT-BT-00225',
    'TH-HKT-BT-00226',
    'TH-HKT-BT-00227',
    'TH-HKT-NI-00228',
    'TH-HKT-BT-00229',
    'TH-HKT-LY-00231',
    'TH-HKT-BT-00232',
    'TH-HKT-LY-00233',
    'TH-HKT-NY-00234',
    'TH-HKT-LY-00236',
    'TH-HKT-NY-00237',
    'TH-HKT-KT-00238',
    'TH-HKT-KR-00239',
    'TH-HKT-LY-00240',
    'TH-HKT-RW-00244',
    'TH-HKT-KR-00245',
    'TH-HKT-KR-00246',
    'TH-HKT-KL-00247',
    'TH-HKT-RW-00248',
    'TH-HKT-RW-00249',
    'TH-HKT-LY-00250',
    'TH-HKT-BT-00251',
    'TH-HKT-BT-00252',
    'TH-HKT-KR-00253',
    'TH-HKT-LY-00254',
    'TH-HKT-MK-00255',
    'TH-HKT-AY-00256',
    'TH-UTP-JT-00257',
    'TH-HKT-BT-00258',
    'TH-HKT-NY-00259',
    'TH-HKT-BT-00260',
    'TH-UTP-PT-00261',
    'TH-HKT-RW-00262',
    'TH-HKT-BT-00263',
    'TH-HKT-BT-00264',
    'TH-HKT-RW-00268',
    'TH-HKT-PT-00269',
    'TH-HKT-PT-00270',
    'TH-USM-LI-00271',
    'TH-USM-BP-00273',
    'TH-USM-BP-00274',
    'TH-USM-TB-00275',
    'TH-USM-BP-00276',
    'TH-HKT-BT-00279',
    'TH-UTP-JT-00282',
    'TH-USM-BP-00284',
    'TH-USM-CM-00285',
    'TH-HKT-KL-00286',
    'TH-HKT-LY-00288',
    'TH-UTP-JT-00289',
    'TH-HKT-NY-00290',
    'TH-UTP-JT-00291',
    'TH-UTP-PT-00292',
    'TH-UTP-PT-00293',
    'TH-HKT-BT-00295',
    'TH-HKT-BT-00296',
    'TH-HKT-NY-00298',
    'TH-UTP-JT-00299',
    'TH-HKT-KT-00300',
    'TH-UTP-JT-00302',
    'TH-HKT-NY-00304',
    'TH-HKT-BT-00308',
    'TH-HKT-BT-00309',
    'TH-HKT-BT-00310',
    'TH-HKT-KT-00311',
    'TH-HKT-LY-00312',
    'TH-HKT-RW-00313',
    'TH-HKT-BT-00314',
    'TH-HKT-LY-00315',
    'TH-HKT-AY-00316',
    'TH-HKT-NY-00317',
    'TH-HKT-BT-00318',
    'TH-HKT-BT-00319',
    'TH-HKT-NY-00320',
    'TH-HKT-LY-00321',
    'TH-HKT-LY-00323',
    'TH-HKT-BT-00324',
    'TH-HKT-BT-00325',
    'TH-HKT-BT-00326'
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
