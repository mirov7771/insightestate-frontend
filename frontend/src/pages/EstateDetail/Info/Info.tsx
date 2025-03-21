import { FC } from 'react';
import styles from './Info.module.scss';
import {
    Airport,
    Beach,
    Calendar,
    Car,
    CityBuilding,
    Conference,
    Constructing,
    Diamond,
    Home, Money,
} from '@/shared/assets/icons';
import {
  EstateType,
  InfrastructureDto,
  LevelType,
  ProjectUnitCount,
} from '@/widgets/Detail/api/detailApi';

export const Info: FC<{
  floors: number;
  level: string;
  type: string;
  buildEndDate?: string;
  developer?: string;
  infrastructure?: InfrastructureDto;
  parkingSize?: number;
  project?: ProjectUnitCount;
  companyEnabled: boolean;
}> = ({ infrastructure, floors, project, buildEndDate, level, type, developer, parkingSize, companyEnabled }) => {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Diamond /> Класс
        </span>
        <span className={styles.text}>{LevelType.get(level)}</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Home /> Тип объекта
        </span>
        <span className={styles.text}>{EstateType.get(type)}</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Calendar /> Дата сдачи
        </span>
        <span className={styles.text}>{buildEndDate}</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <CityBuilding /> Всего этажей
        </span>
        <span className={styles.text}>{floors}</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Conference /> Всего квартир
        </span>
        <span className={styles.text}>{project?.total}</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Beach /> До пляжа
        </span>
        <span className={styles.text}>{infrastructure?.beachTime?.car} мин</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Airport /> До аэропорта
        </span>
        <span className={styles.text}>{infrastructure?.airportTime?.car} мин</span>
      </div>
      {parkingSize ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Car /> Парковка
          </span>
          <span className={styles.text}>{parkingSize}</span>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Constructing /> Застройщик
        </span>
        <span className={styles.text_developer}>{developer}</span>
      </div>
      <div className={styles.info__item}>
          <span className={styles.text}>
            <Money /> Наличие уставного капитала
          </span>
          <span className={styles.text_developer}>{companyEnabled ? 'Да' : 'Нет'}</span>
      </div>
    </div>
  );
};
