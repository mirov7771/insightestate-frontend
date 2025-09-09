import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './ModalGallery.module.scss';
import { Modal } from '@/shared/ui';
import { useWindowResize } from '@/shared/utils/useWindowResize';

type ModalGalleryProps = {
  planImage: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalGallery: FC<ModalGalleryProps> = ({
  open,
  setOpen,
  planImage
}) => {
  const { width, height } = useWindowResize();
  const isFullScreen = width <= 768;
  const handleCloseModal = () => {
    setOpen(false);
  };

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
            <img
                src={planImage}
                alt="plan"
                style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: height/1.2
                }}
            />
        </div>
      </Modal>
    </>
  );
};
