import {FC} from 'react';
import styles from './Listing.module.scss';
import { Filter } from '@/widgets/Filter/Filter';
import { Card } from '@/entities/Card/Card';
import { Pagination } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import {Watch} from 'react-loader-spinner'

const Listing: FC = () => {
  const { setFilters, pageNumber, estates, totalPages, hasMore, loading } = useFilters();

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>Объекты</h1>
      <div className={styles.layout}>
        <aside>
          <Filter />
        </aside>
        <main className={styles.main}>
            {estates.length === 0 ?
                loading ?
                    <Watch
                        height="180"
                        width="180"
                        color="gray"
                        ariaLabel="watch-loading"
                        wrapperClass=""
                    />
                    :
                <h5>
                    По запрашиваемым параметрам объекты не найдены
                </h5> :
            <>
              {estates.map((estate) => (
                <Card key={estate.id} {...estate} clickable={true} />
              ))}
              {!hasMore ? <></> :
              <div className={styles.pagination}>
                <Pagination
                  totalPages={totalPages}
                  pageNumber={pageNumber as number}
                  goToPreviousPage={() =>
                    setFilters((filtersState) => ({
                      ...filtersState,
                      pageNumber: (pageNumber as number) - 1 || 0,
                    }))
                  }
                  goToNextPage={() =>
                    setFilters((filtersState) => ({
                      ...filtersState,
                      pageNumber: Math.min((pageNumber as number) + 1, totalPages),
                    }))
                  }
                />
              </div>
              }
            </>
            }
        </main>
      </div>
    </div>
  );
};

export default Listing;
