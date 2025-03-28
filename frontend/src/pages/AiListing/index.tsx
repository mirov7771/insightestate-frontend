import { FC, useEffect, useState } from 'react';
import styles from './AiListing.module.scss';
import { Card } from '@/entities/Card/Card';
import { Estate, filterApi, GetEstateParams } from '@/widgets/Filter/api/filterApi';
import { useSearchParams } from 'react-router';
import {localField} from "@/i18n/localField";

function getAmountFromRequest(request: string): string {
  const rq = Buffer.from(request, 'base64').toString();
  const amount = rq.match(/\d/g)?.join('');

  if (!amount) return '1';
  const isUnder = rq.indexOf(' до ') !== -1;
  const amt = Number(amount);

  if (amt > 1000000) return '5';
  if (amt === 1000000) return isUnder ? '4' : '5';
  if (amt > 500000) return '4';
  if (amt === 500000) return isUnder ? '3' : '4';
  if (amt > 200000) return '3';
  if (amt === 200000) return isUnder ? '2' : '3';
  if (amt > 100000) return '2';
  if (amt === 100000) return isUnder ? '1' : '2';
  return '1';
}

export const AiListing: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [estates, setEstates] = useState<Estate[]>([]);

  useEffect(() => {
    const request = searchParams.get('request');

    debugger;
    const rq: GetEstateParams = {};

    if (request) {
      rq.price = getAmountFromRequest(request);
    }
    debugger;
    filterApi.getEstateWithParams(rq).then((r) => {
      setEstates(r.data.items);
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>{localField('selection')}</h1>
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
