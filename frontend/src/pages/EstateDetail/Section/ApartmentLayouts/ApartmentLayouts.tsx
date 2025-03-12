import React, {FC, useEffect, useState} from 'react';
import { Section } from '../Section';
import { Button } from '@/shared/ui';
import styles from './ApartmentLayouts.module.scss';
import { RoomLayouts } from '@/widgets/Detail/api/detailApi';
import {Estate, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";

export const ApartmentLayouts: FC<RoomLayouts & {estateId?: string}> = ({ one, two, three, estateId }) => {
  const [collectionId, setCollectionId] = useState<string>('')
  const [inCollection, setInCollection] = useState<boolean>(false)
  const token = localStorage.getItem('basicToken')
  useEffect(() => {
    estateCollectionApi.getEstateCollection(token!!).then((r) => {
      setCollectionId(r.data.items[0]?.id)
      setInCollection(isInCollection(r.data.items[0]?.estates))
    }).catch((e) => console.log(e))
  }, []);

  const addToCollection = () => {
    if (!collectionId) {
      estateCollectionApi.createCollection(token!!).then((r) => {
        setCollectionId(r.data.id)
        addItemToCollection(r.data.id, estateId!!)
      }).catch((e) => console.log(e))
    } else {
      addItemToCollection(collectionId, estateId!!)
    }
  }

  const addItemToCollection = (id: string, estateId: string)=> {
    estateCollectionApi.addToCollection(token!!, id, estateId)
        .then((r) => {
          alert("Объект добавлен.\n\nОбъект успешно добавлен в подборку, перейдите в раздел «Сформировать оффер» чтобы посмотреть все объекты.")
          setInCollection(true)
          console.log(r)
        })
        .catch((e) => console.log(e))
  }

  const deleteFromCollection = () => {
    if (collectionId) {
      estateCollectionApi.deleteFromCollection(token!!, collectionId, estateId!!)
          .then((r) => {
            alert("Объект удален.\n\nОбъект удален из подборки, но вы можете его вернуть нажав на кнопку «Добавить объект»")
            setInCollection(false)
            console.log(r)
          })
          .catch((e) => console.log(e))
    }
  }

  function isInCollection(estate: Estate[]): boolean {
    if (!estate || estate.length === 0)
      return false
    const e = estate.find((value) => value.id === estateId)
    console.log("Estate", e)
    return e?.id !== null && e?.id !== undefined
  }

  console.log(collectionId)
  return (
    <Section title="Доступные планировки" rightSide={
      inCollection ? <Button disabled={token === null || token === undefined || token === ''} onClick={deleteFromCollection}>Удалить из подборки</Button> : <Button disabled={token === null || token === undefined || token === ''} onClick={addToCollection}>Добавить в подборку</Button>
      }
    >
      <div>
        <div className={`${styles.item__header} ${styles.item}`}>
          <span>Планировка</span>
          <span>Площадь, м2</span>
          <span>Стоимость, $</span>
        </div>
        <div className={styles.item}>
          <span>1 спальня</span>
          <span>
            {one?.square?.min} - {one?.square?.max}
          </span>
          <span>
            {one?.pricePerMeter?.min} - {one?.pricePerMeter?.max}
          </span>
        </div>
        <div className={styles.item}>
          <span>2 спальни</span>
          <span>
            {two?.square?.min} - {two?.square?.max}
          </span>
          <span>
            {two?.pricePerMeter?.min} - {two?.pricePerMeter?.max}
          </span>
        </div>
        <div className={styles.item}>
          <span>3 спальни</span>
          <span>
            {three?.square?.min} - {two?.square?.max}
          </span>
          <span>
            {three?.pricePerMeter?.min} - {two?.pricePerMeter?.max}
          </span>
        </div>
      </div>
    </Section>
  );
};
