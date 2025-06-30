import React, { FC, useCallback, useEffect, useState } from 'react';
import { Segment, Text } from '@/shared/ui';
import { Section } from '@/pages/EstateDetail/Section/Section';
import { UnitsSlider } from '@/pages/EstateDetail/Units/UnitsSlider';
import { UnitsCards } from '@/pages/EstateDetail/Units/UnitsCards';
import { Unit, unitsApi } from '@/shared/api/units';
import { useParams } from 'react-router';
import { useStatus } from '@/shared/utils/useStatus';
import { FormattedMessage } from 'react-intl';
import styles from './Units.module.scss';
import { CarouselHorizontal, LayoutList } from '@/shared/assets/icons';

export const Units: FC = () => {
  const params = useParams();
  const token = localStorage.getItem('basicToken') || '';
  const { status, setStatus } = useStatus();
  const [units, setUnits] = useState<Unit[]>([]);
  const [activeTab, setActiveTab] = useState(1);
  const handleChangeActiveTab = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  useEffect(() => {
    if (params.id) {
      setStatus('LOADING');
      unitsApi
        .getUnitsByEstateId({ id: params.id })
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
    <>
      {units.length < 1 ? (
        <></>
      ) : (
        <Section
          title={
            <>
              <FormattedMessage id="units.available_units" />
              {!!units.length && (
                <Text variant="heading3" className={styles.info}>
                  {units.length}
                </Text>
              )}
            </>
          }
          rightSide={
            <Segment
              value={activeTab}
              onChange={handleChangeActiveTab}
              options={[
                { value: 1, icon: <CarouselHorizontal /> },
                { value: 2, icon: <LayoutList /> },
              ]}
            />
          }
        >
          {status === 'LOADING' && <div>Loading</div>}
          {status === 'SUCCESS' && !!units.length && (
            <div>
              <div className={activeTab !== 1 ? styles.hidden : ''}>
                <UnitsSlider items={units} />
              </div>
              <div className={activeTab !== 2 ? styles.hidden : ''}>
                <UnitsCards items={units} />
              </div>
            </div>
          )}
          {status === 'SUCCESS' && !units.length && <div>Empty</div>}
          {status === 'ERROR' && <div>Error</div>}
        </Section>
      )}
    </>
  );
};
