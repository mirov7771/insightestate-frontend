import React, {FC, useEffect, useState} from 'react';
import styles from './OfferCollection.module.scss';
import {AnalyzeSteps, InfoCards} from "@/shared/constants/constants";
import {InfoCard} from "@/entities/InfoCard/InfoCard";
import {AnalyzeStepCard} from "@/entities/AnalyzeStepCard/AnalyzeStepCard";
import {AnalyzeTable} from "@/entities/AnalyzeTable/AnalyzeTable";
import {EstateCollection, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {GradeTable} from "@/entities/GradeTable/GradeTable";
import {useParams} from "react-router";
import {Button} from "@/shared/ui";

const OfferCollection: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [estateCollection, setEstateCollection] = useState<EstateCollection>()
  const [cSize, setCSize] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const clickable = localStorage.getItem('basicToken') !== null
        && localStorage.getItem('basicToken') !== undefined
        && localStorage.getItem('basicToken') !== ''
  useEffect(() => {
      estateCollectionApi.getEstateCollection(id!!).then((r) => {
          setEstateCollection(r.data.items[0])
          setCSize(r.data.items[0]?.estates?.length)
          setLoaded(true)
      }).catch(e => {
          console.log(e)
          setLoaded(true)
      })
  }, []);

  function getName(): string {
      if (cSize === 1)
          return "объект"
      if (cSize < 5)
          return "объекта"
      return "объектов"
  }

  const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Ссылка скопирована!')
        })
  }

  return (
    <div>
      {cSize > 0 ?
      <>
          <div className={styles.wrap}>
              <h1 className={styles.title}>Почему инвесторы выбирают Пхукет?</h1>
              {clickable ? <Button onClick={copyLink}>Скопировать ссылку</Button> : <></>}
              <main className={styles.main}>
                  {InfoCards.map((infoCard) => (
                      <InfoCard key={infoCard.id} {...infoCard} />
                  ))}
              </main>
          </div>
          <div className={styles.wrap_blue}>
            <div className={styles.wrap_blue_inside}>
            <h1 className={styles.title_blue}>
              Собрали для вас {cSize} {getName()}, отобрав их через нашу систему аналитики
            </h1>
              <p className={styles.p_blue}>
                  Мы используем комплексный подход к оценке инвестиционной привлекательности и выбору лучшего объекта для инвестиций
              </p>
              <main className={styles.main}>
                  {AnalyzeSteps.map((infoCard) => (
                      <AnalyzeStepCard key={infoCard.id} {...infoCard} />
                  ))}
              </main>
            </div>
          </div>
          <div className={styles.wrap}>
            <h1 className={styles.title}>Лучшие проекты исходя из ваших пожеланий</h1>
              {estateCollection ? <GradeTable {...estateCollection} clickable={clickable}/> : <></>}
          </div>
          <div className={styles.wrap}>
            <h1 className={styles.title}>Сравнительная таблица</h1>
              {estateCollection ? <AnalyzeTable {...estateCollection} /> : <></>}
          </div>
      </> : (
          loaded ?
          <div>
              <div className={styles.wrap}>
                  <h4 className={styles.title}>Для формирования оффера, добавьте объекты в подборку</h4>
              </div>
          </div> : <></>)
      }
    </div>
  );
};

export default OfferCollection;
