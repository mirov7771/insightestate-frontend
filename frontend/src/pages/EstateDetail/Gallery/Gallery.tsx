import { FC, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.scss';
import { Button } from '@/shared/ui';
import { Cross } from '@/shared/assets/icons';
import { useWindowResize } from '@/shared/utils/useWindowResize';

type GalleryProps = {
  images: string[];
};

const renderImg =
  ({
    images,
    isFullscreen,
    windowWidth,
  }: {
    images: ReactImageGalleryItem[];
    isFullscreen: boolean;
    windowWidth: number;
  }) =>
  (img: ReactImageGalleryItem) => {
    const currentImages = isFullscreen ? images.slice(0, 2) : images;

    const currentIndex = currentImages.findIndex(
      (currentImg) => currentImg.original === img.original
    );
    const nextItem = currentImages[currentIndex + 1] || currentImages[0];

    return (
      <div className="custom-slide">
        <img src={img.original} alt="" />
        {!isFullscreen && windowWidth >= 992 && <img src={nextItem.original} alt="" />}
      </div>
    );
  };

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const { width } = useWindowResize();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const renderImages: ReactImageGalleryItem[] = images.map((img) => ({
    original: img,
  }));

  return !!images.length ? (
    <section style={{ margin: '24px 0' }}>
      <ImageGallery
        items={renderImages}
        renderItem={renderImg({ images: renderImages, isFullscreen, windowWidth: width })}
        showPlayButton={false}
        onScreenChange={(fullscreen) => setIsFullscreen(fullscreen)}
        renderFullscreenButton={(onClick, isFullscreen) =>
          isFullscreen ? (
            <span className="button" onClick={onClick}>
              <Cross />
            </span>
          ) : (
            <Button variant="cta" className="button" onClick={onClick}>
              Больше фотографий +
            </Button>
          )
        }
        showNav={isFullscreen}
        infinite={false}
        useBrowserFullscreen={false}
        lazyLoad
        additionalClass="custom-gallery"
      />
    </section>
  ) : null;
};
