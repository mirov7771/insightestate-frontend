import React, { FC } from 'react';
import { Section } from '@/pages/EstateDetail/Section/Section';
import { Button } from '@/shared/ui';
import payment from './payment.svg';
import styles from './PaymentSchedule.module.scss';
import {Grade} from "@/widgets/Detail/api/detailApi";

export const PaymentSchedule: FC<Grade> = ({
    main,
    investmentPotential,
    comfortOfLife,
    projectLocation,
    investmentSecurity
}) => {
  return (
      <div>
          <Section title="Рейтинг">
              <div className={styles.item}>
                  <span>Безопасность вложений</span>
                  <span>{investmentSecurity}</span>
              </div>
              <div className={styles.item}>
                  <span>Инвестиционный потенциал</span>
                  <span>{investmentPotential}</span>
              </div>
              <div className={styles.item}>
                  <span>Расположение проекта</span>
                  <span>{projectLocation}</span>
              </div>
              <div className={styles.item}>
                  <span>Комфорт жизни</span>
                  <span>{comfortOfLife}</span>
              </div>
              <div className={`${styles.item__header} ${styles.item}`}>
                  <span>Наша оценка итоговая</span>
                  <span>{main}</span>
              </div>
          </Section>
          <Section title="График платежей" rightSide={<Button>Получить персональный план</Button>}>
              <div className={styles.wrapper}>
                  <img src={payment} alt="payment"/>
              </div>
          </Section>
      </div>
  );
};
