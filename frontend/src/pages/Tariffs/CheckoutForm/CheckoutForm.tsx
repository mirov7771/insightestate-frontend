import { ChangeEvent, FC, useState } from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { estateCollectionApi } from '@/widgets/EstateCollection/api/estateCollectionApi';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { Button } from '@/shared/ui';

export const CheckoutForm: FC<{
  id: string;
  price: number;
  extraId?: string;
}> = ({ price, id, extraId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();

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
    const res = await estateCollectionApi.stripeSession(price);

    const { error } = await stripe!!.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret: res.data.clientSecret,
      confirmParams: {
        return_url: extraId
          ? `https://insightestate.pro/tariffs?tariffId=${id}&extraTariffId=${extraId}`
          : `https://insightestate.pro/tariffs?tariffId=${id}`,
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
      <Button type="submit" size="l" wide disabled={!stripe || !elements}>
        Оплатить
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
