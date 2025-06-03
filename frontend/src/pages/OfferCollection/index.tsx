import { FC, useEffect, useState } from 'react';
import styles from './OfferCollection.module.scss';
import { AnalyzeSteps, InfoCards } from '@/shared/constants/constants';
import { InfoCard } from '@/entities/InfoCard/InfoCard';
import { AnalyzeStepCard } from '@/entities/AnalyzeStepCard/AnalyzeStepCard';
import { AnalyzeTable } from '@/entities/AnalyzeTable/AnalyzeTable';
import {
  AgentInfo,
  EstateCollection,
  estateCollectionApi,
} from '@/widgets/EstateCollection/api/estateCollectionApi';
import { GradeTable } from '@/entities/GradeTable/GradeTable';
import { useParams, useSearchParams } from 'react-router';
import { Button } from '@/shared/ui';
import { isMobile } from 'react-device-detect';
import { BlackWhatsApp, ButtonEmail, ButtonWhatsUp, TelegramBlack } from '@/shared/assets/icons';
import { InfoModal } from '@/shared/ui/modals';

const OfferCollection: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [estateCollection, setEstateCollection] = useState<EstateCollection>();
  const [cSize, setCSize] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const token = localStorage.getItem('basicToken');
  const clickable = !!token;
  const [agentInfo, setAgentInfo] = useState<AgentInfo>();
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState('');
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  useEffect(() => {
    const token = searchParams.get('token');

    estateCollectionApi
      .getEstateCollection(token!!)
      .then((r) => {
        const coll = findById(r.data.items, id!!);

        setEstateCollection(coll);
        setCSize(coll?.estates?.length || 0);
        setLoaded(true);
      })
      .catch((e) => {
        console.log(e);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    const token = searchParams.get('token');

    estateCollectionApi
      .getAgentInfo(token!!)
      .then((r) => {
        setAgentInfo(r.data);
      })
      .catch((e) => console.log(e));
  }, []);

  function findById(list: EstateCollection[], id: string) {
    return list.findLast((value) => value.id === id);
  }

  function getName(): string {
    if (cSize === 1) return 'объект';
    if (cSize < 5) return 'объекта';
    return 'объектов';
  }

  function copyTask() {
    const el = document.createElement('input');

    el.value = window.location.href;
    if (isMobile) {
      el.value = el.value.replace('offer-collection/', 'cl/');
    }
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setInfoTitle('Ссылка скопирована');
    setInfoText('Вы можете делится данной ссылкой с клиентами');
    handleOpenInfoModal();
  }

  console.log(isMobile);
  return (
    <div>
      {cSize > 0 ? (
        <>
          {clickable ? (
            <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
              <div className={isMobile ? styles.info_mobile : styles.info}>
                <h1 className={isMobile ? styles.title_mobile : styles.title}>
                  Формирование оффера
                </h1>
                <p className={isMobile ? styles.p_black_mobile : styles.p_black}>
                  Информация под этим блоком является оффером для вашего клиента, каждый объект
                  который вы добавляете появляется на этой странице. Чтобы отправить страницу
                  клиенту нажмите{' '}
                  <Button variant="secondary" className={styles.link} onClick={copyTask}>
                    Скопировать ссылку
                  </Button>
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
            <h1 className={isMobile ? styles.title_mobile : styles.title}>
              Почему инвесторы выбирают Пхукет?
            </h1>
            <main className={isMobile ? styles.main_mobile : styles.main}>
              {InfoCards.map((infoCard) => (
                <InfoCard key={infoCard.id} {...infoCard} isMobile={isMobile} />
              ))}
            </main>
          </div>
          <div className={isMobile ? styles.wrap_blue_mobile : styles.wrap_blue}>
            <div className={isMobile ? styles.wrap_blue_inside_mobile : styles.wrap_blue_inside}>
              <h1 className={isMobile ? styles.title_blue_mobile : styles.title_blue}>
                Собрали для вас {cSize} {getName()}, отобрав их через нашу систему аналитики
              </h1>
              <p className={isMobile ? styles.p_blue_mobile : styles.p_blue}>
                Мы используем комплексный подход к оценке инвестиционной привлекательности и выбору
                лучшего объекта для инвестиций
              </p>
              <main className={isMobile ? styles.main_mobile : styles.main}>
                {AnalyzeSteps.map((infoCard) => (
                  <AnalyzeStepCard key={infoCard.id} {...infoCard} isMobile={isMobile} />
                ))}
              </main>
            </div>
          </div>
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
            <h1 className={isMobile ? styles.title_mobile : styles.title}>
              Лучшие проекты исходя из ваших пожеланий
            </h1>
            {estateCollection ? (
              <GradeTable
                {...estateCollection}
                clickable={clickable}
                isMobile={isMobile}
                collectionId={clickable ? estateCollection.id : undefined}
                token={token || undefined}
              />
            ) : (
              <></>
            )}
          </div>
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
            <h1 className={isMobile ? styles.title_mobile : styles.title}>Сравнительная таблица</h1>
            {estateCollection ? <AnalyzeTable {...estateCollection} isMobile={isMobile} /> : <></>}
          </div>
          <div className={styles.socials_main}>
            <div className={isMobile ? styles.socials_mobile : styles.socials}>
              {isMobile ? (
                <>
                  <h5>
                    {agentInfo?.fio}
                    <br />
                    {agentInfo?.mobileNumber}
                  </h5>
                  {agentInfo?.whatsUp || agentInfo?.tgName ? (
                    <div className={styles.messangers}>
                      {agentInfo?.whatsUp ? (
                        <a
                          href={`https://wa.me/${agentInfo?.whatsUp}`}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.messanger}
                        >
                          <BlackWhatsApp />
                        </a>
                      ) : (
                        <></>
                      )}
                      {agentInfo?.tgName ? (
                        <a
                          href={`https://t.me/${agentInfo?.tgName}`}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.messanger}
                        >
                          <TelegramBlack />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  <h5>{agentInfo?.fio}</h5>
                  {agentInfo?.whatsUp || agentInfo?.tgName ? (
                    <div className={styles.messangers}>
                      {agentInfo?.whatsUp ? (
                        <a
                          href={`https://wa.me/${agentInfo?.whatsUp}`}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.messanger}
                        >
                          <BlackWhatsApp />
                        </a>
                      ) : (
                        <></>
                      )}
                      {agentInfo?.tgName ? (
                        <a
                          href={`https://t.me/${agentInfo?.tgName}`}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.messanger}
                        >
                          <TelegramBlack />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                  <p>{agentInfo?.mobileNumber}</p>
                </>
              )}
              <div className={styles.socials__messengers}>
                <a href={`mailto:${agentInfo?.login}`}>
                  <ButtonEmail />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : loaded ? (
        <div>
          <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
            <h4 className={isMobile ? styles.title_mobile : styles.title}>
              Для формирования оффера, добавьте объекты в подборку
            </h4>
          </div>
        </div>
      ) : (
        <></>
      )}
      <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
    </div>
  );
};

export default OfferCollection;
