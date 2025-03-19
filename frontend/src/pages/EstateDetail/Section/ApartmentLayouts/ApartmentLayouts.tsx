import React, { FC } from 'react';
import { Section } from '../Section';
import styles from './ApartmentLayouts.module.scss';
import { RoomLayouts } from '@/widgets/Detail/api/detailApi';

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
  return (
    <>
      <Section title="Доступные планировки">
        <div>
          <div className={`${styles.item__header} ${styles.item}`}>
            <span>Планировка</span>
            <span>Площадь, м2</span>
            <span>Стоимость, $</span>
          </div>
          {studio ? (
            <div className={styles.item}>
              <span>Студия</span>
              <span>
                {studio?.square?.min || studio?.square?.max} -{' '}
                {studio?.square?.max || studio?.square?.min}
              </span>
              <span>
                {studio?.price?.min || studio?.price?.max} -{' '}
                {studio?.price?.max || studio?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {one ? (
            <div className={styles.item}>
              <span>1 спальня</span>
              <span>
                {one?.square?.min || one?.square?.max} - {one?.square?.max || one?.square?.min}
              </span>
              <span>
                {one?.price?.min || one?.price?.max} -{' '}
                {one?.price?.max || one?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {two ? (
            <div className={styles.item}>
              <span>2 спальни</span>
              <span>
                {two?.square?.min || two?.square?.max} - {two?.square?.max || two?.square?.min}
              </span>
              <span>
                {two?.price?.min || two?.price?.max} -{' '}
                {two?.price?.max || two?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {three ? (
            <div className={styles.item}>
              <span>3 спальни</span>
              <span>
                {three?.square?.min || three?.square?.max} -{' '}
                {three?.square?.max || three?.square?.min}
              </span>
              <span>
                {three?.price?.min || three?.price?.max} -{' '}
                {three?.price?.max || three?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {four ? (
            <div className={styles.item}>
              <span>4 спальни</span>
              <span>
                {four?.square?.min || four?.square?.max} - {four?.square?.max || four?.square?.min}
              </span>
              <span>
                {four?.price?.min || four?.price?.max} -{' '}
                {four?.price?.max || four?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {five ? (
            <div className={styles.item}>
              <span>5 спален</span>
              <span>
                {five?.square?.min || five?.square?.max} - {five?.square?.max || five?.square?.min}
              </span>
              <span>
                {five?.price?.min || five?.price?.max} -{' '}
                {five?.price?.max || five?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {villaTwo ? (
            <div className={styles.item}>
              <span>Вилла 2 спальни</span>
              <span>
                {villaTwo?.square?.min || villaTwo?.square?.max} -{' '}
                {villaTwo?.square?.max || villaTwo?.square?.min}
              </span>
              <span>
                {villaTwo?.price?.min || villaTwo?.price?.max} -{' '}
                {villaTwo?.price?.max || villaTwo?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {villaThree ? (
            <div className={styles.item}>
              <span>Вилла 3 спальни</span>
              <span>
                {villaThree?.square?.min || villaThree?.square?.max} -{' '}
                {villaThree?.square?.max || villaThree?.square?.min}
              </span>
              <span>
                {villaThree?.price?.min || villaThree?.price?.max} -{' '}
                {villaThree?.price?.max || villaThree?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {villaFour ? (
            <div className={styles.item}>
              <span>Вилла 4 спальни</span>
              <span>
                {villaFour?.square?.min || villaFour?.square?.max} -{' '}
                {villaFour?.square?.max || villaFour?.square?.min}
              </span>
              <span>
                {villaFour?.price?.min || villaFour?.price?.max} -{' '}
                {villaFour?.price?.max || villaFour?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
          {villaFive ? (
            <div className={styles.item}>
              <span>Вилла 5 спален</span>
              <span>
                {villaFive?.square?.min || villaFive?.square?.max} -{' '}
                {villaFive?.square?.max || villaFive?.square?.min}
              </span>
              <span>
                {villaFive?.price?.min || villaFive?.price?.max} -{' '}
                {villaFive?.price?.max || villaFive?.price?.min}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Section>
    </>
  );
};
