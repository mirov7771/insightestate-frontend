import {FC, useEffect, useState} from 'react';
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
import Select from "react-dropdown-select";

const stripePromise = loadStripe(
  'pk_live_51RHeZsCOsdKuuoFoklp479NrFUqz550aF7BqJgCK6xwOje2hjt4rZN2qSCkzHyF1pPnKg2WUo7G9Mx9YMSoQZcTn0046kh5S0c'
);

type Currency = {
    id: string,
    name: string,
    currency: number,
    symbol: string
}

const currency = [
    {
        id: 'thb',
        name: 'THB',
        currency: 33,
        symbol: '฿'
    },
    {
        id: 'usd',
        name: 'USD',
        currency: 1,
        symbol: '$'
    },
    {
        id: 'eur',
        name: 'EUR',
        currency: 0.87,
        symbol: '€'
    },
    {
        id: 'rub',
        name: 'RUB',
        currency: 81,
        symbol: '₽'
    }
]

const defaultCurrency = [
    {
        id: 'thb',
        name: 'THB',
        currency: 33,
        symbol: '฿'
    }
]

export const PayModal: FC<
  TModalProps & {
    bottom: number;
    id: string;
    price: number;
    extraId?: string;
  }
> = ({ onClose, open, anchor, onOpen, bottom, price, id, extraId }) => {
  const [currencyId, setCurrencyId] = useState<string>('thb')
  const [currencyRate, setCurrencyRate] = useState<number>(33)
  const [currencySymbol, setCurrencySymbol] = useState<string>('฿')
  const [finalPrice, setFinalPrice] = useState<number>(price * currencyRate)
  const [reload, setReload] = useState<boolean>(false)

 const select = (values: Currency[]) => {
     setCurrencyId(values[0].id);
     setCurrencyRate(values[0].currency);
     setCurrencySymbol(values[0].symbol);
 };

    useEffect(() => {
        setReload(false)
        if (currencyRate) setFinalPrice(currencyRate * price)
        setTimeout(() => setReload(true), 200)
    }, [currencyRate]);

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
              <Select
                  options={currency}
                  values={defaultCurrency}
                  labelField="name"
                  valueField="id"
                  closeOnSelect={true}
                  onChange={select}
                  style={SelectCurrencyProps}
              />
              {reload ?
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: 'payment',
                    amount: finalPrice > 0 ? finalPrice : 1,
                    currency: currencyId,
                    setup_future_usage: 'off_session',
                    appearance: {
                      theme: 'flat',
                      labels: 'floating',
                    },
                  }}
                >
                  <CheckoutForm
                      id={id}
                      price={finalPrice!!}
                      extraId={extraId}
                      symbol={currencySymbol!!}
                      currency={currencyId}
                  />
                </Elements> : <></>
              }
          </StyledWrapperProgress>
        </StyledUpperWrapperProgress>
      </StyledSwipeableDrawer>
    </>
  );
};

export const SelectCurrencyProps = {
    width: '200px',
    borderRadius: 15,
    height: '7vh',
};
