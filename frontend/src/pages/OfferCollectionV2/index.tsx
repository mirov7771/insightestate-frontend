import { FC } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Text } from '@/shared/ui';
import styles from './OfferCollectionV2.module.scss';
import { Tabs } from './Tabs/Tabs';
import { WhyThai } from './WhyThai/WhyThai';
import { ContactManager } from './ContactManager/ContactManager';

const OfferCollectionV2: FC = () => {
  const { formatMessage } = useIntl();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const url = `${window.location.origin}${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>{formatMessage({ id: 'meta.offerCollection.title' })}</title>
        <meta
          name="description"
          content={formatMessage({ id: 'meta.offerCollection.description' })}
        />
        <meta property="og:title" content={formatMessage({ id: 'meta.offerCollection.title' })} />
        <meta
          property="og:description"
          content={formatMessage({ id: 'meta.offerCollection.description' })}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
      </Helmet>
      <div className={styles.wrap}>
        <Text variant="heading1" as="h1" align="center">
          {formatMessage({ id: 'projects_for_you' })}
        </Text>
        <Tabs id={id!!} />
        <WhyThai />
        <ContactManager id={id!!} />
      </div>
    </>
  );
};

export default OfferCollectionV2;
