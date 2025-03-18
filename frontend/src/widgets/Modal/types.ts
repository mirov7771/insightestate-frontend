import { SwipeableDrawerProps } from '@mui/material';

export type TModalProps = {
  anchor: SwipeableDrawerProps['anchor'];
  onClose: SwipeableDrawerProps['onClose'];
  onOpen: SwipeableDrawerProps['onOpen'];
  open: SwipeableDrawerProps['open'];
};
