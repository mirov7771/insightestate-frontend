import { FC, useMemo } from 'react';
import styles from './TableComparison.module.scss';
import { BadgeRating, Text } from '@/shared/ui';
import { OfferCollectionMapPinFilled } from '@/shared/assets/icons';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useIntl } from 'react-intl';
import { extractNestedValuesOrFallback, formatNumber } from '@/shared/utils';

type TKeys =
  | 'overallRating'
  | 'investmentSafety'
  | 'locationRating'
  | 'investmentPotential'
  | 'qualityOfLife'
  | 'priceFrom'
  | 'pricePerSquareMeter'
  | 'deliveryDate'
  | 'roiOver10Years'
  | 'irrOver10Years'
  | 'beachTime'
  | 'timeToShoppingMall'
  | 'airportTime'
  | 'plan'
  | 'sizeSqm'
  | 'totalFloors'
  | 'priceTo';

type TableComparisonProps = {
  estate: Array<Estate>;
};

export const TableComparison: FC<TableComparisonProps> = ({ estate }) => {
  const { formatMessage } = useIntl();
  const fields: Record<TKeys, string> = useMemo(
    () => ({
      overallRating: formatMessage({ id: 'overallRating' }),
      investmentSafety: formatMessage({ id: 'security' }),
      locationRating: formatMessage({ id: 'locationRating' }),
      investmentPotential: formatMessage({ id: 'invest_potential' }),
      qualityOfLife: formatMessage({ id: 'comfort' }),
      priceFrom: formatMessage({ id: 'priceFrom' }),
      priceTo: formatMessage({ id: 'priceTo' }),
      pricePerSquareMeter: formatMessage({ id: 'pricePerSquareMeter' }),
      deliveryDate: formatMessage({ id: 'completion_date' }),
      roiOver10Years: formatMessage({ id: 'roiSummary' }),
      irrOver10Years: formatMessage({ id: 'irr' }),
      beachTime: formatMessage({ id: 'beach_time_subway' }),
      timeToShoppingMall: formatMessage({ id: 'timeToShoppingMall' }),
      airportTime: formatMessage({ id: 'airport_time' }),
      plan: formatMessage({ id: 'plan' }),
      sizeSqm: formatMessage({ id: 'size_sqm' }),
      totalFloors: formatMessage({ id: 'total_floors' }),
    }),
    [formatMessage]
  );
  const result: Record<TKeys, string[] | undefined> = {
    overallRating: extractNestedValuesOrFallback(estate, ['grade.main'], '9.0')?.map((rating) =>
      Number(rating).toFixed(1).replace('.', ',')
    ),
    investmentSafety: extractNestedValuesOrFallback(estate, ['grade.comfortOfLife'], '9.0')?.map(
      (rating) => Number(rating).toFixed(1).replace('.', ',')
    ),
    locationRating: extractNestedValuesOrFallback(estate, ['grade.projectLocation'], '9.0')?.map(
      (rating) => Number(rating).toFixed(1).replace('.', ',')
    ),
    investmentPotential: extractNestedValuesOrFallback(
      estate,
      ['grade.investmentPotential'],
      '9.0'
    )?.map((rating) => Number(rating).toFixed(1).replace('.', ',')),
    qualityOfLife: extractNestedValuesOrFallback(estate, ['grade.comfortOfLife'], '9.0')?.map(
      (rating) => Number(rating).toFixed(1).replace('.', ',')
    ),
    priceFrom: extractNestedValuesOrFallback(estate, ['price.min'])?.map(
      (price) => `$${formatNumber(price)}`
    ),
    priceTo: extractNestedValuesOrFallback(estate, ['price.max'])?.map(
      (price) => `$${formatNumber(price)}`
    ), // priceMax
    pricePerSquareMeter: undefined,
    deliveryDate: extractNestedValuesOrFallback(estate, ['buildEndDate']),
    roiOver10Years: extractNestedValuesOrFallback(estate, ['profitability.roi'], '200')?.map(
      (text) => `${text}%`
    ),
    irrOver10Years: extractNestedValuesOrFallback(estate, ['profitability.irr'], '13')?.map(
      (text) => `${text}%`
    ),
    beachTime: extractNestedValuesOrFallback(
      estate,
      ['infrastructure.beachTime.car', 'estate.infrastructure.beachTime.walk'],
      '5'
    )?.map((text) => `${text} ${formatMessage({ id: 'min' })}`),
    timeToShoppingMall: extractNestedValuesOrFallback(
      estate,
      ['infrastructure.mallTime.car', 'infrastructure.mallTime.walk'],
      '30'
    )?.map((text) => `${text} ${formatMessage({ id: 'min' })}`),
    airportTime: extractNestedValuesOrFallback(
      estate,
      ['infrastructure.airportTime.car', 'infrastructure.airportTime.walk'],
      '30'
    )?.map((text) => `${text} ${formatMessage({ id: 'min' })}`),
    plan: undefined,
    sizeSqm: undefined,
    totalFloors: undefined,
  };

  return (
    <div className={styles.table}>
      <div className={`${styles.table__row} ${styles.table__row_card}`}>
        {estate.map((estate) => (
          <div className={`${styles.table__cell} ${styles.table__cell_card}`}>
            <div className={styles.card}>
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
              <Text variant="heading5" className={styles.card__name}>
                {estate.name}
              </Text>
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
        ))}
      </div>
      {Object.entries(result).map(([key, value]) => {
        if (!value) {
          return null;
        }
        return (
          <div className={styles.table__row}>
            <div className={styles.table__cell_name}>
              <Text variant="body2">{fields[key as keyof typeof fields]}</Text>
            </div>
            {value.map((val: string) => (
              <div className={styles.table__cell}>
                <Text variant="heading5">{val}</Text>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
