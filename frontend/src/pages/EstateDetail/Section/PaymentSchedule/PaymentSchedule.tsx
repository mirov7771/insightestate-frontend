import { Section } from '@/pages/EstateDetail/Section/Section';
import payment from './payment.svg';
import styles from './PaymentSchedule.module.scss';
import { FC, useEffect, useState } from 'react';
import { ScheduleByProject } from '@/widgets/Detail/api/detailApi';
import { useIntl } from 'react-intl';

const createClass = (items: string[]) => {
  const classes: Record<number, string> = {
    1: styles.item__one,
    2: styles.item__two,
    3: styles.item__three,
    4: styles.item__four,
    5: styles.item__five,
    6: styles.item__six,
    7: styles.item__seven,
  };

  return classes[items.length] || styles.item__one;
};

export const PaymentSchedule: FC<{
  projectId: string;
  paymentPlanList?: string[];
  listSize: number;
}> = ({ projectId, paymentPlanList, listSize }) => {
  const { formatMessage } = useIntl();
  const getStylesBySize = (): string => {
    switch (listSize) {
      case 1:
        return styles.item__one
      case 2:
        return styles.item__two
      case 3:
        return styles.item__three
      case 4:
        return styles.item__four
      case 5:
        return styles.item__five
      case 6:
        return styles.item__six
      default:
        return styles.item__seven
    }
  }
  return (
    <>
      {paymentPlanList ?
          <Section title={formatMessage({ id: 'payment_schedule' })}>
            <div className={`${styles.item__header} ${styles.item} ${getStylesBySize()}`}>
              {paymentPlanList.map((payment, i) => <span>{i+1}{' '}{formatMessage({ id: 'payment' })}</span>)}
            </div>
            <div className={`${styles.item__header} ${styles.item} ${getStylesBySize()}`}>
              {paymentPlanList.map((payment) => <span>{payment}</span>)}
            </div>
          </Section> :
          <></>
      }
    </>
  );
};
