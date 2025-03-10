import { FC } from 'react';
import styles from './OfferCollection.module.scss';
import {AnalyzeSteps, InfoCards} from "@/shared/constants/constants";
import {InfoCard} from "@/entities/InfoCard/InfoCard";
import {AnalyzeStepCard} from "@/entities/AnalyzeStepCard/AnalyzeStepCard";
import {AnalyzeTable} from "@/entities/AnalyzeTable/AnalyzeTable";

const OfferCollection: FC = () => {
  return (
    <div>
      <div className={styles.wrap}>
          <h1 className={styles.title}>Почему инвесторы выбирают Пхукет?</h1>
          <main className={styles.main}>
              {InfoCards.map((infoCard) => (
                  <InfoCard key={infoCard.id} {...infoCard} />
              ))}
          </main>
      </div>
      <div className={styles.wrap_blue}>
        <div className={styles.wrap_blue_inside}>
        <h1 className={styles.title_blue}>
          Собрали для вас 99 объектов, отобрав их через нашу систему аналитики
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
      </div>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Сравнительная таблица</h1>
        <AnalyzeTable />
      </div>
    </div>
  );
};

export default OfferCollection;
