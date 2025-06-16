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
    'villaFive',
    'villaFour',
    'villaThree',
  ];

  const sorted: RoomLayouts = {};

  for (const key of desiredOrder) {
    if (layouts[key] !== undefined) {
      sorted[key] = layouts[key];
    }
  }

  return sorted;
};

export const Flats: FC<RoomLayouts> = (props) => {
  const { formatMessage } = useIntl();
  const sorted = sortRoomLayouts(props);

  const formatPrice = (price: string | undefined): string | undefined => {
    if (!price) {
      return price;
    }
    const p = price;
    if (p.indexOf(',') != -1) {
      return p.split(',')[0];
    }
    return p;
  }

  return Object.entries(sorted).length ? (
    <section className={styles.flats}>
      {Object.entries(sorted).map(([key, layout], index, targetArray) => (
        <>
          <div className={styles.flat}>
            <Text variant="body1" className={styles.flat__name}>
              {formatMessage({ id: `offerCollection.${key}` })}, {formatPrice(layout.square?.min + '')} -{' '}
              {formatPrice(layout.square?.max + '')}м2
            </Text>
            <Text variant="heading4" className={styles.flat__price}>
              ${formatPrice(layout.price?.min?.toLocaleString('ru-RU'))} - ${formatPrice(layout.price?.max?.toLocaleString('ru-RU'))}
            </Text>
          </div>
          {index + 1 < targetArray.length ? <div className={styles.divider} /> : ''}
        </>
      ))}
    </section>
  ) : null;
};
