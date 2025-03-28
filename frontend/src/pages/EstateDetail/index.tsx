import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './EstateDetail.module.scss';
import { FAQ } from './FAQ/FAQ';
import { ApartmentLayouts } from './Section/ApartmentLayouts/ApartmentLayouts';
import { PaymentSchedule } from './Section/PaymentSchedule/PaymentSchedule';
import { AverageYield } from './Section/AverageYield/AverageYield';
import { Infrastructure } from './Section/Infrastructure/Infrastructure';
import { Map } from './Section/Map/Map';
import {
  detailApi,
  Profitability,
  RoomLayouts,
  InfrastructureDto,
  Options,
  Grade,
  Location,
  ProjectUnitCount,
} from '@/widgets/Detail/api/detailApi';
import { Gallery } from '@/pages/EstateDetail/Gallery/Gallery';
import { Rating } from '@/pages/EstateDetail/Rating/Rating';
import { Info } from '@/pages/EstateDetail/Info/Info';
import { LocationImg } from '@/shared/assets/icons';
import { Section } from '@/pages/EstateDetail/Section/Section';
import { Button } from '@/shared/ui';
import { BaseUserModal } from '@/widgets/Modal/BaseUserModal';
import { UserCollectionModal } from '@/widgets/Modal/UserCollectionModal';
import { AiModal } from '@/widgets/Modal/AiModal';

const EstateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem('basicToken');
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<Location>();
  const [roomLayouts, setRoomLayouts] = useState<RoomLayouts>();
  const [profitability, setProfitability] = useState<Profitability>();
  const [infrastructure, setInfrastructure] = useState<InfrastructureDto>();
  const [options, setOptions] = useState<Options>();
  const [grade, setGrade] = useState<Grade>();
  const [gallery, setGallery] = useState<string[]>([]);
  const [description, setDescription] = useState<string>();
  const [floors, setFloors] = useState<number>(1);
  const [project, setProject] = useState<ProjectUnitCount>();
  const [buildEndDate, setBuildEndDate] = useState<string>();
  const [level, setLevel] = useState<string>();
  const [type, setType] = useState<string>();
  const [developer, setDeveloper] = useState<string>();
  const [parkingSize, setParkingSize] = useState<number>();
  const [baseUserModal, setBaseUserModal] = useState(false);
  const [aiModal, setAiModal] = useState(false);
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const [map, setMap] = useState('');
  const [projectId, setProjectId] = useState<string>('');
  const [companyEnabled, setCompanyEnabled] = useState<boolean>(false);

  const handleOpenBaseUserModal = () => {
    setBaseUserModal(true);
  };
  const handleCloseBaseUserModal = () => {
    setBaseUserModal(false);
  };

  const handleOpenUserCollectionModal = () => {
    setUserCollectionModal(true);
  };
  const handleCloseUserCollectionModal = () => {
    setUserCollectionModal(false);
  };

  const handleOpenAiModal = () => {
    setAiModal(true);
  };
  const handleCloseAiModal = () => {
    setAiModal(false);
  };

  useEffect(() => {
    detailApi.getDetail(id).then((r) => {
      setName(r.data.name);
      setLocation(r.data.location);
      setRoomLayouts(r.data.roomLayouts);
      setProfitability(r.data.profitability);
      setInfrastructure(r.data.infrastructure);
      setOptions(r.data.options);
      setGrade(r.data.grade);
      setDescription(localStorage.getItem('language') === 'en' ? r.data.shortDescriptionEn : r.data.shortDescriptionRu);
      setFloors(r.data.floors);
      setProject(r.data.unitCount);
      setBuildEndDate(r.data.buildEndDate);
      setLevel(r.data.level);
      setGallery([
        ...(r.data.exteriorImages || []),
        ...(r.data.interiorImages || []),
        ...(r.data.facilityImages || []),
      ]);
      setType(r.data.type);
      setDeveloper(r.data.developer?.name);
      setParkingSize(r.data.options?.parkingSize);
      setMap(r.data.location.mapUrl || '');
      setProjectId(r.data.projectId);
      setCompanyEnabled(r.data.managementCompany?.enabled || false);
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <Section
        title={name}
        rightSide={
          <div className={styles.title}>
            <Button
              disabled={token === null || token === undefined || token === ''}
              onClick={handleOpenUserCollectionModal}
            >
              Добавить в подборку
            </Button>
            <Button
              disabled={token === null || token === undefined || token === ''}
              onClick={handleOpenBaseUserModal}
            >
              Помощь с клиентом
            </Button>
            <Button
              disabled={token === null || token === undefined || token === ''}
              onClick={handleOpenAiModal}
            >
              AI подборщик объектов
            </Button>
          </div>
        }
      ></Section>
      <p className={styles.text}>
        <LocationImg />
        {location?.name}
      </p>
      {!!gallery.length && <Gallery images={gallery} />}
      <div className={styles.layout}>
        <main className={styles.main}>
          {description ? (
            <Section title="Описание">
              <span className={styles.description}>{description}</span>
            </Section>
          ) : (
            <></>
          )}
          <ApartmentLayouts {...roomLayouts} estateId={id} />
          <PaymentSchedule projectId={projectId} />
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
          <Map url={map} />
          <FAQ />
        </main>
        <aside className={styles.aside}>
          <Rating {...grade} />
          <Info
            infrastructure={infrastructure}
            floors={floors}
            project={project}
            buildEndDate={buildEndDate}
            level={level || 'UNKNOWN'}
            type={type || 'VILLA'}
            developer={developer}
            parkingSize={parkingSize}
            companyEnabled={companyEnabled}
          />
          {/*<Manager />*/}
        </aside>
      </div>
      <BaseUserModal
        open={baseUserModal}
        onClose={handleCloseBaseUserModal}
        onOpen={handleOpenBaseUserModal}
        anchor="bottom"
        id={id!!}
        object={name}
        token={token!!}
      />
      <UserCollectionModal
        open={userCollectionModal}
        onClose={handleCloseUserCollectionModal}
        onOpen={handleOpenUserCollectionModal}
        anchor="bottom"
        id={id!!}
        token={token!!}
      />
      <AiModal
        open={aiModal}
        onClose={handleCloseAiModal}
        onOpen={handleOpenAiModal}
        anchor="bottom"
      />
    </div>
  );
};

export default EstateDetail;
