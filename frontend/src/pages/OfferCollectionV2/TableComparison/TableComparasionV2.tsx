import React, { FC, ReactNode } from 'react';
import styles from './TableComparison.module.scss';
import { BadgeRating, Text } from '@/shared/ui';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { IconLayout, OfferCollectionMapPinFilled } from '@/shared/assets/icons';
import { useIntl } from 'react-intl';

type TRows = { name: string; values: Array<ReactNode | string> }[];

type TableComparisonV2Props = {
  estates: Array<Estate>;
  rows: TRows;
};

export const TableComparisonV2: FC<TableComparisonV2Props> = ({ rows, estates }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.table}>
      <div className={`${styles.table__row} ${styles.table__row_card}`}>
        {estates.map((estate) => {
          if (!estate.units) {
            return null;
          }
          return estate.units.map((unit) => {
            return (
              <div className={`${styles.table__cell} ${styles.table__cell_card}`}>
                <div className={styles.card}>
                  <div className={styles.unit__plan}>
                    {unit.planImage ? (
                      <img src={unit.planImage} alt="plan" loading="lazy" />
                    ) : (
                      <div className={styles.unit__plan_placeholder}>
                        <IconLayout />
                        <Text variant="body1" bold align="center">
                          {formatMessage({ id: 'units.plan' })}
                        </Text>
                      </div>
                    )}
                  </div>
                  <div className={styles.card__info}>
                    <div className={styles.card__wrapper}>
                      <img
                        src={
                          estate.exteriorImages?.[0] ||
                          estate.facilityImages?.[0] ||
                          estate.interiorImages?.[0] ||
                          DEFAULT_IMG
                        }
                        className={styles.card__img}
                        alt=""
                      />
                    </div>
                    <Text variant="body2" bold className={styles.card__name}>
                      {estate.name}
                    </Text>
                  </div>
                  {estate.location?.beach && (
                    <BadgeRating
                      className={styles.card__badge}
                      size="sm"
                      icon={<OfferCollectionMapPinFilled />}
                      text={estate.location.beach}
                    />
                  )}
                </div>
              </div>
            );
          });
        })}
      </div>
      {rows.map((row) => (
        <div className={styles.table__row}>
          <div className={styles.table__cell_name}>
            <Text variant="body2">{row.name}</Text>
          </div>
          {row.values.map((value) => (
            <div className={styles.table__cell}>
              <Text variant="heading5">{value}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
