import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './EstateDetail.module.scss';
import { FAQ } from './FAQ/FAQ';
import { ApartmentLayouts } from './Section/ApartmentLayouts/ApartmentLayouts';
import { PaymentSchedule } from './Section/PaymentSchedule/PaymentSchedule';
import { AverageYield } from './Section/AverageYield/AverageYield';
import { Infrastructure } from './Section/Infrastructure/Infrastructure';
import {
  detailApi,
  Profitability,
  RoomLayouts,
  InfrastructureDto,
  Options,
  Grade,
  Location
} from '@/widgets/Detail/api/detailApi';
import { Gallery } from '@/pages/EstateDetail/Gallery/Gallery';
import { Rating } from '@/pages/EstateDetail/Rating/Rating';
import { Info } from '@/pages/EstateDetail/Info/Info';
import { Manager } from '@/pages/EstateDetail/Manager/Manager';
import { LocationImg } from '@/shared/assets/icons';
import {Section} from "@/pages/EstateDetail/Section/Section";
import {Button} from "@/shared/ui";
import {BaseUserModal} from "@/widgets/Modal/BaseUserModal";
import {UserCollectionModal} from "@/widgets/Modal/UserCollectionModal";

const EstateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem('basicToken')
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<Location>();
  const [roomLayouts, setRoomLayouts] = useState<RoomLayouts>();
  const [profitability, setProfitability] = useState<Profitability>();
  const [infrastructure, setInfrastructure] = useState<InfrastructureDto>();
  const [options, setOptions] = useState<Options>();
  const [grade, setGrade] = useState<Grade>();
  const [gallery, setGallery] = useState<string[]>([]);

  const [baseUserModal, setBaseUserModal] = useState(false)
  const [userCollectionModal, setUserCollectionModal] = useState(false)

  const handleOpenBaseUserModal = () => {
    setBaseUserModal(true)
  }
  const handleCloseBaseUserModal = () => {
    setBaseUserModal(false)
  }

  const handleOpenUserCollectionModal = () => {
    setUserCollectionModal(true)
  }
  const handleCloseUserCollectionModal = () => {
    setUserCollectionModal(false)
  }

  useEffect(() => {
    detailApi.getDetail(id).then((r) => {
      setName(r.data.name);
      setLocation(r.data.location)
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
      <Section title={name} rightSide={
        <div className={styles.title}>
          <Button disabled={token === null || token === undefined || token === ''}
                  onClick={handleOpenUserCollectionModal}>
            Добавить в подборку
          </Button>
          <Button
              disabled={token === null || token === undefined || token === ''}
              onClick={handleOpenBaseUserModal}>
            Помощь с клиентом
          </Button>
        </div>
      }>
      </Section>
      <p className={styles.text}>
        <LocationImg />
        {location?.name}
      </p>
      {!!gallery.length && <Gallery images={gallery} />}
      <div className={styles.layout}>
        <main className={styles.main}>
          <ApartmentLayouts {...roomLayouts} estateId={id}/>
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
          {/*<ProjectPlan />*/}
          {/*<Map />*/}
          <FAQ />
        </main>
        <aside className={styles.aside}>
          <Rating {...grade} />
          <Info />
          <Manager />
        </aside>
      </div>
      <BaseUserModal
          open={baseUserModal}
          onClose={handleCloseBaseUserModal}
          onOpen={handleOpenBaseUserModal}
          anchor='bottom'
          id={id!!}
          object={name}
          token={token!!}
      />
      <UserCollectionModal
          open={userCollectionModal}
          onClose={handleCloseUserCollectionModal}
          onOpen={handleOpenUserCollectionModal}
          anchor='bottom'
          id={id!!}
          token={token!!}
      />
    </div>
  );
};

export default EstateDetail;
