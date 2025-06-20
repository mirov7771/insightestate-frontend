import styles from './PaymentStepper.module.scss';
import { FC, Fragment } from 'react';
import { Text } from '@/shared/ui';
import { useIntl } from 'react-intl';

type PaymentStepperProps = {
  steps: string[];
  variant?: 'estate-detail' | 'card';
};

export const PaymentStepper: FC<PaymentStepperProps> = ({ steps, variant = 'card' }) => {
  const { formatMessage } = useIntl();

  if (variant === 'card') {
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
  }

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <Fragment key={index}>
            <div className={`${styles.step} ${styles.step_estate_detail}`}>
              <Text variant="heading3" as="span" align="center" className={styles.step__percent}>
                {step}
              </Text>
              <Text variant="body1" as="span" align="center" className={styles.info}>
                {index + 1}
                <span className={styles.hidden_mobile}>
                  &nbsp;{formatMessage({ id: 'payment' })}
                </span>
              </Text>
            </div>
            {index < steps.length - 1 && <div className={styles.line} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
