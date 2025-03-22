import { FC } from 'react';
import styles from './AiListing.module.scss';
import { Card } from '@/entities/Card/Card';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const AiListing: FC = () => {
  const { estates } = useFilters();

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>Подборка</h1>
      <div>
        <main className={styles.main}>
          {estates.map((estate) => (
            <Card key={estate.id} {...estate} clickable={true} />
          ))}
        </main>
      </div>
    </div>
  );
};
