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

  return Object.entries(sorted).length ? (
    <section className={styles.flats}>
      {Object.entries(sorted).map(([key, layout], index, targetArray) => (
        <>
          <div className={styles.flat}>
            <Text variant="body1" className={styles.flat__name}>
              {formatMessage({ id: `offerCollection.${key}` })}, {layout.square?.min + ''} -{' '}
              {layout.square?.max + ''}м2
            </Text>
            <Text variant="heading5" className={styles.flat__price}>
              ${layout.price?.min} - ${layout.price?.max}
            </Text>
          </div>
          {index + 1 < targetArray.length ? <div className={styles.divider} /> : ''}
        </>
      ))}
    </section>
  ) : null;
};
