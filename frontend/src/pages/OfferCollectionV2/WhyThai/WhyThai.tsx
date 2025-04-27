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
import {localField} from "@/i18n/localField";

export const WhyThai: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text variant="heading2" as="h2" className={styles.title}>
          {localField('why')}
        </Text>

        <ul className={styles.list}>
          <li>
            <span className={styles.icon}>
              <OfferCollectionCurrencyDollar />
            </span>
            <Text variant="body1">{localField('why_1')}</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionTrendingUp />
            </span>
            <Text variant="body1">{localField('why_2')}</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionMoodDollar />
            </span>
            <Text variant="body1">{localField('why_3')}</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionUsersGroup />
            </span>
            <Text variant="body1">{localField('why_4')}</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionHeartRateMonitor />
            </span>
            <Text variant="body1">{localField('why_5')}</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionHomeDollar />
            </span>
            <Text variant="body1">{localField('why_6')}</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionCalendarTime />
            </span>
            <Text variant="body1">{localField('why_7')}</Text>
          </li>
        </ul>

        <div className={styles.imageWrapper}>
          <img src={House} alt="resort" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
