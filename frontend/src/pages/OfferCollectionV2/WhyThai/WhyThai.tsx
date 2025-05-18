import { FC } from 'react';
import styles from './WhyThai.module.scss';
import House from './assets/house.png';
import { Text } from '@/shared/ui';
import {
  OfferCollectionCalendarTime,
  OfferCollectionCurrencyDollar,
  OfferCollectionHeartRateMonitor,
  OfferCollectionHomeDollar,
  OfferCollectionMoodDollar,
  OfferCollectionTrendingUp,
  OfferCollectionUsersGroup,
} from '@/shared/assets/icons';
import { useIntl } from 'react-intl';

export const WhyThai: FC = () => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.content__text}>
          <Text variant="heading2" as="h2" className={styles.title}>
            {formatMessage({ id: 'why' })}
          </Text>

          <ul className={styles.list}>
            <li>
              <span className={styles.icon}>
                <OfferCollectionCurrencyDollar />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_1' })}</Text>
            </li>
            <li>
              <span className={styles.icon}>
                <OfferCollectionTrendingUp />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_2' })}</Text>
            </li>
            <li>
              <span className={styles.icon}>
                <OfferCollectionMoodDollar />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_3' })}</Text>
            </li>
            <li>
              <span className={styles.icon}>
                <OfferCollectionUsersGroup />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_4' })}</Text>
            </li>
            <li>
              <span className={styles.icon}>
                <OfferCollectionHeartRateMonitor />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_5' })}</Text>
            </li>
            <li>
              <span className={styles.icon}>
                <OfferCollectionHomeDollar />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_6' })}</Text>
            </li>
            <li>
              <span className={styles.icon}>
                <OfferCollectionCalendarTime />
              </span>
              <Text variant="body1">{formatMessage({ id: 'why_7' })}</Text>
            </li>
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <img src={House} alt="resort" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
