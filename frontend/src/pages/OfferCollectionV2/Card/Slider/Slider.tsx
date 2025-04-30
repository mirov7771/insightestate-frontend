import { FC } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import { OfferCollectionArrowRight, OfferCollectionArrowLeft } from '@/shared/assets/icons';

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
      <OfferCollectionArrowLeft />
    </div>
  );
};

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  centerPadding: '16px',
  centerMode: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        centerPadding: '16px',
        centerMode: true,
      },
    },
    {
      breakpoint: 20000,
      settings: {
        rows: 1,
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      },
    },
  ],
};

const CustomSlide = (props: { description: string; img: string }) => {
  const { img, description } = props;

  return (
    <div className={styles.slide}>
      <img src={img} alt="" />
      {/*Пока убираем комменты к фото  */}
      {/*<div className={styles.description}>*/}
      {/*  <Text variant="body1">{description}</Text>*/}
      {/*</div>*/}
    </div>
  );
};

export const Slider: FC<{ images: string[] }> = ({ images }) => {
  return (
    <SlickSlider {...settings} className={styles.customSlider}>
      {images.map((image) => (
        <CustomSlide img={image} description="Удобный заезд на парковку" />
      ))}
    </SlickSlider>
  );
};
