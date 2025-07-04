import { ComponentProps, FC, PropsWithChildren } from 'react';
import Dialog from '@mui/material/Dialog';
import styles from './Modal.module.scss';
import { Button } from '@/shared/ui';
import { IconX } from '@/shared/assets/icons';

type ModalProps = {
  dialogProps: Omit<ComponentProps<typeof Dialog>, 'children'>;
  withCloseIcon?: boolean;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  dialogProps,
  withCloseIcon = false,
  children,
}) => {
  return (
    <Dialog
      {...dialogProps}
      classes={{
        paper: styles.paper,
        ...dialogProps.classes,
      }}
    >
      {withCloseIcon && (
        <Button
          className={styles.close}
          icon={<IconX />}
          onClick={(e) => dialogProps.onClose?.(e, 'backdropClick')}
        />
      )}
      {children}
    </Dialog>
  );
};
