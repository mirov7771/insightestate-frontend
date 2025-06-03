import { FC } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CardSlide.module.scss';
import { OfferCollectionArrowRight, OfferCollectionChevronLeft } from '@/shared/assets/icons';

const SampleNextArrow = (props: any) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <OfferCollectionArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <OfferCollectionChevronLeft />
    </div>
  );
};

const config: Settings = {
  dots: true,
  infinite: true,
  arrows: true,
  lazyLoad: 'progressive',
  className: styles.slider,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

type SliderProps = {
  images: string[];
};

export const Slider: FC<SliderProps> = ({ images }) => {
  return (
    <SlickSlider {...config}>
      {images.map((img) => (
        <img src={img} key={img} alt="" />
      ))}
    </SlickSlider>
  );
};
