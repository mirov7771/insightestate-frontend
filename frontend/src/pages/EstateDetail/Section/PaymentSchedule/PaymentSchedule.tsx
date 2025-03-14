import { Section } from '@/pages/EstateDetail/Section/Section';
import payment from './payment.svg';
import styles from './PaymentSchedule.module.scss';
import React, {FC} from "react";

export const PaymentSchedule: FC = () => {
  const token = localStorage.getItem('basicToken')

  return (
  <>
  <Section title="График платежей">
    <div className={styles.wrapper}>
      <img src={payment} alt="payment" />
    </div>
  </Section>
  </>
  );
};
