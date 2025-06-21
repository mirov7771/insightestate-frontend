import { FC, ReactNode, useEffect, useState } from 'react';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import styles from './UserCollection.module.scss';
import { Watch } from 'react-loader-spinner';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import { CardView } from './CardView/CardView';
import { BlockView } from '@/pages/UserCollection/BlockView/BlockView';
import { Tabs } from '@/entities/Tabs/Tabs';
import { Text, useNotifications } from '@/shared/ui';
import { FETCHING_STATUS } from '@/shared/constants/constants';
import { copyToClipboard } from '@/shared/utils';
import { detailApi } from '@/widgets/Detail/api/detailApi';

type TStatus = 'IDLE' | 'SUCCESS' | 'ERROR' | 'LOADING';

interface TabPanelProps {
  index: number;
  value: number;
  children?: ReactNode;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.tabpanel}
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

const ItemCollection: FC<EstateCollection & { token: string; value: number }> = ({
  name,
  estates,
  id,
  token,
  value,
  agentInfo,
}) => {
  const { formatMessage } = useIntl();
  const { notify } = useNotifications();
  const collectionLink = `/cl/${id}`;
  const collectionLinkClientShow = `/cl/${id}?client=true&like=true`;
  const collectionLinkClient = `/cl/${id}?client=true`;
  const navigate = useNavigate();
  const [status, setStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const [copyLinkStatus, setCopyLinkStatus] = useState<keyof typeof FETCHING_STATUS>('IDLE');
  const allImages = estates!!
    .map(
      (estate) =>
        estate?.exteriorImages?.[0] || estate?.facilityImages?.[0] || estate?.interiorImages?.[0]
    )
    .filter(Boolean) as string[];
  const renderImages = !!allImages.length ? allImages : [DEFAULT_IMG];
  const deleteCollection = () => {
    setStatus('LOADING');
    estateCollectionApi
      .deleteCollection(token, id)
      .then((r) => {
        setStatus('SUCCESS');
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        setStatus('ERROR');
      });
  };

  const goToCollection = () => {
    navigate(collectionLink);
  };

  const goToCollectionClient = () => {
    navigate(collectionLinkClient);
  };

  const handleCopyLink = async () => {
    try {
      setCopyLinkStatus('LOADING');
      const fullUrl = `${window.location.origin}${collectionLinkClientShow}`;
      const result = await copyToClipboard(fullUrl);

      if (result) {
        setCopyLinkStatus('SUCCESS');
        notify({ message: formatMessage({ id: 'userCollection.copiedLink' }), duration: 3000 });
      }
    } catch (e) {
      setCopyLinkStatus('ERROR');
      console.log({ e });
    }
  };

  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <BlockView
          estates={estates!!}
          name={name}
          goToCollection={goToCollection}
          goToCollectionClient={goToCollectionClient}
          deleteCollection={deleteCollection}
          copyLink={handleCopyLink}
          id={id}
          copyLinkStatus={copyLinkStatus}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardView
          images={renderImages}
          estates={estates!!}
          name={name}
          goToCollection={goToCollection}
          deleteCollection={deleteCollection}
          copyLink={handleCopyLink}
          id={id}
        />
      </CustomTabPanel>
    </>
  );
};

const UserCollection: FC = () => {
  const { formatMessage } = useIntl();
  const [value, setValue] = useState(0);
  const [collection, setCollection] = useState<EstateCollection[]>([]);
  const [status, setStatus] = useState<TStatus>('IDLE');
  const token = localStorage.getItem('basicToken');
  const classesCollection = {
    0: styles.collection__block,
    1: styles.collection__card,
  };

  useEffect(() => {
    setStatus('LOADING');
    estateCollectionApi
      .getEstateCollection(token!!)
      .then((r) => {
        setCollection(r.data.items);
        setStatus('SUCCESS');
      })
      .catch((e) => {
        setStatus('ERROR');
        console.log(e);
      });
  }, []);

  return (
    <div className={styles.wrap}>
      <Text variant="heading2" as="h1" className={styles.header}>
        {formatMessage({ id: 'collection_title' })}
      </Text>
      {status === 'LOADING' && (
        <Watch
          height="180"
          width="180"
          color="gray"
          ariaLabel="watch-loading"
          wrapperClass={styles.loader}
        />
      )}
      {status === 'SUCCESS' && !!collection.length && (
        <>
          <div className={styles.tabs}>
            <Tabs
              content={[
                formatMessage({ id: 'userCollection.blocks' }),
                formatMessage({ id: 'userCollection.cards' }),
              ]}
              setValue={setValue}
              value={value}
            />
          </div>
          <div className={`${styles.collection} ${classesCollection[value as 1 | 0]}`}>
            {collection.map((item) => (
              <ItemCollection
                {...item}
                estates={item.estates || []}
                value={value}
                token={token!!}
              />
            ))}
          </div>
        </>
      )}
      {status === 'SUCCESS' && !collection.length && (
        <Text variant="heading3" className={styles.empty}>
          {formatMessage({ id: 'userCollection.empty' })}
        </Text>
      )}
    </div>
  );
};

export default UserCollection;
