import React, {Dispatch, FC, SetStateAction} from 'react';
import {Modal} from '@/shared/ui';
import { useWindowResize } from '@/shared/utils/useWindowResize';
import CreateCollection from "@/pages/CreateCollection";

type ModalGalleryProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};


export const ModalTemplates: FC<ModalGalleryProps> = ({
  open,
  setOpen
}) => {
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
          fullScreen: true,
          onClose: () => handleCloseModal(),
        }}
      >
        <CreateCollection />
      </Modal>
    </>
  );
};
