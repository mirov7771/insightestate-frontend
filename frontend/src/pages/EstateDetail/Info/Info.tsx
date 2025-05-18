import { FC, useState } from 'react';
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
  EstateTypeEn,
  EstateTypeRu,
  InfrastructureDto,
  LevelTypeEn,
  LevelTypeRu,
  ProjectUnitCount,
} from '@/widgets/Detail/api/detailApi';
import { useIntl } from 'react-intl';

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
  const { formatMessage } = useIntl();
  const [locale, setLocale] = useState<string>(localStorage.getItem('language') || 'ru');

  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Diamond /> {formatMessage({ id: 'class' })}
        </span>
        <span className={styles.text}>
          {(locale === 'en' ? LevelTypeEn.get(level) : LevelTypeRu.get(level)) ||
            formatMessage({ id: 'not_selected' })}
        </span>
      </div>
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Home /> {formatMessage({ id: 'type_of_place' })}
        </span>
        <span className={styles.text}>
          {(locale === 'en' ? EstateTypeEn.get(type) : EstateTypeRu.get(type)) || 'Villa'}
        </span>
      </div>
      {buildEndDate ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Calendar /> {formatMessage({ id: 'completion_date' })}
          </span>
          <span className={styles.text}>{buildEndDate}</span>
        </div>
      ) : (
        <></>
      )}
      {floors ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <CityBuilding /> {formatMessage({ id: 'total_floors' })}
          </span>
          <span className={styles.text}>{floors}</span>
        </div>
      ) : (
        <></>
      )}
      {project?.total ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Conference /> {formatMessage({ id: 'total_aparts' })}
          </span>
          <span className={styles.text}>{project?.total}</span>
        </div>
      ) : (
        <></>
      )}
      {infrastructure?.beachTime?.car ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Beach /> {formatMessage({ id: 'to_beach' })}
          </span>
          <span className={styles.text}>
            {infrastructure?.beachTime?.car} {formatMessage({ id: 'min' })}
          </span>
        </div>
      ) : (
        <></>
      )}
      {infrastructure?.airportTime?.car ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Airport /> {formatMessage({ id: 'to_airport' })}
          </span>
          <span className={styles.text}>
            {infrastructure?.airportTime?.car} {formatMessage({ id: 'min' })}
          </span>
        </div>
      ) : (
        <></>
      )}
      {parkingSize ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Car /> {formatMessage({ id: 'parking' })}
          </span>
          <span className={styles.text}>{parkingSize}</span>
        </div>
      ) : (
        <></>
      )}
      {developer ? (
        <div className={styles.info__item}>
          <span className={styles.text}>
            <Constructing /> {formatMessage({ id: 'developer' })}
          </span>
          <span className={styles.text}>{developer}</span>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.info__item}>
        <span className={styles.text}>
          <Money /> {formatMessage({ id: 'uk' })}
        </span>
        <span className={styles.text}>
          {companyEnabled ? formatMessage({ id: 'yes' }) : formatMessage({ id: 'no' })}
        </span>
      </div>
    </div>
  );
};
