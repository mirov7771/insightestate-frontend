import React, { FC } from 'react';
import styles from './UnitsSlider.module.scss';
import { IconLayout } from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';
import { Unit } from '@/shared/api/units';
import { useIntl } from 'react-intl';

export const UnitSlide: FC<{ unit: Unit }> = ({ unit }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.unit}>
      <div className={styles.unit__plan}>
        {unit.planImage ? (
          <img src={unit.planImage} alt="plan" loading="lazy" />
        ) : (
          <div className={styles.unit__plan_placeholder}>
            <IconLayout />
            <Text variant="body1" bold align="center">
              {formatMessage({ id: 'units.plan' })}
            </Text>
          </div>
        )}
      </div>
      <div className={styles.unit__content}>
        <Text variant="subheading2">
          {formatMessage({ id: `units.bedroom.${unit.rooms}` })}, {unit.square} м<sup>2</sup>
          {!!unit.floor && `, ${unit.floor} ${formatMessage({ id: 'units.floor' })}`}
          {!!unit.number && `, ${unit.number}`}
        </Text>
        <div className={styles.unit__price}>
          {!!unit.price && (
            <Text variant="heading4" as="p">
              ${unit.price}
            </Text>
          )}
          {!!unit.priceSq && (
            <Text variant="body2" className={styles.unit__price_sq}>
              &nbsp;${unit.priceSq} м<sup>2</sup>
            </Text>
          )}
        </div>
        {/*<div className={styles.unit__info}>
                    <div>
                      <Text variant="body1" className={styles.info__card_description}>
                        Доход в год
                      </Text>
                      <Text variant="body1" bold>
                        $20,000
                      </Text>
                    </div>
                    <div>
                      <Text variant="body1" className={styles.info__card_description}>
                        Окупаемость
                      </Text>
                      <Text variant="body1" bold>
                        5 лет
                      </Text>
                    </div>
                  </div>*/}
        <Button
          wide
          disabled
          variant="base"
          className={styles.unit__button}
          onClick={() => {
            // setUnitId(unit.id);
            // setUserCollectionModal(true);
          }}
        >
          <Text variant="body1" bold>
            {formatMessage({ id: 'like' })}
          </Text>
        </Button>
      </div>
    </div>
  );
};
