import { Dispatch, FC, SetStateAction } from 'react';
import styles from './TabsElements.module.scss';
import { Text } from '@/shared/ui';

type TabsElementsProps = {
  content: string[];
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
};

export const TabsElements: FC<TabsElementsProps> = ({ content, value, setValue }) => {
  return (
    <div className={styles.wrapper}>
      {content.map((item, index) => {
        return (
          <Text
            className={`${styles.tab} ${value === index ? styles.tab_active : ''}`}
            key={item}
            variant="body1"
            bold
            align="center"
            onClick={() => setValue(index)}
          >
            {item}
          </Text>
        );
      })}
    </div>
  );
};
