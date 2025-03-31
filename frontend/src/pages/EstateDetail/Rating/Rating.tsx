import React, { FC, useState } from 'react';
import styles from './Rating.module.scss';
import { Info, VectorRating } from '@/shared/assets/icons';
import { Grade } from '@/widgets/Detail/api/detailApi';
import { InfoModal } from '@/widgets/Modal/InfoModal';
import { localField } from '@/i18n/localField';

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
    setInfoTitle(localField('security'));
    setInfoText(undefined);
    setChildren(
      <>
          {localField('info_title')}
        <br />
        — опыт застройщика,
        <br />
        — наличие разрешительной документации,
        <br />
        — динамика продаж.
      </>
    );
    handleOpenInfoModal();
  };

  const handleInvest = () => {
    setInfoTitle(localField('invest_potential'));
    setInfoText(undefined);
    setChildren(
      <>
          {localField('info_title')}
        <br />
        — доходность аренды с опорой на исторические данные,
        <br />
        — сроки окупаемости,
        <br />
        — прогнозируемый рост стоимости объекта.
      </>
    );
    handleOpenInfoModal();
  };

  const handleLocation = () => {
    setInfoTitle(localField('project_location'));
    setInfoText(undefined);
    setChildren(
      <>
          {localField('info_title')}
        <br />
        — престиж района,
        <br />
        — близость к важным объектам: пляжам, аэропорту, школам, магазинам и торговым центрам.
      </>
    );
    handleOpenInfoModal();
  };

  const handleComfort = () => {
    setInfoTitle(localField('comfort'));
    setInfoText(undefined);
    setChildren(
      <>
          {localField('info_title')}
        <br />
        — дизайн,
        <br />
        — материалы,
        <br />
        — планировка,
        <br />
        — возможности для отдыха и работы,
        <br />
        — общее развитие инфраструктуры как внутри проекта, так и в районе рядом.
      </>
    );
    handleOpenInfoModal();
  };

  const openRatingInfo = () => {
    setInfoTitle(localField('object_info_title'));
    setInfoText(localField('object_info_message'));
    setChildren(undefined);
    handleOpenInfoModal();
  };

  return (
    <div>
      <h5 className={styles.info_icon}>
          {localField('our_rating')}
        <div className={styles.icon} onClick={openRatingInfo}>
          <Info />
        </div>
      </h5>
      <div className={styles.rating}>
        {main && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{localField('overall')}</span>
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
            <span className={styles.rating__text}>{localField('security')}</span>
            <span className={styles.rating__score} onClick={handleSecurity}>
              {investmentSecurity.toPrecision(2)}
            </span>
          </div>
        )}
        {investmentPotential && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{localField('invest_potential')}</span>
            <span className={styles.rating__score} onClick={handleInvest}>
              {investmentPotential.toPrecision(2)}
            </span>
          </div>
        )}
        {projectLocation && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{localField('project_location')}</span>
            <span className={styles.rating__score} onClick={handleLocation}>
              {projectLocation.toPrecision(2)}
            </span>
          </div>
        )}
        {comfortOfLife && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{localField('comfort')}</span>
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
