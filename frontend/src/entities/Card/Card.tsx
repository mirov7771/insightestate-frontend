import { FC, useState } from 'react';
import styles from './Card.module.scss';
import { Beach, VectorRating } from '@/shared/assets/icons';
import { Estate } from '@/widgets/Filter/api/filterApi';
import { Button, Text } from '@/shared/ui';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { InfoModal } from '@/shared/ui/modals';
import { useIntl } from 'react-intl';
import { UserCollectionModal } from '@/widgets/Modal/UserCollectionModal';

export const DEFAULT_IMG =
  'https://cdn.prod.website-files.com/672b5797ac1486cdfc5122ac/67aa547c02740c42abf52609_675f0debfa47fa6400a3c65a_Exterior_03.jpeg';

type CardProps = Estate;

export const Card: FC<
  CardProps & {
    clickable: boolean;
    collectionId?: string;
    token?: string | null;
  }
> = ({
  id,
  level,
  beachTravelTime,
  grade,
  buildEndDate,
  priceMin,
  facilityImages,
  interiorImages,
  exteriorImages,
  name,
  clickable,
  collectionId,
  token,
}) => {
  const { formatMessage } = useIntl();
  const img = exteriorImages?.[0] || facilityImages?.[0] || interiorImages?.[0] || DEFAULT_IMG;
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  const deleteFromCollection = () => {
    if (collectionId) {
      estateCollectionApi
        .deleteFromCollection(token!!, collectionId, id!!)
        .then(() => {
          setInfoTitle(formatMessage({ id: 'object_delete_title' }));
          setInfoText(formatMessage({ id: 'object_delete_message' }));
          handleOpenInfoModal();
        })
        .catch((e) => console.log(e));
    }
  };

  const openRatingInfo = () => {
    setInfoTitle(formatMessage({ id: 'object_info_title' }));
    setInfoText(formatMessage({ id: 'object_info_message' }));
    handleOpenInfoModal();
  };

  const handleOpenUserCollectionModal = () => {
    setUserCollectionModal(true);
  };
  const handleCloseUserCollectionModal = () => {
    setUserCollectionModal(false);
  };

  const currency = localStorage.getItem('currency') || '฿'

  return (
    <div className={styles.card}>
      {clickable ? (
        <div className={styles.card__image}>
          <a
            href={`/property/${id}`}
            target="_blank"
            className={styles.card__image}
            rel="noreferrer"
          >
            <img src={img} alt="" />
          </a>
          {/*<div className={styles.card__rating} onClick={openRatingInfo}>*/}
          {/*  {grade.toPrecision(2)} <VectorRating />*/}
          {/*</div>*/}
          <div className={styles.card__details}>
            {buildEndDate !== '-' && (
              <span className={styles.card__details__item}>{buildEndDate}</span>
            )}
            <span className={styles.card__details__item}>
              <Beach /> {beachTravelTime} {formatMessage({ id: 'min' })}
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.card__image}>
          <a
            href={`/property/${id}`}
            target="_blank"
            className={styles.card__image}
            rel="noreferrer"
          >
            <img src={img} alt="" />
          </a>
          {/*<div className={styles.card__rating} onClick={openRatingInfo}>*/}
          {/*  {grade.toPrecision(2)} <VectorRating />*/}
          {/*</div>*/}
          <div className={styles.card__details}>
            {buildEndDate !== '-' && (
              <span className={styles.card__details__item}>{buildEndDate}</span>
            )}
            <span className={styles.card__details__item}>
              <Beach /> {beachTravelTime} {formatMessage({ id: 'min' })}
            </span>
          </div>
        </div>
      )}
      {clickable ? (
        <a href={`/property/${id}`} className={styles.card__title}>
          {name}
        </a>
      ) : (
        <a href={`/property/${id}`} target="_blank" className={styles.card__title} rel="noreferrer">
          {name}
        </a>
      )}
      <p>
        <strong>{formatMessage({ id: 'price_from' })}</strong>{' '}
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currency === '₽' ? 'RUB' : (currency === '฿' ? 'THB' : 'USD'),
          currencyDisplay: 'narrowSymbol',
          maximumFractionDigits: 0,
        }).format(priceMin)}
      </p>
      {!!collectionId && (
        <Button onClick={deleteFromCollection}>
          <Text variant="body1">{formatMessage({ id: 'remove_button' })}</Text>
        </Button>
      )}
      {!!token && (
        <Button
          onClick={handleOpenUserCollectionModal}
          wide={false}
          size={'s'}
          style={{
            height: '30px',
            fontSize: '14px',
            marginTop: '.5rem',
          }}
        >
          {formatMessage({ id: 'add_to_collection' })}
        </Button>
      )}
      {/*<p>
        Доходность до <strong>136%</strong> за 10 лет
      </p>*/}

      <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
      <UserCollectionModal
        open={userCollectionModal}
        onClose={handleCloseUserCollectionModal}
        onOpen={handleOpenUserCollectionModal}
        anchor="bottom"
        id={id!!}
        token={token!!}
      />
    </div>
  );
};
