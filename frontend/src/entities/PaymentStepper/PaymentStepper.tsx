import styles from './PaymentStepper.module.scss';
import { FC } from 'react';
import { Text } from '@/shared/ui';

type PaymentStepperProps = {
  steps: string[];
};

export const PaymentStepper: FC<PaymentStepperProps> = ({ steps }) => {
  return (
    <div className={styles.steps}>
      {steps.map((step, index) => (
        <>
          <div className={styles.wrapper}>
            <Text variant="body2" bold align="center" className={styles.number}>
              {index + 1}
            </Text>
            <Text variant="heading5" className={styles.percent}>
              {step}
            </Text>
          </div>
          {index < steps.length - 1 && <div className={styles.line} />}
        </>
      ))}
    </div>
  );
};
