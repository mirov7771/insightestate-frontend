import { FC } from 'react';
import styles from './EstateSlider.module.scss';
import { baseConfig, Slider } from '@/entities/CardSlide/Slider';
import { Settings } from 'react-slick';

const config: Settings = {
  ...baseConfig,
  className: styles.slider,
  dots: false,
  slidesToShow: 1.3,
  infinite: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        infinite: false,
      },
    },
    { breakpoint: 991, settings: {} },
  ],
};

export const EstateSlider: FC<{ images: string[] }> = ({ images }) => {
  return <Slider images={images} config={config} />;
};
