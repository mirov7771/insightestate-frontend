import { FC } from 'react';
import styles from './Rating.module.scss';
import { VectorRating } from '@/shared/assets/icons';
import { Grade } from '@/widgets/Detail/api/detailApi';

export const Rating: FC<Grade> = ({
  investmentPotential,
  investmentSecurity,
  main,
  projectLocation,
  comfortOfLife,
}) => {
  /*TODO: сделать попапы по клику на рейтинг*/
  return (
    <div>
      <h5>Наша оценка объекта</h5>
      <div className={styles.rating}>
        {main && (
          <div className={styles.rating__item}>
            <span>Наша итоговая оценка</span>
            <span className={`${styles.rating__score} ${styles.rating__score_result}`}>
              {main.toPrecision(2)} <VectorRating />
            </span>
          </div>
        )}
        {investmentSecurity && (
          <div className={styles.rating__item}>
            <span>Безопасность вложений</span>
            <span className={styles.rating__score}>{investmentSecurity.toPrecision(2)}</span>
          </div>
        )}
        {investmentPotential && (
          <div className={styles.rating__item}>
            <span>Инвестиционный потенциал</span>
            <span className={styles.rating__score}>{investmentPotential.toPrecision(2)}</span>
          </div>
        )}
        {projectLocation && (
          <div className={styles.rating__item}>
            <span>Расположение проекта</span>
            <span className={styles.rating__score}>{projectLocation.toPrecision(2)}</span>
          </div>
        )}
        {comfortOfLife && (
          <div className={styles.rating__item}>
            <span>Комфорт жизни</span>
            <span className={styles.rating__score}>{comfortOfLife.toPrecision(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};
