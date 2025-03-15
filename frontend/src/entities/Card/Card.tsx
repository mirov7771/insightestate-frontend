import { FC } from 'react';
import styles from './Card.module.scss';
import { Beach, VectorRating } from '@/shared/assets/icons';
import { Estate } from '@/widgets/Filter/api/filterApi';
import {Button} from "@/shared/ui";
import {estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

export const DEFAULT_IMG =
  'https://cdn.prod.website-files.com/672b5797ac1486cdfc5122ac/67aa547c02740c42abf52609_675f0debfa47fa6400a3c65a_Exterior_03.jpeg';

type CardProps = Estate;

export const Card: FC<CardProps & {
  clickable: boolean,
  collectionId?: string,
  token?: string
}> = ({
  id,
  level,
  beachTravelTime,
  grade,
  buildEndDate,
  priceMin,
  facilityImages,
  interiorImages,
  exteriorImages,
  name,
  clickable,
  collectionId,
  token
}) => {
  const img = exteriorImages?.[0] || facilityImages?.[0] || interiorImages?.[0] || DEFAULT_IMG;

  const deleteFromCollection = () => {
    if (collectionId) {
      estateCollectionApi.deleteFromCollection(token!!, collectionId, id!!)
          .then((r) => {
            alert("Объект удален.\n\nОбъект удален из подборки, но вы можете его вернуть нажав на кнопку «Добавить объект»")
            console.log(r)
          })
          .catch((e) => console.log(e))
          .finally(() => window.location.reload())
    }
  }

  return (
    <div className={styles.card}>
      {clickable ?
          <a href={`/property/${id}`} className={styles.card__image}>
              <img src={img} alt="" />
              <div className={styles.card__rating}>
                  {grade} <VectorRating />
              </div>
              <div className={styles.card__details}>
                  {buildEndDate !== '-' && (
                      <span className={styles.card__details__item}>{buildEndDate}</span>
                  )}
                  <span className={styles.card__details__item}>{level}</span>
                  <span className={styles.card__details__item}>
            <Beach /> {beachTravelTime} мин
          </span>
              </div>
          </a> :
          <a href={`/property/${id}`} target='_blank' className={styles.card__image}>
              <img src={img} alt="" />
              <div className={styles.card__rating}>
                  {grade} <VectorRating />
              </div>
              <div className={styles.card__details}>
                  {buildEndDate !== '-' && (
                      <span className={styles.card__details__item}>{buildEndDate}</span>
                  )}
                  <span className={styles.card__details__item}>{level}</span>
                  <span className={styles.card__details__item}>
            <Beach /> {beachTravelTime} мин
          </span>
              </div>
          </a>
      }
      {clickable ?
          <a href={`/property/${id}`} className={styles.card__title}>
              {name}
          </a> :
          <a href={`/property/${id}`} target='_blank' className={styles.card__title}>
              {name}
          </a>
      }
      <p>
        <strong>Стоимость от</strong>{' '}
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(priceMin)}
      </p>
      {
        collectionId ?
          <Button
              onClick={deleteFromCollection}
          >
            Удалить
          </Button> : <></>
      }
      {/*<p>
        Доходность до <strong>136%</strong> за 10 лет
      </p>*/}
    </div>
  );
};
