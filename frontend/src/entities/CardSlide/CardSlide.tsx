import { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import { Estate } from '@/widgets/Filter/api/filterApi';
import { InfoModal, ModalAddToCollection } from '@/shared/ui/modals';
import { Slider } from './Slider';
import styles from './CardSlide.module.scss';
import { Button, Text } from '@/shared/ui';
import { AdvantagesBadges } from '@/entities/CardSlide/AdvantagesBadges';
import { EstateIcon, IconCar, IconWalk } from '@/shared/assets/icons';
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

  const openRatingInfo = () => {
    setInfoTitle(formatMessage({ id: 'object_info_title' }));
    setInfoText(formatMessage({ id: 'object_info_message' }));
    handleOpenInfoModal();
  };

  const handleOpenUserCollectionModal = () => {
    setUserCollectionModal(true);
  };

  return loading ? (
    <CardSlideSkeleton />
  ) : (
    <>
      <div className={styles.card}>
        <div className={styles.card__slider}>
          <ul className={styles.badges}>
            <li className={styles.badges__badge} onClick={openRatingInfo}>
              <Text variant="body2" bold>
                <div
                  style={{
                    display: 'inline-flex',
                    gap: '5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EstateIcon />
                  {estate.grade.toPrecision(2)}
                </div>
              </Text>
            </li>
            {estate.buildEndDate !== '-' && estate.buildEndDate && (
              <li className={styles.badges__badge}>
                <Text variant="body2" bold>
                  {estate.buildEndDate}
                </Text>
              </li>
            )}
            {estate.roiSummary && (
              <li className={styles.badges__badge}>
                <Text variant="body2" bold>
                  {formatMessage({ id: 'roi_card' })} {estate.roiSummary}%
                </Text>
              </li>
            )}
          </ul>
          <a href={`/property/${estate.id}`} target="_blank" rel="noreferrer">
            <Slider images={images} />
          </a>
          <div className={styles.info}>
            <Text variant="heading4" className={styles.info__price}>
              {formatMessage({ id: 'from' })}{' '}
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }).format(estate.priceMin)}
            </Text>
            <AdvantagesBadges
              toolTip1={estate.toolTip1 === 'true' ? estate.toolTip1 : undefined}
              toolTip2={estate.toolTip2 === 'true' ? estate.toolTip2 : undefined}
              toolTip3={estate.toolTip3 === 'true' ? estate.toolTip3 : undefined}
            />
          </div>
        </div>
        <div className={styles.card__content}>
          <div className={styles.left}>
            <a
              href={`/property/${estate.id}`}
              target="_blank"
              rel="noreferrer"
              className={styles.card__title}
            >
              <Text variant="heading4">{estate.name}</Text>
            </a>
            <div className={styles.card__desciption}>
              <Text variant="body1">
                {estate.city}, {estate.beach}
              </Text>
              <Text variant="body1">
                {estate.city !== 'Bangkok'
                  ? `${formatMessage({ id: 'to_beach' })}: `
                  : `${formatMessage({ id: 'to_subway' })}: `}
                <span>
                  <IconCar /> {estate.beachTravelTimeCar} {formatMessage({ id: 'min' })}
                </span>
                <span>
                  <IconWalk /> {estate.beachTravelTimeWalk} {formatMessage({ id: 'min' })}
                </span>
              </Text>
            </div>
          </div>
          {!!token && (
            <div className={styles.right}>
              {(estate.collectionCount || 0) !== 0 ? (
                <Button
                  onClick={handleOpenUserCollectionModal}
                  size="s"
                  className={styles.card__button}
                  variant="base"
                >
                  <Text variant="body1" bold>
                    +{' '}
                    {formatMessage({ id: 'in_collection' }).replace(
                      '%s',
                      (estate.collectionCount || 0) + ''
                    )}
                  </Text>
                </Button>
              ) : (
                <Button
                  onClick={handleOpenUserCollectionModal}
                  size="s"
                  className={styles.card__button}
                >
                  <Text variant="body1" bold>
                    + {formatMessage({ id: 'add_to_collection' })}
                  </Text>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <InfoModal open={infoModal} title={infoTitle} text={infoText} setOpen={setInfoModal} />
      <ModalAddToCollection
        estateId={estate.id}
        open={userCollectionModal}
        setOpen={setUserCollectionModal}
      />
    </>
  );
};
