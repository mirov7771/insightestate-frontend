import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import { Estate, filterApi, GetEstateParams } from '@/widgets/Filter/api/filterApi';
import { InfoModal } from '@/shared/ui/modals';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Slider } from './Slider';
import styles from './CardSlide.module.scss';
import { Button, Text } from '@/shared/ui';
import { AdvantagesBadges } from '@/entities/CardSlide/AdvantagesBadges';
import { UserCollectionModal } from '@/widgets/Modal/UserCollectionModal';
import { OfferCollectionCar, OfferCollectionWalk } from '@/shared/assets/icons';
import { CardSlideSkeleton } from '@/entities/CardSlide/CardSlideSkeleton';

type CardSlideProps = {
  clickable: boolean;
  estate: Estate;
  loading: boolean;
  token: string | null;
  collectionId?: string;
};

export const CardSlide: FC<CardSlideProps> = ({
  estate,
  clickable,
  token,
  collectionId,
  loading,
}) => {
  const { formatMessage } = useIntl();
  const [infoModal, setInfoModal] = useState(false);
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const images = [
    ...(estate.exteriorImages || []),
    ...(estate.interiorImages || []),
    ...(estate.facilityImages || []),
  ].slice(0, 4);

  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  const deleteFromCollection = () => {
    if (collectionId) {
      estateCollectionApi
        .deleteFromCollection(token!!, collectionId, estate.id)
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

  console.log({ estate });

  return loading ? (
    <CardSlideSkeleton />
  ) : (
    <>
      <div className={styles.card}>
        <div className={styles.card__slider}>
          <ul className={styles.badges}>
            <li className={styles.badges__badge} onClick={openRatingInfo}>
              <Text variant="heading4">{estate.grade.toPrecision(2)}</Text>
            </li>
            {estate.buildEndDate !== '-' && (
              <li className={styles.badges__badge}>
                <Text variant="heading4">{estate.buildEndDate}</Text>
              </li>
            )}
          </ul>
          <Slider images={images} />
          <div className={styles.info}>
            <Text variant="heading3" className={styles.info__price}>
              {formatMessage({ id: 'from' })}{' '}
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }).format(estate.priceMin)}
            </Text>
            <AdvantagesBadges />
          </div>
        </div>
        <div className={styles.card__content}>
          <div>
            <Text variant="heading3-1">{estate.name}</Text>
            <div className={styles.card__desciption}>
              <Text variant="body1">Паттайя, Джомтьен</Text>
              <Text variant="body1">
                До пляжа:{' '}
                <span>
                  <OfferCollectionCar /> 5 мин
                </span>
                <span>
                  <OfferCollectionWalk /> 12 мин
                </span>
              </Text>
            </div>
          </div>
          <div>
            {!!token && (
              <Button onClick={handleOpenUserCollectionModal} wide size="s">
                <Text variant="heading5">+ {formatMessage({ id: 'add_to_collection' })}</Text>
              </Button>
            )}
          </div>
        </div>
      </div>
      <InfoModal open={infoModal} title={infoTitle} text={infoText} setOpen={setInfoModal} />
      <UserCollectionModal
        open={userCollectionModal}
        onClose={handleCloseUserCollectionModal}
        onOpen={handleOpenUserCollectionModal}
        anchor="bottom"
        id={estate.id}
        token={token || ''}
      />
    </>
  );
};
