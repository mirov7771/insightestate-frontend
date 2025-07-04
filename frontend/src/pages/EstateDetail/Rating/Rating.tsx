import { FC, ReactNode, useState } from 'react';
import styles from './Rating.module.scss';
import { IconBrandSpark, IconInfoCircle } from '@/shared/assets/icons';
import { Grade } from '@/widgets/Detail/api/detailApi';
import { InfoModal } from '@/shared/ui/modals';
import { FormattedMessage, useIntl } from 'react-intl';
import { Text } from '@/shared/ui';
import { isMobile } from 'react-device-detect';

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
  const [infoText, setInfoText] = useState<string | ReactNode>();
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };

  const handleSecurity = () => {
    setInfoTitle(formatMessage({ id: 'security' }));
    setInfoText(
      <>
        <FormattedMessage id="info_title" />
        <br />
        <FormattedMessage id="security_p1" />
        <br />
        <FormattedMessage id="security_p2" />
        <br />
        <FormattedMessage id="security_p3" />
      </>
    );
    handleOpenInfoModal();
  };

  const handleInvest = () => {
    setInfoTitle(formatMessage({ id: 'invest_potential' }));
    setInfoText(
      <>
        <FormattedMessage id="info_title" />
        <br />
        <FormattedMessage id="invest_p1" />
        <br />
        <FormattedMessage id="invest_p2" />
        <br />
        <FormattedMessage id="invest_p3" />
      </>
    );
    handleOpenInfoModal();
  };

  const handleLocation = () => {
    setInfoTitle(formatMessage({ id: 'project_location' }));
    setInfoText(
      <>
        <FormattedMessage id="info_title" />
        <br />
        <FormattedMessage id="location_p1" />
        <br />
        <FormattedMessage id="invest_p2" />
        <br />
        <FormattedMessage id="location_p2" />
      </>
    );
    handleOpenInfoModal();
  };

  const handleComfort = () => {
    setInfoTitle(formatMessage({ id: 'comfort' }));
    setInfoText(
      <>
        <FormattedMessage id="info_title" />
        <br />
        <FormattedMessage id="comfort_p1" />
        <br />
        <FormattedMessage id="comfort_p2" />
        <br />
        <FormattedMessage id="comfort_p3" />
        <br />
        <FormattedMessage id="comfort_p4" />
        <br />
        <FormattedMessage id="comfort_p5" />
      </>
    );
    handleOpenInfoModal();
  };

  const openRatingInfo = () => {
    setInfoTitle(formatMessage({ id: 'object_info_title' }));
    setInfoText(formatMessage({ id: 'object_info_message' }));
    handleOpenInfoModal();
  };

  return (
    <div>
      <Text variant="heading4" className={styles.info_icon}>
        {formatMessage({ id: 'our_rating' })}
        <div className={styles.icon} onClick={openRatingInfo}>
          <IconInfoCircle />
        </div>
      </Text>
      {isMobile ? (
        <div className={styles.rating}>
          {main && (
            <div className={`${styles.rating__item} ${styles.rating__item_main}`}>
              <Text variant="body1" className={styles.rating__text}>
                {formatMessage({ id: 'overall' })}
              </Text>
              <Text
                variant="heading3"
                className={`${styles.rating__score} ${styles.rating__score_result}`}
                onClick={openRatingInfo}
              >
                {main.toPrecision(2)} <IconBrandSpark />
              </Text>
            </div>
          )}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '10rem 10rem',
              gridRowGap: '2rem',
              gridColumnGap: '2rem',
            }}
          >
            {investmentSecurity && (
              <div className={styles.rating__item}>
                <Text variant="body1" className={styles.rating__text}>
                  {formatMessage({ id: 'security' })}
                </Text>
                <Text variant="heading3" className={styles.rating__score} onClick={handleSecurity}>
                  {investmentSecurity.toPrecision(2)}
                </Text>
              </div>
            )}
            {investmentPotential && (
              <div className={styles.rating__item}>
                <Text variant="body1" className={styles.rating__text}>
                  {formatMessage({ id: 'invest_potential' })}
                </Text>
                <Text variant="heading3" className={styles.rating__score} onClick={handleInvest}>
                  {investmentPotential.toPrecision(2)}
                </Text>
              </div>
            )}
            {projectLocation && (
              <div className={styles.rating__item}>
                <Text variant="body1" className={styles.rating__text}>
                  {formatMessage({ id: 'project_location' })}
                </Text>
                <Text variant="heading3" className={styles.rating__score} onClick={handleLocation}>
                  {projectLocation.toPrecision(2)}
                </Text>
              </div>
            )}
            {comfortOfLife && (
              <div className={styles.rating__item}>
                <Text variant="body1" className={styles.rating__text}>
                  {formatMessage({ id: 'comfort' })}
                </Text>
                <Text variant="heading3" className={styles.rating__score} onClick={handleComfort}>
                  {comfortOfLife.toPrecision(2)}
                </Text>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.rating}>
          {main && (
            <div className={`${styles.rating__item_wrap} ${styles.rating__item_main}`}>
              <Text variant="body1" className={styles.rating__text_wrap}>
                {formatMessage({ id: 'overall' })}
              </Text>
              <Text
                variant="heading3"
                className={`${styles.rating__score} ${styles.rating__score_result}`}
                onClick={openRatingInfo}
              >
                {main.toPrecision(2)} <IconBrandSpark />
              </Text>
            </div>
          )}
          {investmentSecurity && (
            <div className={styles.rating__item_wrap}>
              <Text variant="body1" className={styles.rating__text_wrap}>
                {formatMessage({ id: 'security' })}
              </Text>
              <Text variant="heading3" className={styles.rating__score} onClick={handleSecurity}>
                {investmentSecurity.toPrecision(2)}
              </Text>
            </div>
          )}
          {investmentPotential && (
            <div className={styles.rating__item_wrap}>
              <Text variant="body1" className={styles.rating__text_wrap}>
                {formatMessage({ id: 'invest_potential' })}
              </Text>
              <Text variant="heading3" className={styles.rating__score} onClick={handleInvest}>
                {investmentPotential.toPrecision(2)}
              </Text>
            </div>
          )}
          {projectLocation && (
            <div className={styles.rating__item_wrap}>
              <Text variant="body1" className={styles.rating__text_wrap}>
                {formatMessage({ id: 'project_location' })}
              </Text>
              <Text variant="heading3" className={styles.rating__score} onClick={handleLocation}>
                {projectLocation.toPrecision(2)}
              </Text>
            </div>
          )}
          {comfortOfLife && (
            <div className={styles.rating__item_wrap}>
              <Text variant="body1" className={styles.rating__text_wrap}>
                {formatMessage({ id: 'comfort' })}
              </Text>
              <Text variant="heading3" className={styles.rating__score} onClick={handleComfort}>
                {comfortOfLife.toPrecision(2)}
              </Text>
            </div>
          )}
        </div>
      )}
      <InfoModal open={infoModal} title={infoTitle} text={infoText || ''} setOpen={setInfoModal} />
    </div>
  );
};
