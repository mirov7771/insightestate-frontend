import { FC } from 'react';
import { Section } from '../Section';
import styles from './ApartmentLayouts.module.scss';
import { RoomLayouts } from '@/widgets/Detail/api/detailApi';
import { formatNumber } from '@/shared/utils';
import { useIntl } from 'react-intl';

export const ApartmentLayouts: FC<RoomLayouts & { estateId?: string }> = ({
  studio,
  one,
  two,
  three,
  four,
  five,
  villaTwo,
  villaThree,
  villaFour,
  villaFive,
}) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Section title={formatMessage({ id: 'layouts' })}>
        <div className={`${styles.item__header} ${styles.item}`}>
          <span>{formatMessage({ id: 'plan' })}</span>
          <span>{formatMessage({ id: 'size_sqm' })}</span>
          <span>{formatMessage({ id: 'price_range' })}</span>
        </div>
        {studio ? (
          <div className={styles.item}>
            <span>Студия</span>
            <span>
              {studio?.square?.min || studio?.square?.max} -{' '}
              {studio?.square?.max || studio?.square?.min}
            </span>
            <span>
              {formatNumber(studio?.price?.min || studio?.price?.max)} -{' '}
              {formatNumber(studio?.price?.max || studio?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {one ? (
          <div className={styles.item}>
            <span>1 {formatMessage({ id: 'bedroom' })}</span>
            <span>
              {one?.square?.min || one?.square?.max} - {one?.square?.max || one?.square?.min}
            </span>
            <span>
              {formatNumber(one?.price?.min || one?.price?.max)} -{' '}
              {formatNumber(one?.price?.max || one?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {two ? (
          <div className={styles.item}>
            <span>2 {formatMessage({ id: 'bedrooms' })}</span>
            <span>
              {two?.square?.min || two?.square?.max} - {two?.square?.max || two?.square?.min}
            </span>
            <span>
              {formatNumber(two?.price?.min || two?.price?.max)} -{' '}
              {formatNumber(two?.price?.max || two?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {three ? (
          <div className={styles.item}>
            <span>3 {formatMessage({ id: 'bedrooms' })}</span>
            <span>
              {three?.square?.min || three?.square?.max} -{' '}
              {three?.square?.max || three?.square?.min}
            </span>
            <span>
              {formatNumber(three?.price?.min || three?.price?.max)} -{' '}
              {formatNumber(three?.price?.max || three?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {four ? (
          <div className={styles.item}>
            <span>4 {formatMessage({ id: 'bedrooms' })}</span>
            <span>
              {four?.square?.min || four?.square?.max} - {four?.square?.max || four?.square?.min}
            </span>
            <span>
              {formatNumber(four?.price?.min || four?.price?.max)} -{' '}
              {formatNumber(four?.price?.max || four?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {five ? (
          <div className={styles.item}>
            <span>5 {formatMessage({ id: 'bedrooms2' })}</span>
            <span>
              {five?.square?.min || five?.square?.max} - {five?.square?.max || five?.square?.min}
            </span>
            <span>
              {formatNumber(five?.price?.min || five?.price?.max)} -{' '}
              {formatNumber(five?.price?.max || five?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {villaTwo ? (
          <div className={styles.item}>
            <span>
              {formatMessage({ id: 'villa' })} 2 {formatMessage({ id: 'bedrooms' })}
            </span>
            <span>
              {villaTwo?.square?.min || villaTwo?.square?.max} -{' '}
              {villaTwo?.square?.max || villaTwo?.square?.min}
            </span>
            <span>
              {formatNumber(villaTwo?.price?.min || villaTwo?.price?.max)} -{' '}
              {formatNumber(villaTwo?.price?.max || villaTwo?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {villaThree ? (
          <div className={styles.item}>
            <span>
              {formatMessage({ id: 'villa' })} 3 {formatMessage({ id: 'bedrooms' })}
            </span>
            <span>
              {villaThree?.square?.min || villaThree?.square?.max} -{' '}
              {villaThree?.square?.max || villaThree?.square?.min}
            </span>
            <span>
              {formatNumber(villaThree?.price?.min || villaThree?.price?.max)} -{' '}
              {formatNumber(villaThree?.price?.max || villaThree?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {villaFour ? (
          <div className={styles.item}>
            <span>
              {formatMessage({ id: 'villa' })} 4 {formatMessage({ id: 'bedrooms' })}
            </span>
            <span>
              {villaFour?.square?.min || villaFour?.square?.max} -{' '}
              {villaFour?.square?.max || villaFour?.square?.min}
            </span>
            <span>
              {formatNumber(villaFour?.price?.min || villaFour?.price?.max)} -{' '}
              {formatNumber(villaFour?.price?.max || villaFour?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
        {villaFive ? (
          <div className={styles.item}>
            <span>
              {formatMessage({ id: 'villa' })} 5 {formatMessage({ id: 'bedrooms2' })}
            </span>
            <span>
              {villaFive?.square?.min || villaFive?.square?.max} -{' '}
              {villaFive?.square?.max || villaFive?.square?.min}
            </span>
            <span>
              {formatNumber(villaFive?.price?.min || villaFive?.price?.max)} -{' '}
              {formatNumber(villaFive?.price?.max || villaFive?.price?.min)}
            </span>
          </div>
        ) : (
          <></>
        )}
      </Section>
    </>
  );
};
