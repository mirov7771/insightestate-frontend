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
}> = ({ projectId }) => {
  const { formatMessage } = useIntl();
  //TODO переделать этот костыль, брать данные с бэка когда они там появятся
  const [type, setType] = useState<number>(0);
  const [items, setItems] = useState<string[]>();

  useEffect(() => {
    switch (projectId) {
      case 'TH-HKT-KL-00050':
      case 'TH-HKT-SU-00052':
      case 'TH-BKK-WTN-00070':
      case 'TH-BKK-KT-00071':
      case 'TH-BKK-WTN-00072':
      case 'TH-BKK-BR-00078':
      case 'TH-BKK-PW-00079':
      case 'TH-BKK-PW-00080':
      case 'TH-BKK-RTH-00087':
      case 'TH-BKK-CH-00088':
        setType(1); //100%
        break;
      case 'TH-HKT-RW-00001':
        setType(2); //35 30 30 5
        break;
      case 'TH-HKT-NY-00013':
      case 'TH-HKT-BT-00014':
      case 'TH-HKT-BT-00034':
      case 'TH-HKT-BT-00036':
      case 'TH-HKT-RW-00043':
      case 'TH-HKT-BT-00058':
      case 'TH-HKT-KT-00069':
      case 'TH-HKT-RW-00084':
        setType(3); //25 25 25 25
        break;
      case 'TH-HKT-BT-00002':
      case 'TH-HKT-BT-00006':
      case 'TH-HKT-BT-00017':
      case 'TH-HKT-BT-00022':
      case 'TH-HKT-BT-00025':
      case 'TH-HKT-BT-00061':
      case 'TH-HKT-BT-00041':
      case 'TH-HKT-BT-00047':
      case 'TH-HKT-LY-00062':
        setType(4); //20 20 20 20 20
        break;
      case 'TH-HKT-BT-00012':
        setType(5); //20%,7,5%,7,5%,7,5%,7,5%,50%
        break;
      case 'TH-HKT-RW-00081':
      case 'TH-HKT-RW-00082':
      case 'TH-HKT-KR-00056':
      case 'TH-HKT-KR-00059':
        setType(6); //35%,20%,15%,10%,10%,5%,5%
        break;
      case 'TH-HKT-NI-00054':
      case 'TH-HKT-KT-00037':
      case 'TH-HKT-KT-00067':
        setType(7); //30%,15%,15%,15%,15%,10%
        break;
      case 'TH-HKT-LY-00015':
      case 'TH-HKT-LY-00016':
      case 'TH-HKT-LY-00048':
        setType(8); //35%,20%,20%,15%,10%
        break;
      case 'TH-HKT-BT-00011':
      case 'TH-HKT-BT-00021':
        setType(9); //35%,25%,25%,10%,5%
        break;
      case 'TH-HKT-AY-00075':
      case 'TH-HKT-AY-00063':
        setType(10); //20%,15%,15%,50%
        break;
      case 'TH-HKT-RW-00024':
      case 'TH-HKT-LY-00028':
        setType(11); //35%,20%,20%,10%,10%,5%
        break;
      case 'TH-HKT-NY-00078':
      case 'TH-HKT-LY-00053':
      case 'TH-HKT-NI-00007':
      case 'TH-HKT-NI-00010':
      case 'TH-HKT-KL-00027':
      case 'TH-HKT-NI-00030':
        setType(12); //30%,20%,15%,15%,10%,10%
        break;
      case 'TH-HKT-BT-00057':
      case 'TH-HKT-LY-00065':
      case 'TH-HKT-PT-00083':
      case 'TH-BKK-RTH-00086':
      case 'TH-BKK-KS-00089':
        setType(13); //30%,70%
        break;
      case 'TH-HKT-BT-00004':
      case 'TH-HKT-BT-00064':
      case 'TH-HKT-BT-00039':
        setType(14); //30%,20%,50%
        break;
      case 'TH-HKT-BT-00009':
      case 'TH-HKT-RW-00029':
        setType(15); //35%,15%,20%,20%,10%
        break;
      case 'TH-HKT-BT-00018':
      case 'TH-HKT-BT-00019':
        setType(16); //35%,15%,10%,15%,15%,10%
        break;
    }
    setItems(ScheduleByProject.get(projectId));
    console.log(projectId, type);
  }, [projectId]);
  return (
    <>
      <Section title={formatMessage({ id: 'payment_schedule' })}>
        {type === 1 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__one}`}>
              <span>1 платеж</span>
            </div>
            <div className={`${styles.item} ${styles.item__one}`}>
              <span>100%</span>
            </div>
          </div>
        ) : type === 2 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__four}`}>
              <span>1 платеж</span>
              <span>2 платеж</span>
              <span>3 платеж</span>
              <span>4 платеж</span>
            </div>
            <div className={`${styles.item} ${styles.item__four}`}>
              <span>35%</span>
              <span>30%</span>
              <span>30%</span>
              <span>5%</span>
            </div>
          </div>
        ) : type === 3 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__four}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__four}`}>
              <span>25%</span>
              <span>25%</span>
              <span>25%</span>
              <span>25%</span>
            </div>
          </div>
        ) : type === 4 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__five}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__five}`}>
              <span>20%</span>
              <span>20%</span>
              <span>20%</span>
              <span>20%</span>
              <span>20%</span>
            </div>
          </div>
        ) : type === 5 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__six}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
              <span>6 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__six}`}>
              <span>20%</span>
              <span>7.5%</span>
              <span>7.5%</span>
              <span>7.5%</span>
              <span>7.5%</span>
              <span>50%</span>
            </div>
          </div>
        ) : type === 6 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__seven}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
              <span>6 {formatMessage({ id: 'payment' })}</span>
              <span>7 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__seven}`}>
              <span>35%</span>
              <span>20%</span>
              <span>15%</span>
              <span>10%</span>
              <span>10%</span>
              <span>5%</span>
              <span>5%</span>
            </div>
          </div>
        ) : type === 7 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__six}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
              <span>6 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__six}`}>
              <span>30%</span>
              <span>15%</span>
              <span>15%</span>
              <span>15%</span>
              <span>15%</span>
              <span>10%</span>
            </div>
          </div>
        ) : type === 8 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__five}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__five}`}>
              <span>35%</span>
              <span>20%</span>
              <span>20%</span>
              <span>15%</span>
              <span>10%</span>
            </div>
          </div>
        ) : type === 9 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__five}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__five}`}>
              <span>35%</span>
              <span>25%</span>
              <span>25%</span>
              <span>10%</span>
              <span>5%</span>
            </div>
          </div>
        ) : type === 10 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__four}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__four}`}>
              <span>20%</span>
              <span>15%</span>
              <span>15%</span>
              <span>50%</span>
            </div>
          </div>
        ) : type === 11 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__six}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
              <span>6 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__six}`}>
              <span>35%</span>
              <span>20%</span>
              <span>20%</span>
              <span>10%</span>
              <span>10%</span>
              <span>5%</span>
            </div>
          </div>
        ) : type === 12 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__six}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
              <span>6 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__six}`}>
              <span>30%</span>
              <span>20%</span>
              <span>15%</span>
              <span>15%</span>
              <span>10%</span>
              <span>10%</span>
            </div>
          </div>
        ) : type === 13 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__two}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__two}`}>
              <span>30%</span>
              <span>70%</span>
            </div>
          </div>
        ) : type === 14 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__three}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__three}`}>
              <span>30%</span>
              <span>20%</span>
              <span>50%</span>
            </div>
          </div>
        ) : type === 15 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__five}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__five}`}>
              <span>35%</span>
              <span>15%</span>
              <span>20%</span>
              <span>20%</span>
              <span>10%</span>
            </div>
          </div>
        ) : type === 16 ? (
          <div>
            <div className={`${styles.item__header} ${styles.item} ${styles.item__six}`}>
              <span>1 {formatMessage({ id: 'payment' })}</span>
              <span>2 {formatMessage({ id: 'payment' })}</span>
              <span>3 {formatMessage({ id: 'payment' })}</span>
              <span>4 {formatMessage({ id: 'payment' })}</span>
              <span>5 {formatMessage({ id: 'payment' })}</span>
              <span>6 {formatMessage({ id: 'payment' })}</span>
            </div>
            <div className={`${styles.item} ${styles.item__six}`}>
              <span>35%</span>
              <span>15%</span>
              <span>10%</span>
              <span>15%</span>
              <span>15%</span>
              <span>10%</span>
            </div>
          </div>
        ) : (
          <div className={styles.wrapper}>
            {items && items.length > 0 ? (
              <>
                <div className={`${styles.item__header} ${styles.item} ${createClass(items)}`}>
                  {items?.map((item, index) => (
                    <span>
                      {index + 1} {formatMessage({ id: 'payment' })}
                    </span>
                  ))}
                </div>
                <div className={`${styles.item} ${createClass(items)}`}>
                  {items?.map((item) => <span>{item}</span>)}
                </div>
              </>
            ) : (
              <img src={payment} alt="payment" />
            )}
          </div>
        )}
      </Section>
    </>
  );
};
