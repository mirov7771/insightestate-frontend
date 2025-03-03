import { FC, useEffect } from 'react';
import styles from './Listing.module.scss';
import { Filter } from '@/widgets/Filter/Filter';
import { Card } from '@/entities/Card/Card';
import { Pagination } from '@/shared/ui';
import { filterApi } from '@/widgets/Filter/api/filterApi';
import { FiltersProvider } from '@/widgets/Filter/model/useFilters';

export const Listing: FC = () => {
  useEffect(() => {
    filterApi.getEstate({ pageSize: 4 }).then((response) => {
      console.log({ response });
    });
  }, []);

  return (
    <FiltersProvider>
      <div className={styles.wrap}>
        <h1 className={styles.header}>Объекты</h1>
        <div className={styles.layout}>
          <aside>
            <Filter />
          </aside>
          <main className={styles.main}>
            <Card />
            <Card />
            <Card />
            <Card />
            <div className={styles.pagination}>
              <Pagination totalPages={9} />
            </div>
          </main>
        </div>
      </div>
    </FiltersProvider>
  );
};
