import { FC, ReactNode, useState } from 'react';
import { IconButton, Tab, Tabs as TabsUI } from '@mui/material';
import { Text } from '@/shared/ui';
import { Heart } from '@/shared/assets/icons';
import styles from './Tabs.module.scss';

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

export const Tabs: FC = () => {
  const [value, setValue] = useState(0);

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
                Список
              </Text>
            }
          />
          <Tab
            disableRipple
            classes={{ root: styles.tabRoot }}
            label={
              <Text variant="heading5" align="center">
                Сравнение
              </Text>
            }
          />
        </TabsUI>
        <IconButton size="small" classes={{ root: styles.iconButtonRoot }} disableRipple>
          <div className={styles.iconHeart}>
            <Heart />
          </div>
          1
        </IconButton>
      </div>
      <CustomTabPanel value={value} index={0}>
        content 1
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        content 2
      </CustomTabPanel>
    </>
  );
};
