import { FC, ReactNode } from 'react';
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

export const baseConfig: Settings = {
  dots: true,
  infinite: true,
  arrows: true,
  lazyLoad: 'progressive',
  className: styles.slider,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

type SliderProps = {
  config?: Settings;
  images?: string[];
  slides?: ReactNode[];
};

export const Slider: FC<SliderProps> = ({ images, config = baseConfig, slides }) => {
  const renderSlides = slides || images;

  return (
    <SlickSlider {...config}>
      {Array.isArray(renderSlides) &&
        typeof renderSlides?.[0] === 'string' &&
        images?.map((img) => <img src={img} key={img} alt="" loading="lazy" />)}
      {Array.isArray(renderSlides) && typeof renderSlides?.[0] !== 'string' && slides}
    </SlickSlider>
  );
};
