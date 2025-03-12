import React, {FC, useEffect, useState} from 'react';
import styles from './OfferCollection.module.scss';
import {AnalyzeSteps, InfoCards} from "@/shared/constants/constants";
import {InfoCard} from "@/entities/InfoCard/InfoCard";
import {AnalyzeStepCard} from "@/entities/AnalyzeStepCard/AnalyzeStepCard";
import {AnalyzeTable} from "@/entities/AnalyzeTable/AnalyzeTable";
import {AgentInfo, EstateCollection, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {GradeTable} from "@/entities/GradeTable/GradeTable";
import {useParams} from "react-router";
import {Button} from "@/shared/ui";
import {isMobile} from 'react-device-detect';
import {ButtonEmail, ButtonWhatsUp} from "@/shared/assets/icons";

const OfferCollection: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [estateCollection, setEstateCollection] = useState<EstateCollection>()
  const [cSize, setCSize] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)
  const clickable = localStorage.getItem('basicToken') !== null
        && localStorage.getItem('basicToken') !== undefined
        && localStorage.getItem('basicToken') !== ''
  const [agentInfo, setAgentInfo] = useState<AgentInfo>()

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

    useEffect(() => {
        estateCollectionApi.getAgentInfo(id!!).then((r) => {
            setAgentInfo(r.data)
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
          {clickable ?
              <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
                  <div className={isMobile ? styles.info_mobile : styles.info}>
                      <h1 className={isMobile ? styles.title_mobile : styles.title}>Формирование оффера</h1>
                      <p className={isMobile ? styles.p_black_mobile : styles.p_black}>
                          Информация под этим блоком является оффером для вашего клиента, каждый объект который вы добавляете появляется на этой странице. Чтобы отправить страницу клиенту нажмите <Button variant='secondary' className={styles.link} onClick={copyLink}>Скопировать ссылку</Button>
                      </p>
                  </div>
              </div> :
              <></>}
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
              <h1 className={isMobile ? styles.title_mobile : styles.title}>Почему инвесторы выбирают Пхукет?</h1>
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
          <div className={styles.socials_main}>
              <div className={isMobile ? styles.socials_mobile : styles.socials}>
                  {isMobile ? <h5>{agentInfo?.fio}<br/>{agentInfo?.mobileNumber}</h5> : <h5>{agentInfo?.fio} {agentInfo?.mobileNumber}</h5>}
                  <div className={styles.socials__messengers}>
                      <a href={`mailto:${agentInfo?.login}`}>
                          <ButtonEmail />
                      </a>
                  </div>
              </div>
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
