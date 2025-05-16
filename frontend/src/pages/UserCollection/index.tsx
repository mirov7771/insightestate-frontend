import { FC, useEffect, useState } from 'react';
import {
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import styles from './UserCollection.module.scss';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useNavigate } from 'react-router';
import { localField } from '@/i18n/localField';
import { CardView } from './CardView/CardView';

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

  const coll = [
    ...collection,
    ...collection,
    ...collection,
    ...collection,
    ...collection,
    ...collection,
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>{localField('collection_title')}</h1>
      <div className={styles.collection}>
        {coll.map((item) => (
          <ItemCollection {...item} token={token!!} />
        ))}
      </div>
    </div>
  );
};

const ItemCollection: FC<EstateCollection & { token: string }> = ({ name, estates, id, token }) => {
  const navigate = useNavigate();
  const allImages = estates
    .map(
      (estate) =>
        estate.exteriorImages?.[0] || estate.facilityImages?.[0] || estate.interiorImages?.[0]
    )
    .filter(Boolean) as string[];
  const renderImages = !!allImages.length ? allImages : [DEFAULT_IMG];
  const img =
    estates?.[0]?.exteriorImages?.[0] ||
    estates?.[0]?.facilityImages?.[0] ||
    estates?.[0]?.interiorImages?.[0] ||
    DEFAULT_IMG;
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
    <CardView
      images={renderImages}
      estates={estates}
      name={name}
      goToCollection={goToCollection}
      deleteCollection={deleteCollection}
    />
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
