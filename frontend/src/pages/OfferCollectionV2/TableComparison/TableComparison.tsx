import { FC, useMemo } from 'react';
import styles from './TableComparison.module.scss';
import { BadgeRating, Text } from '@/shared/ui';
import { IconMapPinFilled } from '@/shared/assets/icons';
import { Estate } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { DEFAULT_IMG } from '@/entities/Card/Card';
import { useIntl } from 'react-intl';
import { extractNestedValuesOrFallback, formatNumber } from '@/shared/utils';

type TKeys =
  // | 'overallRating'
  // | 'investmentSafety'
  // | 'locationRating'
  // | 'investmentPotential'
  // | 'qualityOfLife'
  | 'priceFrom'
  | 'pricePerSquareMeter'
  | 'deliveryDate'
  | 'roiOver10Years'
  | 'roi'
  | 'irrOver10Years'
  | 'beachTime'
  | 'timeToShoppingMall'
  | 'airportTime'
  | 'plan'
  | 'sizeSqm'
  | 'totalFloors'
  | 'priceTo'
  | 'numberOfBedrooms'
  | 'unitsFloor'
  | 'unitsNumber'
  | 'unitsPricePerMeter';

type TableComparisonProps = {
  estates: Array<Estate>;
};

export const TableComparison: FC<TableComparisonProps> = ({ estates }) => {
  const { formatMessage } = useIntl();
  const fields: Record<TKeys, string> = useMemo(
    () => ({
      // overallRating: formatMessage({ id: 'overallRating' }),
      // investmentSafety: formatMessage({ id: 'security' }),
      // locationRating: formatMessage({ id: 'locationRating' }),
      // investmentPotential: formatMessage({ id: 'invest_potential' }),
      // qualityOfLife: formatMessage({ id: 'comfort' }),
      priceFrom: formatMessage({ id: 'priceFrom' }),
      priceTo: formatMessage({ id: 'priceTo' }),
      pricePerSquareMeter: formatMessage({ id: 'pricePerSquareMeter' }),
      deliveryDate: formatMessage({ id: 'completion_date' }),
      roiOver10Years: formatMessage({ id: 'roiSummary' }),
      roi: formatMessage({ id: 'roi' }),
      irrOver10Years: formatMessage({ id: 'irr' }),
      beachTime: formatMessage({ id: 'beach_time_subway' }),
      timeToShoppingMall: formatMessage({ id: 'timeToShoppingMall' }),
      airportTime: formatMessage({ id: 'airport_time' }),
      plan: formatMessage({ id: 'plan' }),
      sizeSqm: formatMessage({ id: 'size_sqm' }),
      totalFloors: formatMessage({ id: 'total_floors' }),
      //
      numberOfBedrooms: formatMessage({ id: 'number_of_bedrooms' }),
      unitsFloor: formatMessage({ id: 'units.floor' }),
      unitsNumber: formatMessage({ id: 'units.number' }),
      unitsPrice: formatMessage({ id: 'units.price' }),
      unitsPricePerMeter: formatMessage({ id: 'units.pricePerMeter' }),
    }),
    [formatMessage]
  );
  const currency = localStorage.getItem('currency') || '$'
  const result: Partial<Record<TKeys, string[] | undefined>> = {
    // overallRating: extractNestedValuesOrFallback(estates, ['grade.main'], '9.0')?.map((rating) =>
    //   Number(rating).toFixed(1).replace('.', ',')
    // ),
    // investmentSafety: extractNestedValuesOrFallback(estates, ['grade.comfortOfLife'], '9.0')?.map(
    //   (rating) => Number(rating).toFixed(1).replace('.', ',')
    // ),
    // locationRating: extractNestedValuesOrFallback(estates, ['grade.projectLocation'], '9.0')?.map(
    //   (rating) => Number(rating).toFixed(1).replace('.', ',')
    // ),
    // investmentPotential: extractNestedValuesOrFallback(
    //   estates,
    //   ['grade.investmentPotential'],
    //   '9.0'
    // )?.map((rating) => Number(rating).toFixed(1).replace('.', ',')),
    // qualityOfLife: extractNestedValuesOrFallback(estates, ['grade.comfortOfLife'], '9.0')?.map(
    //   (rating) => Number(rating).toFixed(1).replace('.', ',')
    // ),
    priceFrom: extractNestedValuesOrFallback(estates, ['price.min'])?.map(
      (price) => `${currency}${formatNumber(price)}`
    ),
    priceTo: extractNestedValuesOrFallback(estates, ['price.max'])?.map(
      (price) => `${currency}${formatNumber(price)}`
    ), // priceMax
    pricePerSquareMeter: undefined,
    deliveryDate: extractNestedValuesOrFallback(estates, ['buildEndDate']),
    roiOver10Years: extractNestedValuesOrFallback(estates, ['profitability.roi'], '200')?.map(
      (text) => `${text}%`
    ),
    roi: extractNestedValuesOrFallback(estates, ['profitability.roiSummary'], '200')?.map(
      (text) => `${text}%`
    ),
    irrOver10Years: extractNestedValuesOrFallback(estates, ['profitability.irr'], '13')?.map(
      (text) => `${text}%`
    ),
    beachTime: extractNestedValuesOrFallback(
      estates,
      ['infrastructure.beachTime.car', 'estate.infrastructure.beachTime.walk'],
      '5'
    )?.map((text) => `${text} ${formatMessage({ id: 'min' })}`),
    timeToShoppingMall: extractNestedValuesOrFallback(
      estates,
      ['infrastructure.mallTime.car', 'infrastructure.mallTime.walk'],
      '30'
    )?.map((text) => `${text} ${formatMessage({ id: 'min' })}`),
    airportTime: extractNestedValuesOrFallback(
      estates,
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
        {estates.map((estate) => (
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
                  icon={<IconMapPinFilled />}
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
