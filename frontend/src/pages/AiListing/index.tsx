import { FC, useEffect, useState } from 'react';
import styles from './AiListing.module.scss';
import { Card } from '@/entities/Card/Card';
import { Estate, filterApi } from '@/widgets/Filter/api/filterApi';
import { useSearchParams } from 'react-router';
import { Watch } from 'react-loader-spinner';
import { useIntl } from 'react-intl';
import {isMobile} from "react-device-detect";

export const AiListing: FC = () => {
  const { formatMessage } = useIntl();
  const [searchParams, setSearchParams] = useSearchParams();
  const [estates, setEstates] = useState<Estate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const request = searchParams.get('request');

    filterApi
      .getEstateAi({
        request: (request || '').replaceAll(' ', '+'),
      })
      .then((r) => {
        setEstates(r.data.items);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>{formatMessage({ id: 'selection' })}</h1>
      <div>
        <main className={isMobile ? styles.main_mobile : styles.main }>
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
              <h5>{formatMessage({ id: 'not_found' })}</h5>
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
