import React, {ChangeEvent, FC, useEffect, useState} from 'react';
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
import {Button, Input, Text} from "@/shared/ui";
import styles from "@/pages/OfferCollectionV2/ContactManager/ContactManager.module.scss";
import {useIntl} from "react-intl";
import {useNavigate} from "react-router";

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
    },
    {
        id: 'aud',
        name: 'AUD',
        currency: 1.54,
        symbol: 'A$'
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
  const [isQr, setIsQr] = useState<boolean>(false)
  const { formatMessage } = useIntl();
    const [promoCode, setPromoCode] = useState<string>('')
    const navigate = useNavigate();

    const onChangePromoCode = (e: ChangeEvent<HTMLInputElement>) => {
        const promo = e.target.value;

        setPromoCode(promo?.toUpperCase());
    };

 const select = (values: Currency[]) => {
     setCurrencyId(values[0].id);
     setCurrencyRate(values[0].currency);
     setCurrencySymbol(values[0].symbol);
 };

    useEffect(() => {
        setReload(false)
        if (currencyRate) {
            setFinalPrice(currencyRate * price)
            if (currencyId === 'thb') {
                setReload(false)
                setIsQr(true)
            } else {
                setIsQr(false)
                setTimeout(() => setReload(true), 200)
            }
        }
    }, [currencyRate]);

    useEffect(() => {
        if (promoCode === 'ACTIVE50') {
            setFinalPrice(finalPrice/2);
            localStorage.setItem('promo', promoCode)
        } else if (promoCode === 'WEBINAR15') {
            setFinalPrice(finalPrice * 0.85);
            localStorage.setItem('promo', promoCode)
        } else if (promoCode === 'START95' && id !== 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b') {
            setFinalPrice(finalPrice * 0.05)
            localStorage.setItem('promo', promoCode)
        } else if (promoCode === 'WELCOME30') {
            setFinalPrice(finalPrice * 0.70)
            localStorage.setItem('promo', promoCode)
        }
    }, [promoCode]);

    const enableTariff = () => {
        navigate({
            pathname: '/tariffs',
            search: `tariffId=${id}`
        })
        window.location.reload()
    }

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
              {isQr ?
                  <div style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px'

                  }}>
                      <Text variant="body1">
                          {formatMessage({ id: 'qr_pay_title' })}{' '}${finalPrice / 100} THB
                      </Text>
                      <img
                          width={isMobile ? 300 : 400}
                          height={isMobile ? 400: 500}
                          src={`https://lotsof.properties/estate-images/qr_pay.JPG`}
                          alt=""
                      />
                      <Text variant="body2" as="span">
                          {formatMessage({ id: 'qr_pay_desc' })}
                      </Text>
                      <Input
                          onChange={onChangePromoCode}
                          value={promoCode}
                          name="promo"
                          placeholder={formatMessage({ id: 'promo_code' })}
                          yClass=".ym-record-key"
                      />
                      <Button type="submit" size="l" wide onClick={enableTariff}>
                          {formatMessage({ id: 'qr_pay_button' })}
                      </Button>
                  </div>
              : <></>}
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
