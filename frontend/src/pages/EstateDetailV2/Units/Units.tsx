import React, { FC, useEffect, useState } from 'react';
import { Section } from '@/pages/EstateDetail/Section/Section';
import { UnitsSlider } from '@/pages/EstateDetailV2/Units/UnitsSlider';
import { UnitsCards } from '@/pages/EstateDetailV2/Units/UnitsCards';
import { Unit, unitsApi } from '@/shared/api/units';
import { useLocation, useParams } from 'react-router';
import { useStatus } from '@/shared/utils/useStatus';

export const Units: FC = () => {
  const params = useParams();
  const token = localStorage.getItem('basicToken') || '';
  const { status, setStatus } = useStatus();
  const [units, setUnits] = useState<Unit[]>([]);

  console.log({ params });

  useEffect(() => {
    if (!!token && params.id) {
      setStatus('LOADING');
      unitsApi
        .getUnitsByEstateId({ token, id: params.id })
        .then(({ data }) => {
          setUnits(data.items);
          setStatus('SUCCESS');
        })
        .catch(() => {
          setStatus('ERROR');
        });
    }
  }, [token, params.id]);

  return (
    <Section title="Доступыне юниты" rightSide={<div>Right Side</div>}>
      {status === 'LOADING' && <div>Loading</div>}
      {status === 'SUCCESS' && !!units.length && (
        <div>
          <UnitsSlider items={units} />
          <UnitsCards items={units} />
        </div>
      )}
      {status === 'SUCCESS' && !units.length && <div>Empty</div>}
      {status === 'ERROR' && <div>Error</div>}
    </Section>
  );
};
