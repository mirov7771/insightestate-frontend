import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './EstateDetail.module.scss';
import { FAQ } from './FAQ/FAQ';
import { ApartmentLayouts } from './Section/ApartmentLayouts/ApartmentLayouts';
import { PaymentSchedule } from './Section/PaymentSchedule/PaymentSchedule';
import { AverageYield } from './Section/AverageYield/AverageYield';
import { Infrastructure } from './Section/Infrastructure/Infrastructure';
import { ProjectPlan } from './Section/ProjectPlan/ProjectPlan';
import {
  detailApi,
  Profitability,
  RoomLayouts,
  InfrastructureDto,
  Options,
  Grade,
} from '@/widgets/Detail/api/detailApi';
import { Gallery } from '@/pages/EstateDetail/Gallery/Gallery';
import { Rating } from '@/pages/EstateDetail/Rating/Rating';
import { Info } from '@/pages/EstateDetail/Info/Info';
import { Manager } from '@/pages/EstateDetail/Manager/Manager';

const EstateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState<string>('');
  const [roomLayouts, setRoomLayouts] = useState<RoomLayouts>();
  const [profitability, setProfitability] = useState<Profitability>();
  const [infrastructure, setInfrastructure] = useState<InfrastructureDto>();
  const [options, setOptions] = useState<Options>();
  const [grade, setGrade] = useState<Grade>();
  const [gallery, setGallery] = useState<string[]>([]);

  useEffect(() => {
    detailApi.getDetail(id).then((r) => {
      setName(r.data.name);
      setRoomLayouts(r.data.roomLayouts);
      setProfitability(r.data.profitability);
      setInfrastructure(r.data.infrastructure);
      setOptions(r.data.options);
      setGrade(r.data.grade);
      setGallery([
        ...(r.data.exteriorImages || []),
        ...(r.data.interiorImages || []),
        ...(r.data.facilityImages || []),
      ]);
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{name}</h1>
      {!!gallery.length && <Gallery images={gallery} />}
      <div className={styles.layout}>
        <main className={styles.main}>
          <ApartmentLayouts {...roomLayouts} />
          <PaymentSchedule />
          <AverageYield {...profitability} />
          <Infrastructure
            beachTime={infrastructure?.beachTime?.car}
            airportTime={infrastructure?.airportTime?.car}
            mallTime={infrastructure?.mallTime?.car}
            gym={options?.gym || false}
            childRoom={options?.childRoom || false}
            coworking={options?.coworking || false}
          />
          <ProjectPlan />
          {/*<Map />*/}
          <FAQ />
        </main>
        <aside className={styles.aside}>
          <Rating {...grade} />
          <Info />
          <Manager />
        </aside>
      </div>
    </div>
  );
};

export default EstateDetail;
