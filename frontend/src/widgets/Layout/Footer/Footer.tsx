import { FC } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router';
import { BlackWhatsApp, InstagramBlack, TelegramBlack, YoutubeBlack } from '@/shared/assets/icons';

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <menu className={styles.menu}>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="listing">
              Недвижимость
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="about">
              О нас
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="faq">
              Ответы на вопросы
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link className={styles.menu__link} to="contact">
              Контакты
            </Link>
          </li>
        </menu>
        <div className={styles.right}>
          <div className={styles.info}>
            <span className={styles.label}>Подписывайтесь</span>
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
              <span className={styles.label}>Задайте вопрос</span>
              <a className={styles.info__link} href="mailto:info@insightestate.com">
                info@insightestate.com
              </a>
            </div>
            <div className={styles.info}>
              <span className={styles.label}>Юридическая информация</span>
              <Link className={styles.info__link} to="privacy">
                Политика обработки данных
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.disclaimer}>
        <p>
          Информация предоставляется исключительно в информационных целях и не является публичной
          офертой. Инвестиции сопряжены с рисками потери вложений. Прошлые результаты не гарантируют
          будущих. Система рейтинга и квалификации объектов основывается на открытых данных и
          экспертных оценках. Итоговый рейтинг формируется по внутреннему алгоритму, который
          является интеллектуальной собственностью компании. Условия, ставки и данные могут быть
          изменены без предварительного уведомления.
        </p>
        <br />
        <p>© 2025 Insight Estate. Все права защищены.</p>
      </div>
    </div>
  );
};
