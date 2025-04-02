import { FC, useEffect, useState } from 'react';
import styles from './AiListing.module.scss';
import { Card } from '@/entities/Card/Card';
import { Estate, filterApi } from '@/widgets/Filter/api/filterApi';
import { useSearchParams } from 'react-router';
import { localField } from '@/i18n/localField';
import {Watch} from "react-loader-spinner";

export const AiListing: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [estates, setEstates] = useState<Estate[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const request = searchParams.get('request');
    filterApi.getEstateAi({
      request: (request || '').replaceAll(' ', '+')
    }).then((r) => {
      setEstates(r.data.items);
    }).catch(e => console.log(e)).finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>{localField('selection')}</h1>
      <div>
        <main className={styles.main}>
          {estates.length === 0 ? (
              loading ? (
                  <div className={styles.watch}>
                    <Watch
                        height="180"
                        width="180"
                        color="gray"
                        ariaLabel="watch-loading"
                        wrapperClass=""
                    />
                  </div>
              ) : (
                  <h5>{localField('not_found')}</h5>
              )
          ) : (
              <>
                {estates.map((estate) => (
                    <Card key={estate.id} {...estate} clickable={true} />
                ))}
              </>
          )}
        </main>
      </div>
    </div>
  );
};
