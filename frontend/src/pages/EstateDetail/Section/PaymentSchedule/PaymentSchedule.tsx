import React, { FC } from 'react';
import { Section } from '@/pages/EstateDetail/Section/Section';
import { Button } from '@/shared/ui';
import payment from './payment.svg';
import styles from './PaymentSchedule.module.scss';

export const PaymentSchedule: FC = () => {
  return (
    <Section title="График платежей" rightSide={<Button>Получить персональный план</Button>}>
      <div className={styles.wrapper}>
        <img src={payment} alt="payment" />
      </div>
    </Section>
  );
};
