import { FC } from 'react';
import { Text } from '@/shared/ui';
import styles from './OfferCollectionV2.module.scss';
import { Tabs } from './Tabs/Tabs';
import { WhyThai } from './WhyThai/WhyThai';
import { ContactManager } from './ContactManager/ContactManager';

const OfferCollectionV2: FC = () => {
  return (
    <div className={styles.wrap}>
      <Text variant="heading1" as="h1" align="center">
        Проекты для вас
      </Text>
      <Tabs />
      <WhyThai />
      <ContactManager />
    </div>
  );
};

export default OfferCollectionV2;
