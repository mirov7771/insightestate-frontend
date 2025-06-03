import { FC, ReactNode, useState } from 'react';
import styles from './Rating.module.scss';
import { Info, VectorRating } from '@/shared/assets/icons';
import { Grade } from '@/widgets/Detail/api/detailApi';
import { InfoModal } from '@/widgets/Modal/InfoModal';
import { useIntl } from 'react-intl';

export const Rating: FC<Grade> = ({
  investmentPotential,
  investmentSecurity,
  main,
  projectLocation,
  comfortOfLife,
}) => {
  const { formatMessage } = useIntl();
  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoText, setInfoText] = useState<string>();
  const [children, setChildren] = useState<ReactNode>();
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  const handleSecurity = () => {
    setInfoTitle(formatMessage({ id: 'security' }));
    setInfoText(undefined);
    setChildren(
      <>
        {formatMessage({ id: 'info_title' })}
        <br />
        {formatMessage({ id: 'security_p1' })}
        <br />
        {formatMessage({ id: 'security_p2' })}
        <br />
        {formatMessage({ id: 'security_p3' })}
      </>
    );
    handleOpenInfoModal();
  };

  const handleInvest = () => {
    setInfoTitle(formatMessage({ id: 'invest_potential' }));
    setInfoText(undefined);
    setChildren(
      <>
        {formatMessage({ id: 'info_title' })}
        <br />
        {formatMessage({ id: 'invest_p1' })}
        <br />
        {formatMessage({ id: 'invest_p2' })}
        <br />
        {formatMessage({ id: 'invest_p3' })}
      </>
    );
    handleOpenInfoModal();
  };

  const handleLocation = () => {
    setInfoTitle(formatMessage({ id: 'project_location' }));
    setInfoText(undefined);
    setChildren(
      <>
        {formatMessage({ id: 'info_title' })}
        <br />
        {formatMessage({ id: 'location_p1' })}
        <br />
        {formatMessage({ id: 'location_p2' })}
      </>
    );
    handleOpenInfoModal();
  };

  const handleComfort = () => {
    setInfoTitle(formatMessage({ id: 'comfort' }));
    setInfoText(undefined);
    setChildren(
      <>
        {formatMessage({ id: 'info_title' })}
        <br />
        {formatMessage({ id: 'comfort_p1' })}
        <br />
        {formatMessage({ id: 'comfort_p2' })}
        <br />
        {formatMessage({ id: 'comfort_p3' })}
        <br />
        {formatMessage({ id: 'comfort_p4' })}
        <br />
        {formatMessage({ id: 'comfort_p5' })}
      </>
    );
    handleOpenInfoModal();
  };

  const openRatingInfo = () => {
    setInfoTitle(formatMessage({ id: 'object_info_title' }));
    setInfoText(formatMessage({ id: 'object_info_message' }));
    setChildren(undefined);
    handleOpenInfoModal();
  };

  return (
    <div>
      <h5 className={styles.info_icon}>
        {formatMessage({ id: 'our_rating' })}
        <div className={styles.icon} onClick={openRatingInfo}>
          <Info />
        </div>
      </h5>
      <div className={styles.rating}>
        {main && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{formatMessage({ id: 'overall' })}</span>
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
            <span className={styles.rating__text}>{formatMessage({ id: 'security' })}</span>
            <span className={styles.rating__score} onClick={handleSecurity}>
              {investmentSecurity.toPrecision(2)}
            </span>
          </div>
        )}
        {investmentPotential && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{formatMessage({ id: 'invest_potential' })}</span>
            <span className={styles.rating__score} onClick={handleInvest}>
              {investmentPotential.toPrecision(2)}
            </span>
          </div>
        )}
        {projectLocation && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{formatMessage({ id: 'project_location' })}</span>
            <span className={styles.rating__score} onClick={handleLocation}>
              {projectLocation.toPrecision(2)}
            </span>
          </div>
        )}
        {comfortOfLife && (
          <div className={styles.rating__item}>
            <span className={styles.rating__text}>{formatMessage({ id: 'comfort' })}</span>
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
