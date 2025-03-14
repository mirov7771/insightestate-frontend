import { SwipeableDrawerProps } from '@mui/material'

export type TModalProps = {
    open: SwipeableDrawerProps['open']
    onClose: SwipeableDrawerProps['onClose']
    onOpen: SwipeableDrawerProps['onOpen']
    anchor: SwipeableDrawerProps['anchor']
}
