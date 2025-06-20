import React, { FC, useMemo, useState } from 'react';
import { Unit } from '@/shared/api/units';
import styles from './UnitsSlider.module.scss';
import { Button, Text } from '@/shared/ui';
import { baseConfig, Slider } from '@/entities/CardSlide/Slider';
import { useIntl } from 'react-intl';
import PlaceholderImg from '../assets/placeholder.png';

export const UnitsSlider: FC<{ items: Unit[] }> = ({ items }) => {
  const { formatMessage } = useIntl();
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
            <div className={styles.unit} key={unit.id}>
              <div className={styles.unit__name}>
                <Text variant="heading4">
                  {formatMessage({ id: `units.bedroom.${unit.rooms}` })}, {unit.square} м2 - $
                  {unit.price}
                </Text>
                {/*<Text variant="body2">
                  <b>$20,000</b> доход от аренды в год
                </Text>
                <Text variant="body2">
                  <b>5 лет</b> срок окупаемости
                </Text>*/}
              </div>
              <div className={styles.info}>
                {unit.floor && (
                  <div className={styles.info__card}>
                    <Text variant="heading5">{unit.floor}</Text>
                    <Text variant="caption1" className={styles.info__card_description}>
                      {formatMessage({ id: 'units.floor' })}
                    </Text>
                  </div>
                )}
                <div className={styles.info__card}>
                  <Text variant="heading5">{unit.number}</Text>
                  <Text variant="caption1" className={styles.info__card_description}>
                    {formatMessage({ id: 'units.number' })}
                  </Text>
                </div>
                <div className={styles.info__card}>
                  <Text variant="heading5">${unit.priceSq}</Text>
                  <Text variant="caption1" className={styles.info__card_description}>
                    {formatMessage({ id: 'units.pricePerMeter' })}
                  </Text>
                </div>
              </div>
              <div className={styles.unit__plan}>
                <img src={unit.planImage || PlaceholderImg} alt="plan" loading="lazy" />
              </div>
              {/*<Button wide variant="primary" className={styles.unit__button}>
                <Text variant="heading4">Добавить в подборку</Text>
              </Button>*/}
            </div>
          ) : (
            <div key={unit.id} />
          )
        )}
      />
    </section>
  );
};
