import { FC } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.scss';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import { isMobile } from 'react-device-detect';
import {StyledSwipeableDrawer, StyledUpperWrapperProgress, StyledWrapperProgress} from "@/widgets/Modal/styled";
import {TModalProps} from "@/widgets/Modal/types";
import {SwipeableDrawerProps} from "@mui/material";



type GalleryProps = {
  images: string[];
  open: boolean;
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
    images,
    open,
    onClose,
    anchor,
    onOpen
}) => {
  const { width } = useWindowResize();
  const isFullScreen = width <= 768;
  const renderImages: ReactImageGalleryItem[] = images.map((img) => ({
    original: img
  }));

  return (
      <StyledSwipeableDrawer
          onOpen={onOpen}
          open={open}
          onClose={onClose}
          anchor={anchor}
          disableSwipeToOpen
          bottom={isMobile ? 1 : 15}
          isMobile={isMobile}
          transparent
      >
          <StyledUpperWrapperProgress>
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
                  />
          </StyledUpperWrapperProgress>
      </StyledSwipeableDrawer>
  )
};
