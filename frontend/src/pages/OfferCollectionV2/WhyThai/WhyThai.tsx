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

export const WhyThai: FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <Text variant="heading2" as="h2" className={styles.title}>
          Почему инвесторы выбирают Пхукет
        </Text>

        <ul className={styles.list}>
          <li>
            <span className={styles.icon}>
              <OfferCollectionCurrencyDollar />
            </span>
            <Text variant="body1">Стабильный курс валюты</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionTrendingUp />
            </span>
            <Text variant="body1">Растущий ВВП</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionMoodDollar />
            </span>
            <Text variant="body1">Низкая инфляция</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionUsersGroup />
            </span>
            <Text variant="body1">Растущий турпоток</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionHeartRateMonitor />
            </span>
            <Text variant="body1">Медицина мирового уровня</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionHomeDollar />
            </span>
            <Text variant="body1">Простота покупки недвижимости</Text>
          </li>
          <li>
            <span className={styles.icon}>
              <OfferCollectionCalendarTime />
            </span>
            <Text variant="body1">Долгосрочные визовые решения</Text>
          </li>
        </ul>

        <div className={styles.imageWrapper}>
          <img src={House} alt="resort" className={styles.image} />
        </div>
      </div>
    </section>
  );
};
