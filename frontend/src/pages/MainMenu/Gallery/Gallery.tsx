import {FC, useEffect, useState} from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.scss';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import { isMobile } from 'react-device-detect';
import {StyledSwipeableDrawer, StyledUpperWrapperProgress, StyledWrapperProgress} from "@/widgets/Modal/styled";
import {TModalProps} from "@/widgets/Modal/types";
import {SwipeableDrawerProps} from "@mui/material";


const InfoRu = [
    'https://insightestate.pro/estate-images/I1RU.png',
    'https://insightestate.pro/estate-images/I2RU.png',
    'https://insightestate.pro/estate-images/I3RU.png',
    'https://insightestate.pro/estate-images/I4RU.png',
    'https://insightestate.pro/estate-images/I5RU.png'
]

const InfoEn = [
    'https://insightestate.pro/estate-images/I1EN.png',
    'https://insightestate.pro/estate-images/I2EN.png',
    'https://insightestate.pro/estate-images/I3EN.png',
    'https://insightestate.pro/estate-images/I4EN.png',
    'https://insightestate.pro/estate-images/I5EN.png'
]

const HeartRu = [
    'https://insightestate.pro/estate-images/H1RU.png',
    'https://insightestate.pro/estate-images/H2RU.png',
    'https://insightestate.pro/estate-images/H3RU.png',
    'https://insightestate.pro/estate-images/H4RU.png'
]

const HeartEn = [
    'https://insightestate.pro/estate-images/H1EN.png',
    'https://insightestate.pro/estate-images/H2EN.png',
    'https://insightestate.pro/estate-images/H3EN.png',
    'https://insightestate.pro/estate-images/H4EN.png'
]

const TRu = [
    'https://insightestate.pro/estate-images/T1RU.png'
]

const TEn = [
    'https://insightestate.pro/estate-images/T1EN.png'
]

type GalleryProps = {
  type: 'INFO_RU' | 'HEART_RU' | 'MESSAGE_RU' | 'INFO_EN' | 'HEART_EN' | 'MESSAGE_EN';
};

const renderImg =
  ({
    images,
    isFullscreen,
    windowWidth,
    onClick
  }: {
    images: ReactImageGalleryItem[];
    isFullscreen: boolean;
    windowWidth: number;
    onClick: SwipeableDrawerProps['onClose'];
  }) =>
  (img: ReactImageGalleryItem) => {
    const currentImages = isFullscreen ? images.slice(0, 2) : images;

    const currentIndex = currentImages.findIndex(
      (currentImg) => currentImg.original === img.original
    );
    const nextItem = currentImages[currentIndex + 1] || currentImages[0];

    return (
      <div className={isMobile ? 'custom-slide_mobile' : 'custom-slide'} onClick={onClick}>
        <img src={img.original} alt="" />
        {!isFullscreen && windowWidth >= 992 && <img src={nextItem.original} alt="" />}
      </div>
    );
  };

export const Gallery: FC<TModalProps & GalleryProps> = ({
    open,
    onClose,
    anchor,
    onOpen,
    type
}) => {
  const { width } = useWindowResize();
  const [renderImages, setRenderImages] = useState<ReactImageGalleryItem[]>([])

  useEffect(() => {
      if (!open) {
          setRenderImages([])
      } else {
          if (type === 'INFO_RU') {
              setRenderImages(
                  InfoRu.map((img) => ({
                      original: img
                  }))
              )
          } else if (type === 'MESSAGE_RU') {
              setRenderImages(
                  TRu.map((img) => ({
                      original: img
                  }))
              )
          } else if (type === 'HEART_RU') {
              setRenderImages(
                  HeartRu.map((img) => ({
                      original: img
                  }))
              )
          } else if (type === 'INFO_EN') {
              setRenderImages(
                  InfoEn.map((img) => ({
                      original: img
                  }))
              )
          } else if (type === 'MESSAGE_EN') {
              setRenderImages(
                  TEn.map((img) => ({
                      original: img
                  }))
              )
          } else if (type === 'HEART_EN') {
              setRenderImages(
                  HeartEn.map((img) => ({
                      original: img
                  }))
              )
          }
      }
  }, [open]);

  return (
      <StyledSwipeableDrawer
          onOpen={onOpen}
          open={open}
          onClose={onClose}
          anchor={anchor}
          disableSwipeToOpen
          bottom={isMobile ? 2 : 15}
          isMobile={isMobile}
          transparent
      >
          <StyledUpperWrapperProgress>
              {renderImages.length > 0 ?
                  <ImageGallery
                      items={renderImages}
                      renderItem={renderImg({ images: renderImages, isFullscreen: true, windowWidth: width, onClick: onClose })}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      showNav={true}
                      infinite={false}
                      useBrowserFullscreen={false}
                      lazyLoad
                      autoPlay={false}
                      additionalClass="custom-gallery"
                  /> : <></>
              }
          </StyledUpperWrapperProgress>
      </StyledSwipeableDrawer>
  )
};
