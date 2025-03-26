import React, { FC, useState } from 'react';
import styles from './Rating.module.scss';
import { Info, VectorRating } from '@/shared/assets/icons';
import { Grade } from '@/widgets/Detail/api/detailApi';
import { InfoModal } from '@/widgets/Modal/InfoModal';

export const Rating: FC<Grade> = ({
  investmentPotential,
  investmentSecurity,
  main,
  projectLocation,
  comfortOfLife,
}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState<string>();
  const [children, setChildren] = useState<React.ReactNode>();
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  const handleSecurity = () => {
    setInfoTitle('Безопасность вложений');
    setInfoText(undefined);
    setChildren(
      <>
        Мы оцениваем десятки параметров, например:
        <br />
        — опыт застройщика,
        <br />
        — наличие разрешительной документации,
        <br />— динамика продаж.
      </>
    );
    handleOpenInfoModal();
  };

  const handleInvest = () => {
    setInfoTitle('Инвестиционный потенциал');
    setInfoText(undefined);
    setChildren(
      <>
        Мы оцениваем десятки параметров, например:
        <br />
        — доходность аренды с опорой на исторические данные,
        <br />
        — сроки окупаемости,
        <br />— прогнозируемый рост стоимости объекта.
      </>
    );
    handleOpenInfoModal();
  };

  const handleLocation = () => {
    setInfoTitle('Расположение объекта');
    setInfoText(undefined);
    setChildren(
      <>
        Мы оцениваем десятки параметров, например:
        <br />
        — престиж района,
        <br />— близость к важным объектам: пляжам, аэропорту, школам, магазинам и торговым центрам.
      </>
    );
    handleOpenInfoModal();
  };

  const handleComfort = () => {
    setInfoTitle('Комфорт жизни');
    setInfoText(undefined);
    setChildren(
      <>
        Мы оцениваем десятки параметров, например:
        <br />
        — дизайн,
        <br />
        — материалы,
        <br />
        — планировка,
        <br />
        — возможности для отдыха и работы,
        <br />— общее развитие инфраструктуры как внутри проекта, так и в районе рядом.
      </>
    );
    handleOpenInfoModal();
  };

  const openRatingInfo = () => {
    setInfoTitle('Что означает наша оценка объекта?');
    setInfoText(
      'Каждый объект недвижимости оценивается нами по 100+ параметрам, от цены за квадратный метр до высоты потолков или наличия детского клуба в пешей доступности. Мы выставляем каждому объекту общий рейтинг и оценки по четырем ключевым направлениям: безопасность вложений, инвестиционный потенциал, расположение объекта и комфорт жизни.'
    );
    setChildren(undefined);
    handleOpenInfoModal();
  };
  /*TODO: сделать попапы по клику на рейтинг*/

  return (
    <div>
      <h5 className={styles.info_icon}>
        Наша оценка объекта
        <div className={styles.icon} onClick={openRatingInfo}>
          <Info />
        </div>
      </h5>
      <div className={styles.rating}>
        {main && (
          <div className={styles.rating__item}>
            <span>Наша итоговая оценка</span>
            <span
              className={`${styles.rating__score} ${styles.rating__score_result}`}
              onClick={openRatingInfo}
            >
              {main.toPrecision(2)} <VectorRating />
            </span>
          </div>
        )}
        {investmentSecurity && (
          <div className={styles.rating__item}>
            <span>Безопасность вложений</span>
            <span className={styles.rating__score} onClick={handleSecurity}>
              {investmentSecurity.toPrecision(2)}
            </span>
          </div>
        )}
        {investmentPotential && (
          <div className={styles.rating__item}>
            <span>Инвестиционный потенциал</span>
            <span className={styles.rating__score} onClick={handleInvest}>
              {investmentPotential.toPrecision(2)}
            </span>
          </div>
        )}
        {projectLocation && (
          <div className={styles.rating__item}>
            <span>Расположение проекта</span>
            <span className={styles.rating__score} onClick={handleLocation}>
              {projectLocation.toPrecision(2)}
            </span>
          </div>
        )}
        {comfortOfLife && (
          <div className={styles.rating__item}>
            <span>Комфорт жизни</span>
            <span className={styles.rating__score} onClick={handleComfort}>
              {comfortOfLife.toPrecision(2)}
            </span>
          </div>
        )}
      </div>
      <InfoModal
        open={infoModal}
        onClose={handleCloseInfoModal}
        onOpen={handleOpenInfoModal}
        anchor="bottom"
        title={infoTitle}
        text={infoText}
        bottom={30}
        children={children}
      />
    </div>
  );
};
