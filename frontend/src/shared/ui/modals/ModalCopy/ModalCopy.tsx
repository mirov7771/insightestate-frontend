import React, { FC } from 'react';
import { Modal } from '@/shared/ui';

type ModalCopyProps = {
  open: boolean;
};

export const ModalCopy: FC<ModalCopyProps> = ({ open }) => {
  return <Modal dialogProps={{ open }}>content</Modal>;
};
