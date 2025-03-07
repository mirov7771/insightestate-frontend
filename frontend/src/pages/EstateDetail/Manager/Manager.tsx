import { FC } from 'react';
import styles from './Manager.module.scss';
import { ButtonEmail, ButtonWhatsUp } from '@/shared/assets/icons';

export const Manager: FC = () => {
  return (
    <div className={styles.manager}>
      <img
        className={styles.manager__img}
        src="https://cdn.prod.website-files.com/66f0087ae13342fcc8dfc709/66f1a36eac4ff73bf1406ec8_Agent%20Image.png"
        alt=""
      />
      <div className={styles.socials}>
        <h5>Бесплатная консультация</h5>
        <div className={styles.socials__messengers}>
          <a href="https://wa.me/66811486462" target="_blank" rel="noreferrer">
            <ButtonWhatsUp />
          </a>
          <a href="mailto:maria.stenyukhina@insightestate.com">
            <ButtonEmail />
          </a>
        </div>
      </div>
    </div>
  );
};
