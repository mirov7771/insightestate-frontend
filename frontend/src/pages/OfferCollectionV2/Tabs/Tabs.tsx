import { FC, ReactNode, useEffect, useState } from 'react';
import { IconButton, Tab, Tabs as TabsUI } from '@mui/material';
import { Text } from '@/shared/ui';
import { Heart } from '@/shared/assets/icons';
import styles from './Tabs.module.scss';
import { Card } from '../Card/Card';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { localField } from '@/i18n/localField';

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
          value={value}
          onChange={(_, val) => {
            setValue(val);
          }}
          classes={{ list: styles.list, indicator: styles.tabsIndicator, root: styles.tabsRoot }}
          centered
        >
          <Tab
            disableRipple
            classes={{ root: styles.tabRoot }}
            label={
              <Text variant="heading5" align="center">
                {localField('list')}
              </Text>
            }
          />
          <Tab
            disableRipple
            classes={{ root: styles.tabRoot }}
            label={
              <Text variant="heading5" align="center">
                {localField('comparison')}
              </Text>
            }
          />
        </TabsUI>
        {/*Пока убираем лайки  */}
        {/*<IconButton size="small" classes={{ root: styles.iconButtonRoot }} disableRipple>*/}
        {/*  <div className={styles.iconHeart}>*/}
        {/*    <Heart />*/}
        {/*  </div>*/}
        {/*  1*/}
        {/*</IconButton>*/}
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className={styles.content}>
          {estateCollection?.estates.map((estate) => <Card {...estate} />)}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        content 2
      </CustomTabPanel>
    </>
  );
};
