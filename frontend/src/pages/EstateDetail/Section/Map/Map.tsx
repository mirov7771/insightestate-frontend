import { FC } from 'react';
import { Section } from '../Section';
import { useIntl } from 'react-intl';
import { GMap, Text } from '@/shared/ui';
import { EstateDetail } from '@/widgets/Detail/api/detailApi';
import { IconCar, IconWalk } from '@/shared/assets/icons';
import styles from './Map.module.scss';

const containerStyle = {
  width: '100%',
  height: '400px',
};

type MapProps = {
  url: string;
  city?: string;
  infrastructure?: EstateDetail['infrastructure'];
  location?: EstateDetail['location']['name'];
  latitude?: string;
  longitude?: string;
};

export const Map: FC<MapProps> = ({ url, infrastructure, location, city, latitude, longitude }) => {
  const { formatMessage } = useIntl();
  const renderMap = () => {
    return <GMap
        mapContainerStyle={containerStyle}
        url={url}
        longitude={longitude ? Number(longitude) : undefined}
        latitude={latitude ? Number(latitude) : undefined}
    />;
  };

  return (
    <Section
      title={
        <Text variant="heading4">
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
              <Text variant="heading5">
                {city === 'Bangkok'
                  ? formatMessage({ id: 'to_subway_time' })
                  : formatMessage({ id: 'to_beach_time' })}
              </Text>
              <div className={styles.infrastructure__text}>
                {!!infrastructure.beachTime?.car && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <IconCar />{' '}
                    <span>
                      {infrastructure.beachTime.car} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
                {!!infrastructure.beachTime?.walk && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <IconWalk />{' '}
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
              <Text variant="heading5">{formatMessage({ id: 'to_mall_time' })}</Text>
              <div className={styles.infrastructure__text}>
                {!!infrastructure.mallTime?.car && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <IconCar />{' '}
                    <span>
                      {infrastructure.mallTime.car} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
                {!!infrastructure.mallTime?.walk && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <IconWalk />{' '}
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
              <Text variant="heading5">{formatMessage({ id: 'to_airport_time' })}</Text>
              <div className={styles.infrastructure__text}>
                {!!infrastructure.airportTime?.car && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <IconCar />{' '}
                    <span>
                      {infrastructure.airportTime.car} {formatMessage({ id: 'min' })}
                    </span>
                  </Text>
                )}
                {!!infrastructure.airportTime?.walk && (
                  <Text variant="body1" className={styles.infrastructure__text_item}>
                    <IconWalk />{' '}
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
      {renderMap() &&
          <GMap
            mapContainerStyle={containerStyle}
            url={url}
            longitude={longitude ? Number(longitude) : undefined}
            latitude={latitude ? Number(latitude) : undefined}
          />}
    </Section>
  );
};
