import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './ModalGallery.module.scss';
import { Modal } from '@/shared/ui';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import {Slider} from "@/pages/OfferCollectionV2/CommonComponents/Slider/Slider";

type ModalGalleryProps = {
  planImage: string | string[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  full?: boolean
};

export const ModalGallery: FC<ModalGalleryProps> = ({
  open,
  setOpen,
  planImage,
  full
}) => {
  const { width, height } = useWindowResize();
  const isFullScreen = width <= 768;
  const handleCloseModal = () => {
    setOpen(false);
  };
  const localStorageUserLocale = (localStorage.getItem('language') || 'ru') as 'ru' | 'en';

  return (
    <>
      <Modal
        withCloseIcon={true}
        dialogProps={{
          open,
          maxWidth: 'md',
          fullWidth: true,
          fullScreen: isFullScreen,
          onClose: () => handleCloseModal(),
        }}
      >
        <div className={styles.container}>
            {(typeof(planImage) === 'string') ?
                <img
                    src={planImage as string}
                    alt="plan"
                    style={
                        full ?
                            {
                                objectFit: 'contain',
                                width: '100%'
                            } :
                            {
                                objectFit: 'contain',
                                width: '100%',
                                height: height/1.2
                            }
                    }
                    onError={e => {
                        e.currentTarget.src = localStorageUserLocale === 'ru' ? "https://lotsof.properties/estate-images/DefaultUnitImg.png" : "https://lotsof.properties/estate-images/DefaultUnitImgEn.png"
                    }}
                /> :
                <Slider images={planImage as string[]} noClick={true}/>
            }
        </div>
      </Modal>
    </>
  );
};
