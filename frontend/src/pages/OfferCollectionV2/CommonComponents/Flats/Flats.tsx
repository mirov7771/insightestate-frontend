import { FC } from 'react';
import styles from './Flats.module.scss';
import { Text } from '@/shared/ui';
import { RoomLayouts } from '@/widgets/Detail/api/detailApi';
import { useIntl } from 'react-intl';

const sortRoomLayouts = (layouts: RoomLayouts): RoomLayouts => {
  const desiredOrder: (keyof RoomLayouts)[] = [
    'studio',
    'one',
    'two',
    'three',
    'four',
    'five',
    'villaTwo',
    'villaThree',
    'villaFour',
    'villaFive',
  ];

  const sorted: RoomLayouts = {};

  for (const key of desiredOrder) {
    if (layouts[key] !== undefined) {
      sorted[key] = layouts[key];
    }
  }

  return sorted;
};

export const Flats: FC<RoomLayouts & { short?: boolean }> = (props) => {
  const { formatMessage } = useIntl();
  const sorted = sortRoomLayouts(props);
  const currency = localStorage.getItem('currency') || '฿'
  return Object.entries(sorted).length ? (
    <>
      {props.short ? (
        <section className={styles.flats_short}>
          {Object.entries(sorted).map(([key, layout], index, targetArray) => (
            <>
              <div className={styles.flat_short}>
                <Text variant="body1" className={styles.flat_short__name}>
                  {formatMessage({ id: `offerCollection.${key}` })},{' '}
                  {(layout.square?.min || 30) + ''} - {(layout.square?.max || 100) + ''}м2
                </Text>
                <Text variant="heading5" className={styles.flat_short__price}>
                  {currency}{layout.price?.min} - {currency}{layout.price?.max}
                </Text>
              </div>
              {index + 1 < targetArray.length ? <div className={styles.divider} /> : ''}
            </>
          ))}
        </section>
      ) : (
        <section className={styles.flats}>
          {Object.entries(sorted).map(([key, layout], index, targetArray) => (
            <>
              <div className={styles.flat}>
                <Text variant="body1" className={styles.flat__name}>
                  {formatMessage({ id: `offerCollection.${key}` })},{' '}
                  {(layout.square?.min || 30) + ''} - {(layout.square?.max || 100) + ''}м2
                </Text>
                <Text variant="heading5" className={styles.flat__price}>
                  {currency}{layout.price?.min} - {currency}{layout.price?.max}
                </Text>
              </div>
              {index + 1 < targetArray.length ? <div className={styles.divider} /> : ''}
            </>
          ))}
        </section>
      )}
    </>
  ) : null;
};
