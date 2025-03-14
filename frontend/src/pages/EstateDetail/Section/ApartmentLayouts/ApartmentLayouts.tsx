import React, {FC, useEffect, useState} from 'react';
import { Section } from '../Section';
import { Button } from '@/shared/ui';
import styles from './ApartmentLayouts.module.scss';
import { RoomLayouts } from '@/widgets/Detail/api/detailApi';
import {Estate, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {BaseUserModal} from "@/widgets/Modal/BaseUserModal";

export const ApartmentLayouts: FC<RoomLayouts & {estateId?: string, id: string, name: string}> = ({
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
  estateId,
  id,
  name
}) => {
  const [collectionId, setCollectionId] = useState<string>('')
  const [inCollection, setInCollection] = useState<boolean>(false)
  const token = localStorage.getItem('basicToken')
  const [baseUserModal, setBaseUserModal] = useState(false)
  const handleOpenBaseUserModal = () => {
    setBaseUserModal(true)
  }

  const handleCloseBaseUserModal = () => {
    setBaseUserModal(false)
  }
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
    <>
    <Section title="Доступные планировки" rightSide={
      <>
      {inCollection ? <Button disabled={token === null || token === undefined || token === ''} onClick={deleteFromCollection}>Удалить из подборки</Button> : <Button disabled={token === null || token === undefined || token === ''} onClick={addToCollection}>Добавить в подборку</Button>}
        <Button
            disabled={token === null || token === undefined || token === ''}
            onClick={handleOpenBaseUserModal}>
          Помощь с клиентом
        </Button>
      </>
      }
    >
      <div>
        <div className={`${styles.item__header} ${styles.item}`}>
          <span>Планировка</span>
          <span>Площадь, м2</span>
          <span>Стоимость, $</span>
        </div>
        {studio ?
            <div className={styles.item}>
              <span>Студия</span>
              <span>
            {studio?.square?.min || studio?.square?.max} - {studio?.square?.max || studio?.square?.min}
          </span>
              <span>
            {studio?.pricePerMeter?.min || studio?.pricePerMeter?.max} - {studio?.pricePerMeter?.max || studio?.pricePerMeter?.min}
          </span>
            </div> : <></>}
        {one ?
            <div className={styles.item}>
              <span>1 спальня</span>
              <span>
            {one?.square?.min || one?.square?.max} - {one?.square?.max || one?.square?.min}
          </span>
              <span>
            {one?.pricePerMeter?.min || one?.pricePerMeter?.max} - {one?.pricePerMeter?.max || one?.pricePerMeter?.min}
          </span>
            </div> : <></>}
        {two ?
        <div className={styles.item}>
          <span>2 спальни</span>
          <span>
            {two?.square?.min || two?.square?.max} - {two?.square?.max || two?.square?.min}
          </span>
          <span>
            {two?.pricePerMeter?.min || two?.pricePerMeter?.max} - {two?.pricePerMeter?.max || two?.pricePerMeter?.min}
          </span>
        </div>
          : <></>}
        {three ?
        <div className={styles.item}>
          <span>3 спальни</span>
          <span>
            {three?.square?.min || three?.square?.max} - {three?.square?.max || three?.square?.min}
          </span>
          <span>
            {three?.pricePerMeter?.min || three?.pricePerMeter?.max} - {three?.pricePerMeter?.max || three?.pricePerMeter?.min}
          </span>
        </div>
            : <></>}
        {four ?
            <div className={styles.item}>
              <span>4 спальни</span>
              <span>
            {four?.square?.min || four?.square?.max} - {four?.square?.max || four?.square?.min}
          </span>
              <span>
            {four?.pricePerMeter?.min || four?.pricePerMeter?.max} - {four?.pricePerMeter?.max || four?.pricePerMeter?.min}
          </span>
            </div>
            : <></>}
        {five ?
            <div className={styles.item}>
              <span>5 спален</span>
              <span>
            {five?.square?.min || five?.square?.max} - {five?.square?.max || five?.square?.min}
          </span>
              <span>
            {five?.pricePerMeter?.min || five?.pricePerMeter?.max} - {five?.pricePerMeter?.max || five?.pricePerMeter?.min}
          </span>
            </div>
            : <></>}
        {villaTwo ?
            <div className={styles.item}>
              <span>Вилла 2 спальни</span>
              <span>
            {villaTwo?.square?.min || villaTwo?.square?.max} - {villaTwo?.square?.max || villaTwo?.square?.min}
          </span>
              <span>
            {villaTwo?.pricePerMeter?.min || villaTwo?.pricePerMeter?.max} - {villaTwo?.pricePerMeter?.max || villaTwo?.pricePerMeter?.min}
          </span>
            </div>
            : <></>}
        {villaThree ?
            <div className={styles.item}>
              <span>Вилла 3 спальни</span>
              <span>
            {villaThree?.square?.min || villaThree?.square?.max} - {villaThree?.square?.max || villaThree?.square?.min}
          </span>
              <span>
            {villaThree?.pricePerMeter?.min || villaThree?.pricePerMeter?.max} - {villaThree?.pricePerMeter?.max || villaThree?.pricePerMeter?.min}
          </span>
            </div>
            : <></>}
        {villaFour ?
        <div className={styles.item}>
          <span>Вилла 4 спальни</span>
          <span>
            {villaFour?.square?.min || villaFour?.square?.max} - {villaFour?.square?.max || villaFour?.square?.min}
          </span>
          <span>
            {villaFour?.pricePerMeter?.min || villaFour?.pricePerMeter?.max} - {villaFour?.pricePerMeter?.max || villaFour?.pricePerMeter?.min}
          </span>
        </div>
            : <></>}
        {villaFive ?
            <div className={styles.item}>
              <span>Вилла 5 спален</span>
              <span>
            {villaFive?.square?.min || villaFive?.square?.max} - {villaFive?.square?.max || villaFive?.square?.min}
          </span>
              <span>
            {villaFive?.pricePerMeter?.min || villaFive?.pricePerMeter?.max} - {villaFive?.pricePerMeter?.max || villaFive?.pricePerMeter?.min}
          </span>
            </div>
            : <></>}
      </div>
    </Section>
      <BaseUserModal
          open={baseUserModal}
          onClose={handleCloseBaseUserModal}
          onOpen={handleOpenBaseUserModal}
          anchor='bottom'
          id={id}
          object={name}
          token={token!!}
      />
      </>
  );
};
