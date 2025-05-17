import { FC, ReactNode, useEffect, useState } from 'react';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import styles from './UserCollection.module.scss';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { CardView } from './CardView/CardView';
import { BlockView } from '@/pages/UserCollection/BlockView/BlockView';
import { Tabs } from '@/entities/Tabs/Tabs';

export const UserCollection: FC = () => {
  const [value, setValue] = useState(0);
  const [collection, setCollection] = useState<EstateCollection[]>([]);
  const token = localStorage.getItem('basicToken');
  const classesCollection = {
    0: styles.collection__block,
    1: styles.collection__card,
  };

  useEffect(() => {
    estateCollectionApi
      .getEstateCollection(token!!)
      .then((r) => {
        setCollection(r.data.items);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>{localField('collection_title')}</h1>
      <div className={styles.tabs}>
        <Tabs content={['Блоки', 'Карточки']} setValue={setValue} value={value} />
      </div>
      <div className={`${styles.collection} ${classesCollection[value as 1 | 0]}`}>
        {collection.map((item) => (
          <ItemCollection {...item} value={value} token={token!!} />
        ))}
      </div>
    </div>
  );
};

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
}) => {
  const navigate = useNavigate();
  const allImages = estates
    .map(
      (estate) =>
        estate.exteriorImages?.[0] || estate.facilityImages?.[0] || estate.interiorImages?.[0]
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
    navigate(`/offer-collection-v2/${id}?token=${token.replace('Basic ', '')}`);
  };

  return (
    <>
      <CustomTabPanel value={value} index={0}>
        <BlockView
          estates={estates}
          name={name}
          goToCollection={goToCollection}
          deleteCollection={deleteCollection}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CardView
          images={renderImages}
          estates={estates}
          name={name}
          goToCollection={goToCollection}
          deleteCollection={deleteCollection}
        />
      </CustomTabPanel>
    </>
  );
};
