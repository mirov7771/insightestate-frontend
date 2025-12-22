import { FC, useState } from 'react';
import styles from './Info.module.scss';
import {
  EstateDetail,
  EstateTypeEn,
  EstateTypeRu,
  LevelTypeEn,
  LevelTypeRu,
  ProjectUnitCount,
} from '@/widgets/Detail/api/detailApi';
import { useIntl } from 'react-intl';
import { Text } from '@/shared/ui';

export const Info: FC<{
  companyEnabled: boolean;
  floors: number;
  level: string;
  type: string;
  buildEndDate?: string;
  city?: string;
  developer?: string;
  parkingSize?: number;
  price?: EstateDetail['price'];
  project?: ProjectUnitCount;
  priceDate: string;
  furniture?: string;
}> = ({ floors, project, buildEndDate, level, type, developer, companyEnabled, price, city, priceDate, furniture }) => {
  const { formatMessage } = useIntl();
  const [locale, setLocale] = useState<string>(localStorage.getItem('language') || 'ru');
  const currency = localStorage.getItem('currency') || '฿'
  return (
    <div className={styles.info}>
      {city && (
        <div className={styles.info__item}>
          <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
            {formatMessage({ id: 'city' })}
          </Text>
          <Text variant="body1" className={styles.text}>
            {city}
          </Text>
        </div>
      )}
      <div className={styles.info__item}>
        <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
          {formatMessage({ id: 'class' })}
        </Text>
        <Text variant="body1" className={styles.text}>
          {(locale === 'en' ? LevelTypeEn.get(level) : LevelTypeRu.get(level)) ||
            formatMessage({ id: 'not_selected' })}
        </Text>
      </div>
      <div className={styles.info__item}>
        <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
          {formatMessage({ id: 'type_of_place' })}
        </Text>
        <Text className={styles.text}>
          {(locale === 'en' ? EstateTypeEn.get(type) : EstateTypeRu.get(type)) || 'Villa'}
        </Text>
      </div>
      {developer && (
        <div className={styles.info__item}>
          <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
            {formatMessage({ id: 'developer' })}
          </Text>
          <Text variant="body1" className={styles.text}>
            {developer}
          </Text>
        </div>
      )}
      <div className={styles.info__item}>
        <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
          {formatMessage({ id: 'uk' })}
        </Text>
        <Text variant="body1" className={styles.text}>
          {companyEnabled ? formatMessage({ id: 'yes' }) : formatMessage({ id: 'no' })}
        </Text>
      </div>
      {buildEndDate && (
        <div className={styles.info__item}>
          <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
            {formatMessage({ id: 'completion_date' })}
          </Text>
          <Text variant="body1" className={styles.text}>
            {buildEndDate}
          </Text>
        </div>
      )}
      {floors && (
        <div className={styles.info__item}>
          <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
            {formatMessage({ id: 'total_floors' })}
          </Text>
          <Text variant="body1" className={styles.text}>
            {floors}
          </Text>
        </div>
      )}
      {project?.total && (
        <div className={styles.info__item}>
          <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
            {formatMessage({ id: 'total_aparts' })}
          </Text>
          <Text variant="body1" className={styles.text}>
            {project?.total}
          </Text>
        </div>
      )}
      {price && (
        <div className={styles.info__item}>
          <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
            {formatMessage({ id: 'price_info' })}{` (${priceDate})`}
          </Text>
          {(price.max === '-1' || price.max === '-0' || price.max === '-2') ?
              <Text variant="body1" className={styles.text}>
                {formatMessage({ id: 'sold_out' })}
              </Text> :
              <Text variant="body1" className={styles.text}>
                {price.min}{currency} — {price.max}{currency}
              </Text>
          }
        </div>
      )}

      {furniture && (
          <div className={styles.info__item}>
            <Text variant="body1" className={`${styles.text} ${styles.text__grey}`}>
              {formatMessage({ id: 'furniture' })}
            </Text>
            <Text variant="body1" className={styles.text}>
              {furniture}{''}฿
            </Text>
          </div>
      )}
    </div>
  );
};
