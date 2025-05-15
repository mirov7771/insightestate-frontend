import React, { FC } from 'react';
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
  'pk_test_51RHea2C7cCHxCxhsM3f9CEMPPLSwH2R5QxhH5S8xOYqu21jSZ9wXTOu1H4QaHvgXpyJCBBwJJUp8W3M8LVuXVR8A00ezo4qaAi'
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
                currency: 'usd',
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
