import { FC } from 'react';
import { AnalyzeStepProps } from '@/shared/constants/constants';
import styles from './AnalyzeStepCard.module.scss';

export const AnalyzeStepCard: FC<AnalyzeStepProps & { isMobile: boolean }> = ({
  title,
  id,
  description,
  style,
  isMobile,
}) => {
  return (
    <div className={isMobile ? styles[`${style}Mobile`] : styles[style]}>
      <div className={isMobile ? styles.icon_mobile : styles.icon}>{id}</div>
      <h4 className={isMobile ? styles.title_mobile : styles.title}>
        <strong>{title}</strong>
      </h4>
      {isMobile ? <p className={styles.p_mobile}>{description}</p> : <p>{description}</p>}
    </div>
  );
};
