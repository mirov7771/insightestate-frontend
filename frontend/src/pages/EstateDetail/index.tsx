import {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styles from './EstateDetail.module.scss';
import { FAQ } from './FAQ/FAQ';
import { ApartmentLayouts } from './Section/ApartmentLayouts/ApartmentLayouts';
import { PaymentSchedule } from './Section/PaymentSchedule/PaymentSchedule';
import { AverageYield } from './Section/AverageYield/AverageYield';
import { Infrastructure } from './Section/Infrastructure/Infrastructure';
import { ProjectPlan } from './Section/ProjectPlan/ProjectPlan';
import { Map } from './Section/Map/Map';
import {detailApi, Profitability, RoomLayouts} from "@/widgets/Detail/api/detailApi";

const EstateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>('')
  const [roomLayouts, setRoomLayouts] = useState<RoomLayouts>()
  const [profitability, setProfitability] = useState<Profitability>()

  useEffect(() => {
    detailApi.getDetail(id).then(r => {
      setName(r.data.name)
      setRoomLayouts(r.data.roomLayouts)
      setProfitability(r.data.profitability)
    })
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.layout}>
        <main className={styles.main}>
          <h1 className={styles.title}>{name}</h1>
          <ApartmentLayouts {...roomLayouts}/>
          <PaymentSchedule />
          <AverageYield {...profitability}/>
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
