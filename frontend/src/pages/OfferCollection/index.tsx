import { FC } from 'react';
import styles from './OfferCollection.module.scss';
import {InfoCards} from "@/shared/constants/constants";
import {InfoCard} from "@/entities/InfoCard/InfoCard";

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
        <h1 className={styles.title_blue}>
          Собрали для вас 99 объектов, отобрав их через нашу систему аналитики
        </h1>
      </div>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Лучшие проекты исходя из ваших пожеланий</h1>
      </div>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Сравнительная таблица</h1>
      </div>
    </div>
  );
};

export default OfferCollection;
