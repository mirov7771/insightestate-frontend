import React, { FC, useMemo, useState } from 'react';
import { Unit } from '@/shared/api/units';
import styles from './UnitsSlider.module.scss';
import { Button, ModalAddToCollection, Text } from '@/shared/ui';
import { baseConfig, Slider } from '@/entities/CardSlide/Slider';
import { useIntl } from 'react-intl';
import { IconLayout } from '@/shared/assets/icons';
import { useParams } from 'react-router';
import {ModalGallery} from "@/shared/ui/modals/ModalGallery";

type UnitsSliderProps = { items: Unit[] };

export const UnitsSlider: FC<UnitsSliderProps> = ({ items }) => {
  const { formatMessage } = useIntl();
  const params = useParams();
  const [userCollectionModal, setUserCollectionModal] = useState(false);
  const [unitId, setUnitId] = useState('');
  const virtualizationWindow = 7;
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleSlides = useMemo(() => {
    const total = items.length;
    const halfWindow = Math.floor(virtualizationWindow / 2);

    let start = activeIndex - halfWindow;
    let end = activeIndex + halfWindow;

    if (start < 0) {
      end += -start;
      start = 0;
    }
    if (end > total - 1) {
      const diff = end - (total - 1);

      start = Math.max(0, start - diff);
      end = total - 1;
    }

    const visible = new Set<number>();

    for (let i = start; i <= end; i++) {
      visible.add(i);
    }
    return visible;
  }, [activeIndex, items.length, virtualizationWindow]);

  const handleAfterChange = (current: number) => {
    setActiveIndex(current);
  };

  return (
    <section className={styles.container}>
      <Slider
        config={{
          ...baseConfig,
          className: `${baseConfig.className} ${styles.slider}`,
          slidesToShow: 2.1,
          infinite: false,
          dots: false,
          centerPadding: '8px',
          afterChange: handleAfterChange,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1.3,
                arrows: false,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1.6,
                dots: true,
                arrows: false,
              },
            },
          ],
        }}
        slides={items.map((unit, idx) =>
          visibleSlides.has(idx) ? (
            <div key={unit.id}>
              <div className={styles.unit}>
                <div className={styles.unit__name}>
                  <Text variant="subheading2">
                    {formatMessage({ id: `units.bedroom.${unit.rooms}` })}, {unit.square} м
                    <sup>2</sup>
                    {!!unit.floor && `, ${unit.floor} ${formatMessage({ id: 'units.floor' })}`}
                    {!!unit.number && `, ${unit.number}`}
                  </Text>
                  {!!unit.price && (
                    <Text variant="heading4" as="p">
                      ${unit.price}
                      {!!unit.priceSq && (
                        <Text variant="body1" className={styles.unit__price_sq}>
                          &nbsp;${unit.priceSq} м<sup>2</sup>
                        </Text>
                      )}
                    </Text>
                  )}
                </div>
                {/*<div className={styles.info}>
                <div className={styles.info__card}>
                  <Text variant="body1" className={styles.info__card_description}>
                    Доход в год
                  </Text>
                  <Text variant="body1" bold>
                    $20,000
                  </Text>
                </div>
                <div className={styles.info__card}>
                  <Text variant="body1" className={styles.info__card_description}>
                    Окупаемость
                  </Text>
                  <Text variant="body1" bold>
                    5 лет
                  </Text>
                </div>
              </div>*/}
                <div className={styles.unit__plan}>
                  {unit.planImage ? (
                      <UnitImageView plan={unit.planImage}/>
                  ) : (
                    <div className={styles.unit__plan_placeholder}>
                      <IconLayout />
                      <Text variant="body1" bold align="center">
                        {formatMessage({ id: 'units.plan' })}
                      </Text>
                    </div>
                  )}
                </div>
                <Button
                  wide
                  variant="primary"
                  className={styles.unit__button}
                  onClick={() => {
                    setUnitId(unit.id);
                    setUserCollectionModal(true);
                  }}
                >
                  <Text variant="body1" bold>
                    {formatMessage({ id: 'add_to_collection' })}
                  </Text>
                </Button>
              </div>
            </div>
          ) : (
            <div key={unit.id} />
          )
        )}
      />
      <ModalAddToCollection
        open={userCollectionModal}
        setOpen={setUserCollectionModal}
        estateId={params.id || ''}
        unitId={unitId}
      />
    </section>
  );
};

export const UnitImageView: FC<{
    plan: string
}> = ({ plan }) => {
    const [galleryModal, setGalleryModal] = useState(false);
    return (
        <>
            <img
                src={plan}
                alt="plan"
                loading="lazy"
                style={{
                    objectFit: 'contain',
                    cursor: 'pointer'
                }}
                onClick={() => setGalleryModal(true)}
            />
            <ModalGallery
                planImage={plan}
                open={galleryModal}
                setOpen={setGalleryModal}
            />
        </>
    )
}
