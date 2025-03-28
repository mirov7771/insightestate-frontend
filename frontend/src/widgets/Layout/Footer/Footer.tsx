import { FC } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router';
import { BlackWhatsApp, InstagramBlack, TelegramBlack, YoutubeBlack } from '@/shared/assets/icons';
import {localField} from "@/i18n/localField";

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <menu className={styles.menu}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="listing">
              {localField('properties')}
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="https://www.insightestate.com/about" target="_blank">
              {localField('about_us')}
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="https://www.insightestate.com/contact" target="_blank">
              {localField('contacts')}
            </Link>
          </li>
        </menu>
        <div className={styles.right}>
          <div className={styles.info}>
            <span className={styles.label}>{localField('subscribe')}</span>
            <ul className={styles.info__links}>
              <li className={styles.info__item}>
                <a href="https://wa.me/66816315759" target="_blank" rel="noreferrer">
                  <BlackWhatsApp />
                </a>
              </li>
              <li className={styles.info__item}>
                <a
                  href="https://www.instagram.com/the.insight.estate?igsh=MXd0NHhnMzNqa2kzcQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramBlack />
                </a>
              </li>
              <li className={styles.info__item}>
                <a href="https://t.me/Estate_Insight" target="_blank" rel="noreferrer">
                  <TelegramBlack />
                </a>
              </li>
              <li className={styles.info__item}>
                <a
                  href="https://youtube.com/@insightestatechannel?feature=shared"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeBlack />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.right__wrapper}>
            <div className={styles.info}>
              <span className={styles.label}>{localField('ask_question')}</span>
              <a className={styles.info__link} href="mailto:info@insightestate.com">
                info@insightestate.com
              </a>
            </div>
            <div className={styles.info}>
              <span className={styles.label}>{localField('juridical_info')}</span>
              <Link className={styles.info__link} to="https://www.insightestate.com/privacy" target="_blank">
                {localField('politics')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.disclaimer}>
        <p>
          {localField('footer_info')}
        </p>
        <br />
        <p>© 2025 Insight Estate.{' '}{localField('rights_reserved')}</p>
      </div>
    </div>
  );
};
