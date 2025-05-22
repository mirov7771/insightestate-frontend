import { FC } from 'react';
import { Text } from '@/shared/ui';
import styles from './OfferCollectionV2.module.scss';
import { Tabs } from './Tabs/Tabs';
import { WhyThai } from './WhyThai/WhyThai';
import { ContactManager } from './ContactManager/ContactManager';
import { useParams } from 'react-router';
import { useIntl } from 'react-intl';

const OfferCollectionV2: FC = () => {
  const { formatMessage } = useIntl();
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.wrap}>
      <Text variant="heading1" as="h1" align="center">
        {formatMessage({ id: 'projects_for_you' })}
      </Text>
      <Tabs id={id!!} />
      <WhyThai />
      <ContactManager id={id!!}/>
    </div>
  );
};

export default OfferCollectionV2;
