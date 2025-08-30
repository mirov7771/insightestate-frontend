import React, { FC, useCallback, useState } from 'react';
import { Segment, Text } from '@/shared/ui';
import { Section } from '@/pages/EstateDetail/Section/Section';
import { UnitsSlider } from '@/pages/EstateDetail/Units/UnitsSlider';
import { UnitsCards } from '@/pages/EstateDetail/Units/UnitsCards';
import { FormattedMessage } from 'react-intl';
import styles from './Units.module.scss';
import { IconCarouselHorizontal, IconLayoutList } from '@/shared/assets/icons';
import { UnitsFilter } from '@/pages/EstateDetail/Units/UnitsFilter/UnitsFilter';
import { useUnitsFilters } from '@/pages/EstateDetail/Units/UnitsContext';

export const Units: FC = () => {
  const { status, units } = useUnitsFilters();
  const [activeTab, setActiveTab] = useState(1);
  const handleChangeActiveTab = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

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
            <div className={styles.right}>
              <UnitsFilter className={styles.filter} />
              <Segment
                value={activeTab}
                onChange={handleChangeActiveTab}
                options={[
                  { value: 1, icon: <IconCarouselHorizontal /> },
                  { value: 2, icon: <IconLayoutList /> },
                ]}
              />
            </div>
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
