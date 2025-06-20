import { FC } from 'react';
import { Section } from '../Section';
import { useIntl } from 'react-intl';
import { GMap, Text } from '@/shared/ui';
import { EstateDetail } from '@/widgets/Detail/api/detailApi';
import { OfferCollectionCar, OfferCollectionWalk } from '@/shared/assets/icons';
import styles from './Map.module.scss';

const containerStyle = {
  width: '100%',
  height: '400px',
};

type MapProps = {
  url: string;
  infrastructure?: EstateDetail['infrastructure'];
  location?: EstateDetail['location']['name'];
};

export const Map: FC<MapProps> = ({ url, infrastructure, location }) => {
  const { formatMessage } = useIntl();
  const renderMap = () => {
    return <GMap mapContainerStyle={containerStyle} url={url} />;
  };

  return (
    <Section
      title={
        <Text variant="heading3">
          {formatMessage({ id: 'map' })}{' '}
          {location ? (
            <span className={styles.infrastructure__location}>{location}</span>
          ) : null}{' '}
        </Text>
      }
    >
      {infrastructure && (
        <div className={styles.infrastructure}>
          {(infrastructure.beachTime?.car || infrastructure.beachTime?.walk) && (
            <div className={styles.infrastructure__item}>
              <Text variant="heading5">До пляжа:</Text>
              <div className={styles.infrastructure__text}>
                {!!infrastructure.beachTime?.car && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <OfferCollectionCar />{' '}
                    <span>
                      {infrastructure.beachTime.car} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
                {!!infrastructure.beachTime?.walk && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <OfferCollectionWalk />{' '}
                    <span>
                      {infrastructure.beachTime.walk} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
              </div>
            </div>
          )}
          {(infrastructure.mallTime?.car || infrastructure.mallTime?.walk) && (
            <div className={styles.infrastructure__item}>
              <Text variant="heading5">До торгового центра:</Text>
              <div className={styles.infrastructure__text}>
                {!!infrastructure.mallTime?.car && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <OfferCollectionCar />{' '}
                    <span>
                      {infrastructure.mallTime.car} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
                {!!infrastructure.mallTime?.walk && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <OfferCollectionWalk />{' '}
                    <span>
                      {infrastructure.mallTime.walk} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
              </div>
            </div>
          )}
          {(infrastructure.airportTime?.car || infrastructure.airportTime?.walk) && (
            <div className={styles.infrastructure__item}>
              <Text variant="heading5">До аэропорта:</Text>
              <div className={styles.infrastructure__text}>
                {!!infrastructure.airportTime?.car && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <OfferCollectionCar />{' '}
                    <span>
                      {infrastructure.airportTime.car} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
                {!!infrastructure.airportTime?.walk && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <OfferCollectionWalk />{' '}
                    <span>
                      {infrastructure.airportTime.walk} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      {renderMap() && <GMap mapContainerStyle={containerStyle} url={url} />}
    </Section>
  );
};
