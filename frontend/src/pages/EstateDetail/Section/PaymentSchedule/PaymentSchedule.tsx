import { Section } from '@/pages/EstateDetail/Section/Section';
import { Button } from '@/shared/ui';
import payment from './payment.svg';
import styles from './PaymentSchedule.module.scss';

export const PaymentSchedule = () => {
  return (
    <Section title="График платежей">
      <div className={styles.wrapper}>
        <img src={payment} alt="payment" />
      </div>
    </Section>
  );
};
