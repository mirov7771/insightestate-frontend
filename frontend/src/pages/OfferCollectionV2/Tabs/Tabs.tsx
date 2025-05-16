import { FC, ReactNode, useEffect, useState } from 'react';
import { Tabs as TabsUI } from '@/entities/Tabs/Tabs';
import styles from './Tabs.module.scss';
import { Card } from '../Card/Card';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { localField } from '@/i18n/localField';
import { TableComparison } from '@/pages/OfferCollectionV2/TableComparison/TableComparison';

interface TabPanelProps {
  index: number;
  value: number;
  children?: ReactNode;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export const Tabs: FC<{ id: string }> = ({ id }) => {
  const [estateCollection, setEstateCollection] = useState<EstateCollection>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    estateCollectionApi
      .getEstateCollectionById(id)
      .then((r) => setEstateCollection(r.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className={styles.tabsWrapper}>
        <TabsUI
          content={[localField('list').toUpperCase(), localField('comparison').toUpperCase()]}
          value={value}
          setValue={setValue}
        />
        {/*Пока убираем лайки  */}
        {/*<IconButton size="small" classes={{ root: styles.iconButtonRoot }} disableRipple>*/}
        {/*  <div className={styles.iconHeart}>*/}
        {/*    <Heart />*/}
        {/*  </div>*/}
        {/*  1*/}
        {/*</IconButton>*/}
      </div>
      <CustomTabPanel value={value} index={0}>
        {estateCollection?.estates ? (
          <div className={styles.content}>
            {estateCollection?.estates.map((estate) => <Card {...estate} collectionId={id} />)}
          </div>
        ) : (
          <div className={styles.content} />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {!!estateCollection?.estates?.length && (
          <TableComparison estate={estateCollection?.estates} />
        )}
      </CustomTabPanel>
    </>
  );
};
