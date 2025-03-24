import {FC, useEffect, useState} from 'react';
import styles from './AiListing.module.scss';
import { Card } from '@/entities/Card/Card';
import {Estate, filterApi} from "@/widgets/Filter/api/filterApi";

export const AiListing: FC = () => {
  const [ estates, setEstates ] = useState<Estate[]>([]);

    useEffect(() => {
        filterApi.getEstateWithParams().then((r) => {
            setEstates(r.data.items)
        })
    }, []);

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
