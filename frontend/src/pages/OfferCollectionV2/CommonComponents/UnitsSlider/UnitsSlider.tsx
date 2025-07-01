import { FC, ReactElement } from 'react';
import styles from './UnitsSlider.module.scss';
import { baseConfig, Slider } from '@/entities/CardSlide/Slider';

export const UnitsSlider: FC<{ slides: ReactElement[] }> = ({ slides }) => {
  return (
    <Slider
      config={{
        ...baseConfig,
        className: `${baseConfig.className} ${styles.unitSlider}`,
        slidesToShow: 2.1,
        infinite: false,
        dots: false,
        centerPadding: '8px',
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
      slides={slides}
    />
  );
};
