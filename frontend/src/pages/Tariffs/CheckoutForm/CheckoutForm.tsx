import {ChangeEvent, FC, useEffect, useState} from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Spacer } from '@/widgets/Spacer/Spacer';
import {Button, Input, Text} from '@/shared/ui';
import {useIntl} from "react-intl";

export const CheckoutForm: FC<{
  id: string;
  price: number;
  extraId?: string;
}> = ({ price, id, extraId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { formatMessage } = useIntl();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [finalPrice, setFinalPrice] = useState<number>(price * 33)
  const [promoCode, setPromoCode] = useState<string>('')

  const onChangePromoCode = (e: ChangeEvent<HTMLInputElement>) => {
    const promo = e.target.value;

    setPromoCode(promo?.toUpperCase());
  };

  useEffect(() => {
    debugger;
    if (promoCode === 'ACTIVE50') {
      setFinalPrice(finalPrice/2);
      localStorage.setItem('promo', promoCode)
    } else if (promoCode === 'WEBINAR15') {
      setFinalPrice(finalPrice * 0.85);
      localStorage.setItem('promo', promoCode)
    } else if (promoCode === 'START95' && id !== 'f1628768-72c2-40e4-9e6d-7c4ab7b1909b') {
      setFinalPrice(finalPrice * 0.05)
      localStorage.setItem('promo', promoCode)
    }
  }, [promoCode]);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();

    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await estateCollectionApi.stripeSession(finalPrice);

    const { error } = await stripe!!.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret: res.data.clientSecret,
      confirmParams: {
        return_url: extraId
          ? `https://lotsof.properties/tariffs?tariffId=${id}&extraTariffId=${extraId}`
          : `https://lotsof.properties/tariffs?tariffId=${id}`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Spacer height={20} width={100} />
      <Input
          onChange={onChangePromoCode}
          value={promoCode}
          name="promo"
          placeholder={formatMessage({ id: 'promo_code' })}
          yClass=".ym-record-key"
      />
      <Spacer height={10} width={100} />
      <Button type="submit" size="l" wide disabled={!stripe || !elements}>
        {formatMessage({ id: 'pay' })}{' '}{finalPrice/100}฿
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
