import { FC } from 'react';
import { TModalProps } from '@/widgets/Modal/types';
import {
  StyledSwipeableDrawer,
  StyledUpperWrapperProgress,
  StyledWrapperProgress,
} from '@/widgets/Modal/styled';
import { isMobile } from 'react-device-detect';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(
  'pk_live_51RHeZsCOsdKuuoFoklp479NrFUqz550aF7BqJgCK6xwOje2hjt4rZN2qSCkzHyF1pPnKg2WUo7G9Mx9YMSoQZcTn0046kh5S0c'
);

export const PayModal: FC<
  TModalProps & {
    bottom: number;
    id: string;
    price: number;
    extraId?: string;
  }
> = ({ onClose, open, anchor, onOpen, bottom, price, id, extraId }) => {
  return (
    <>
      <StyledSwipeableDrawer
        onOpen={onOpen}
        open={open}
        onClose={onClose}
        anchor={anchor}
        disableSwipeToOpen
        bottom={bottom}
        isMobile={isMobile}
      >
        <StyledUpperWrapperProgress>
          <StyledWrapperProgress>
            <Elements
              stripe={stripePromise}
              options={{
                mode: 'payment',
                amount: price > 0 ? price : 1,
                currency: 'thb',
                setup_future_usage: 'off_session',
                appearance: {
                  theme: 'flat',
                  labels: 'floating',
                },
              }}
            >
              <CheckoutForm id={id} price={price} extraId={extraId} />
            </Elements>
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
      </StyledSwipeableDrawer>
    </>
  );
};
