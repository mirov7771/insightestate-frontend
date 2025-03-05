import { FC } from 'react';
import { useParams } from 'react-router';
import styles from './EstateDetail.module.scss';
import { FAQ } from './FAQ/FAQ';
import { ApartmentLayouts } from './Section/ApartmentLayouts/ApartmentLayouts';
import { PaymentSchedule } from './Section/PaymentSchedule/PaymentSchedule';
import { AverageYield } from './Section/AverageYield/AverageYield';
import { Infrastructure } from './Section/Infrastructure/Infrastructure';
import { ProjectPlan } from './Section/ProjectPlan/ProjectPlan';
import { Map } from './Section/Map/Map';

const EstateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.wrap}>
      <div className={styles.layout}>
        <main className={styles.main}>
          <h1 className={styles.title}>The Title Serenity Naiyang</h1>
          <ApartmentLayouts />
          <PaymentSchedule />
          <AverageYield />
          <Infrastructure />
          <ProjectPlan />
          <Map />
          <FAQ />
        </main>
        <div></div>
      </div>
    </div>
  );
};

export default EstateDetail;
