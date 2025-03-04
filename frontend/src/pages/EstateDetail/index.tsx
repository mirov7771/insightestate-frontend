import { FC } from 'react';
import { useParams } from 'react-router';
import styles from './EstateDetail.module.scss';
import { FAQ } from './FAQ/FAQ';
import { ApartmentLayouts } from './Section/ApartmentLayouts/ApartmentLayouts';

const EstateDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className={styles.title}>The Title Serenity Naiyang</h1>
      <ApartmentLayouts />
      <FAQ />
    </div>
  );
};

export default EstateDetail;
