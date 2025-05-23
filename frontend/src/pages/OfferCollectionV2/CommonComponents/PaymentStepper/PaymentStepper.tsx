import styles from './PaymentStepper.module.scss';
import { FC, Fragment } from 'react';
import { Text } from '@/shared/ui';
import { useIntl } from 'react-intl';

type PaymentStepperProps = {
  steps: string[];
};

export const PaymentStepper: FC<PaymentStepperProps> = ({ steps }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      <Text variant="body1" className={styles.title}>
        {formatMessage({ id: 'offerCollection.paymentSchedule' })}
      </Text>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <Fragment key={index}>
            <Text variant="heading4" as="span" className={styles.step}>
              {step}
            </Text>
            {index < steps.length - 1 && <div className={styles.line} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
