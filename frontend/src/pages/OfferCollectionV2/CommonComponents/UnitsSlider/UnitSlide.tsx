import React, {FC, useEffect, useState} from 'react';
import styles from './UnitsSlider.module.scss';
import { IconLayout } from '@/shared/assets/icons';
import { Button, Text } from '@/shared/ui';
import { Unit } from '@/shared/api/units';
import { useIntl } from 'react-intl';
import {useSearchParams} from "react-router";
import {AgentInfo, Estate, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {CardLayoutProps} from "@/pages/OfferCollectionV2/CardLayout/CardLayout";

export const UnitSlide: FC<{
    unit: Unit;
    estate: Estate & { collection: string; collectionId: string; agentInfo?: AgentInfo };
}> = ({ unit, estate }) => {
  const { formatMessage } = useIntl();
  const [searchParams, setSearchParams] = useSearchParams();
  const [like, setLike] = useState(false);
  const handleClickLikeButton = () => {
      setLike(!like);
  };

  useEffect(() => {
      if (like) {
          estateCollectionApi
              .saveLike({
                  collection: estate.collection,
                  collectionId: estate.collectionId!!,
                  email: estate.agentInfo?.login ?? 'arturmirov777@gmail.com',
                  title: estate.name,
                  url: window.location.href,
                  estateId: estate.id,
              })
              .then(() => console.log('success like'))
              .catch(() => console.log('error like'));
      }
  }, [like]);

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
            <Text variant="body2">
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
          disabled={!!searchParams.get('client') && searchParams.get('like') != 'true'}
          variant={like ? "red" : "base"}
          className={styles.unit__button}
          onClick={handleClickLikeButton}
        >
          <Text variant="body1" bold>
            {formatMessage({ id: 'like' })}
          </Text>
        </Button>
      </div>
    </div>
  );
};
