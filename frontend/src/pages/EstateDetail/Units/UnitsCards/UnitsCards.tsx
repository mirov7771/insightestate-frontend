import React, { FC, useState } from 'react';
import { Unit } from '@/shared/api/units';
import styles from './UnitsCards.module.scss';
import PlaceholderImg from '../assets/placeholder.png';
import { Button, ModalAddToCollection, Text } from '@/shared/ui';
import { IconPlus } from '@/shared/assets/icons';
import { useIntl } from 'react-intl';
import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router';

type UnitsCardsProps = { items: Unit[] };

export const UnitsCards: FC<UnitsCardsProps> = ({ items }) => {
  const { formatMessage } = useIntl();
  const params = useParams();
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const [unitId, setUnitId] = useState('');
  const currency = localStorage.getItem('currency') || '฿'
  return (
    <section className={styles.container}>
      {items.map((unit) => (
        <div className={isMobile ? styles.unit_mobile : styles.unit}>
          <div className={styles.unit__plan}>
            <div className={styles.unit__plan__img}>
              <img
                  src={unit.planImage || PlaceholderImg}
                  alt="plan"
                  onError={e => {
                      e.currentTarget.src = "https://lotsof.properties/7b888085d5a1507587c1.png"
                  }}
              />
            </div>
            <div className={styles.unit__plan__info}>
              <Text variant="body1" className={styles.unit__name}>
                {formatMessage({ id: `units.bedroom.${unit.rooms}` })}, {unit.square}&nbsp;м
                <sup>2</sup>
                {isMobile && `, ${formatMessage({ id: 'units.number' })} ${unit.number}`}
              </Text>
              <Text variant="heading5">{currency}{unit.price}</Text>
            </div>
          </div>
          {/*<div className={styles.unit__base}>*/}
          {/*  <Text variant="body1" className={styles.unit__name}>*/}
          {/*    {formatMessage({ id: 'units.floor' })}*/}
          {/*  </Text>*/}
          {/*  <Text variant="heading5">{unit.floor || '-'}</Text>*/}
          {/*</div>*/}
          {isMobile ? (
            <></>
          ) : (
            <div className={styles.unit__base}>
              <Text variant="body1" className={styles.unit__name}>
                {formatMessage({ id: 'units.number' })}
              </Text>
              <Text variant="heading5">{unit.number}</Text>
            </div>
          )}
          {/*<div className={styles.unit__base}>*/}
          {/*  <Text variant="body1" className={styles.unit__name}>*/}
          {/*    {formatMessage({ id: 'units.annualIncome' })}*/}
          {/*  </Text>*/}
          {/*  <Text variant="heading5">&ndash;</Text>*/}
          {/*</div>*/}
          {/*<div className={styles.unit__base}>*/}
          {/*  <Text variant="body1" className={styles.unit__name}>*/}
          {/*    {formatMessage({ id: 'units.payback' })}*/}
          {/*  </Text>*/}
          {/*  <Text variant="heading5">&ndash;</Text>*/}
          {/*</div>*/}
          <div className={`${styles.unit__base} ${styles.unit__base_center}`}>
            <Button
              variant="primary"
              className={styles.unit__button}
              onClick={() => {
                setUnitId(unit.id);
                setUserCollectionModal(true);
              }}
            >
              <IconPlus />
            </Button>
          </div>
        </div>
      ))}
      <ModalAddToCollection
        open={userCollectionModal}
        setOpen={setUserCollectionModal}
        estateId={params.id || ''}
        unitId={unitId}
      />
    </section>
  );
};
