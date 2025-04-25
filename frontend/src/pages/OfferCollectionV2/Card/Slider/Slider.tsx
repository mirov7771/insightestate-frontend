import { FC } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import styles from './Slider.module.scss';
import Img1 from './assets/image-1.png';
import Img2 from './assets/image-2.png';
import { Text } from '@/shared/ui';

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  centerPadding: '16px',
  centerMode: true,
};

const CustomSlide = (props: { description: string; img: string }) => {
  const { img, description } = props;

  return (
    <div className={styles.slide}>
      <img src={img} alt="" />
      <div className={styles.description}>
        <Text variant="body1">{description}</Text>
      </div>
    </div>
  );
};

export const Slider: FC = () => {
  return (
    <SlickSlider {...settings} className={styles.customSlider}>
      <CustomSlide img={Img1} description="Удобный заезд на парковку" />
      <CustomSlide img={Img2} description="Laguna Beach Residences Bayside" />
      <CustomSlide img={Img1} description="Удобный заезд на парковку" />
      <CustomSlide img={Img2} description="Laguna Beach Residences Bayside" />
    </SlickSlider>
  );
};
