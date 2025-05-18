import { FC, ReactNode, useEffect, useState } from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
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

const ItemCollection: FC<Required<EstateCollection> & { token: string; value: number }> = ({
  name,
  estates,
  id,
  token,
  value,
}) => {
  const { notify } = useNotifications();
  const [, copyToClipboard] = useCopyToClipboard();
  const collectionLink = `${window.location.host}/offer-collection-v2/${id}?token=${token.replace('Basic ', '')}`;
  const navigate = useNavigate();
  const allImages = estates
    .map(
      (estate) =>
        estate?.exteriorImages?.[0] || estate?.facilityImages?.[0] || estate?.interiorImages?.[0]
    )
    .filter(Boolean) as string[];
  const renderImages = !!allImages.length ? allImages : [DEFAULT_IMG];
  const deleteCollection = () => {
    estateCollectionApi
      .deleteCollection(token, id)
      .then((r) => {
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  const goToCollection = () => {
    navigate(collectionLink);
  };

  const handleCopyLink = () => {
    copyToClipboard(collectionLink);
    notify({ message: 'Ссылка на подборку скопирована', duration: 200000 });
  };

  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <BlockView
          estates={estates}
          name={name}
          goToCollection={goToCollection}
          deleteCollection={deleteCollection}
          copyLink={handleCopyLink}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardView
          images={renderImages}
          estates={estates}
          name={name}
          goToCollection={goToCollection}
          deleteCollection={deleteCollection}
          copyLink={handleCopyLink}
        />
      </CustomTabPanel>
    </>
  );
};

export const UserCollection: FC = () => {
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
      <h1 className={styles.header}>{formatMessage({ id: 'collection_title' })}</h1>
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
            <Tabs content={['Блоки', 'Карточки']} setValue={setValue} value={value} />
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
          У вас еще нет подборок
        </Text>
      )}
    </div>
  );
};
