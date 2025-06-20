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
};

export const EstateSlider: FC<{ images: string[] }> = ({ images }) => {
  return <Slider images={images} config={config} />;
};
