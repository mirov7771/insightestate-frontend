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
  Home,
  Money,
} from '@/shared/assets/icons';
import {
  EstateType,
  InfrastructureDto,
  LevelType,
  ProjectUnitCount,
} from '@/widgets/Detail/api/detailApi';
import {localField} from "@/i18n/localField";

export const Info: FC<{
  companyEnabled: boolean;
  floors: number;
  level: string;
  type: string;
  buildEndDate?: string;
  developer?: string;
  infrastructure?: InfrastructureDto;
  parkingSize?: number;
  project?: ProjectUnitCount;
}> = ({
  infrastructure,
  floors,
  project,
  buildEndDate,
  level,
  type,
  developer,
  parkingSize,
  companyEnabled,
}) => {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Diamond /> {localField('class')}
        </span>
        <span className={styles.text}>{LevelType.get(level) || localField('not_selected')}</span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Home /> {localField('type_of_place')}
        </span>
        <span className={styles.text}>{EstateType.get(type) || 'Villa'}</span>
      </div>
      {buildEndDate ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Calendar /> {localField('completion_date')}
          </span>
          <span className={styles.text}>{buildEndDate}</span>
        </div>
      ) : (
        <></>
      )}
      {floors ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <CityBuilding /> {localField('total_floors')}
          </span>
          <span className={styles.text}>{floors}</span>
        </div>
      ) : (
        <></>
      )}
      {project?.total ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Conference /> {localField('total_aparts')}
          </span>
          <span className={styles.text}>{project?.total}</span>
        </div>
      ) : (
        <></>
      )}
      {infrastructure?.beachTime?.car ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Beach /> {localField('to_beach')}
          </span>
          <span className={styles.text}>{infrastructure?.beachTime?.car} {localField('min')}</span>
        </div>
      ) : (
        <></>
      )}
      {infrastructure?.airportTime?.car ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Airport /> {localField('to_airport')}
          </span>
          <span className={styles.text}>{infrastructure?.airportTime?.car} {localField('min')}</span>
        </div>
      ) : (
        <></>
      )}
      {parkingSize ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Car /> {localField('parking')}
          </span>
          <span className={styles.text}>{parkingSize}</span>
        </div>
      ) : (
        <></>
      )}
      {developer ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Constructing /> {localField('developer')}
          </span>
          <span className={styles.text}>{developer}</span>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Money /> {localField('uk')}
        </span>
        <span className={styles.text}>{companyEnabled ? localField('yes') : localField('no')}</span>
      </div>
    </div>
  );
};
