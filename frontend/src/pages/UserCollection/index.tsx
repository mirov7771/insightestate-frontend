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
  const [collection, setCollection] = useState<EstateCollection[]>([]);
  const token = localStorage.getItem('basicToken');

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
      <div className={styles.collection}>
        {collection.map((item) => (
          <ItemCollection {...item} token={token!!} />
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

const ItemCollection: FC<EstateCollection & { token: string }> = ({ name, estates, id, token }) => {
  const [value, setValue] = useState(0);
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
      <div className={styles.tabs}>
        <Tabs content={['Блоки', 'Карточки']} setValue={setValue} value={value} />
      </div>
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

  /*return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        <img className={styles.colImage} src={img} alt="" />
        <p>{name}</p>
        <div className={styles.card__details}>
          <span className={styles.card__details__item}>
            {localField('object_count')}: {estates?.length || 0}
          </span>
        </div>
        <Spacer width={100} height={8} />
        <div className={styles.buttons}>
          <Button onClick={goToCollection}>{localField('offer_button')}</Button>
          <Button onClick={deleteCollection}>{localField('remove_button')}</Button>
        </div>
      </div>
    </div>
  );*/
};
