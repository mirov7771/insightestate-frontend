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
import {isMobile} from 'react-device-detect';

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

    function copyTask() { const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Ссылка скопирована!')
    }

    console.log(isMobile)
  return (
    <div>
      {cSize > 0 ?
      <>
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
              <h1 className={isMobile ? styles.title_mobile : styles.title}>Почему инвесторы выбирают Пхукет?</h1>
              {clickable ? <Button onClick={copyTask}>Скопировать ссылку</Button> : <></>}
              <main className={isMobile ? styles.main_mobile : styles.main}>
                  {InfoCards.map((infoCard) => (
                      <InfoCard key={infoCard.id} {...infoCard} isMobile={isMobile}/>
                  ))}
              </main>
          </div>
          <div className={isMobile ? styles.wrap_blue_mobile : styles.wrap_blue}>
            <div className={isMobile ? styles.wrap_blue_inside_mobile : styles.wrap_blue_inside}>
            <h1 className={isMobile ? styles.title_blue_mobile : styles.title_blue}>
              Собрали для вас {cSize} {getName()}, отобрав их через нашу систему аналитики
            </h1>
              <p className={isMobile ? styles.p_blue_mobile : styles.p_blue}>
                  Мы используем комплексный подход к оценке инвестиционной привлекательности и выбору лучшего объекта для инвестиций
              </p>
              <main className={isMobile ? styles.main_mobile : styles.main}>
                  {AnalyzeSteps.map((infoCard) => (
                      <AnalyzeStepCard key={infoCard.id} {...infoCard} isMobile={isMobile} />
                  ))}
              </main>
            </div>
          </div>
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
            <h1 className={isMobile ? styles.title_mobile : styles.title}>Лучшие проекты исходя из ваших пожеланий</h1>
              {estateCollection ? <GradeTable {...estateCollection} clickable={clickable} isMobile={isMobile}/> : <></>}
          </div>
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
            <h1 className={isMobile ? styles.title_mobile : styles.title}>Сравнительная таблица</h1>
              {estateCollection ? <AnalyzeTable {...estateCollection} isMobile={isMobile}/> : <></>}
          </div>
      </> : (
          loaded ?
          <div>
              <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
                  <h4 className={isMobile ? styles.title_mobile : styles.title}>Для формирования оффера, добавьте объекты в подборку</h4>
              </div>
          </div> : <></>)
      }
    </div>
  );
};

export default OfferCollection;
