import { Dispatch, FC, SetStateAction } from 'react';
import { Tab, Tabs as TabsUI } from '@mui/material';
import { Text } from '@/shared/ui';
import styles from './Tabs.module.scss';

type TabsProps = {
  content: string[];
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
};

export const Tabs: FC<TabsProps> = ({ value, setValue, content }) => {
  return (
    <TabsUI
      value={value}
      onChange={(_, val) => {
        setValue(val);
      }}
      classes={{ list: styles.list, indicator: styles.tabsIndicator, root: styles.tabsRoot }}
      centered
    >
      {content.map((text) => (
        <Tab
          disableRipple
          classes={{ root: styles.tabRoot }}
          label={
            <Text variant="body1" bold align="center">
              {text}
            </Text>
          }
        />
      ))}
    </TabsUI>
  );
};
