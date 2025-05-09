import React, {ChangeEvent, FC, FormEventHandler, useEffect, useState} from "react";
import styles from './Tariffs.module.scss';
import {estateCollectionApi, TariffRs} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {Button} from "@/shared/ui";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router";
import {Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {TModalProps} from "@/widgets/Modal/types";
import {
    StyledSwipeableDrawer,
    StyledUpperWrapperProgress,
    StyledWrapperProgress
} from "@/widgets/Modal/styled";
import {isMobile} from "react-device-detect";

const stripePromise = loadStripe('pk_test_51RHea2C7cCHxCxhsM3f9CEMPPLSwH2R5QxhH5S8xOYqu21jSZ9wXTOu1H4QaHvgXpyJCBBwJJUp8W3M8LVuXVR8A00ezo4qaAi');

export const Tariffs: FC = () => {
    const [tariffs, setTariffs] = useState<TariffRs>()
    const [extra, setExtra] = useState(true)
    const [extraPrice, setExtraPrice] = useState(0)
    const [extraId, setExtraId] = useState<string>()
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        const tariffId = searchParams.get('tariffId')
        if (tariffId) {
            estateCollectionApi.saveUserSubscription(tariffId)
                .then(() => {
                    localStorage.setItem('subscriptionId', tariffId)
                    navigate('/listing')
                }).catch((e) => console.log(e))
        } else {
            estateCollectionApi.getTariffs()
                .then((r) => setTariffs(r.data))
                .catch((e) => console.log(e))
        }
    }, []);

    const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setExtra(checked)
    }

    useEffect(() => {
        estateCollectionApi.getTariffs()
            .then((r) => {
                setTariffs(r.data)
                if (r.data.extra) {
                    setExtraPrice(r.data.extra[0].price ?? 0)
                    setExtraId(r.data.extra[0].id)
                }
            })
            .catch((e) => console.log(e))
    }, [extra]);

    return (
        <>
            <div style={{
                width: '30%',
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <h2>
                    Улучшите тариф
                </h2>
                <Spacer height={25} width={100}/>
                {tariffs?.extra[0] ?
                    <div style={{
                        display: 'inline-flex'
                    }}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={extra}
                                        onChange={handleChangeChecked}
                                    />
                                }
                                label="Неограниченные запросы в AI-подборщик"
                            />
                        </FormGroup>
                    </div>
                    : <></>
                }
            </div>
            <div style={{
                display: 'inline-flex',
                gap: '50px',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '50px'
            }}>
                {tariffs?.main.map((tariff) =>
                    <Tariff
                        title={tariff.title}
                        description={tariff.description}
                        price={(extra && tariff.price >0 ) ? tariff.price + extraPrice : tariff.price}
                        id={tariff.id}
                        extraId={extraId}
                        userSubscriptionId={localStorage.getItem('subscriptionId')}
                    />)}
            </div>
        </>
    )
}

const Tariff: FC<{
    id: string,
    title: string,
    description: string[],
    price: number,
    extraId?: string,
    userSubscriptionId?: string | null | undefined
}> = ({
    id, title, description, price, extraId, userSubscriptionId
}) => {
    const navigate = useNavigate();
    const [infoModal, setInfoModal] = useState(false);
    const handleOpenInfoModal = () => {
        setInfoModal(true);
    };
    const handleCloseInfoModal = () => {
        setInfoModal(false);
    };
    const handleTariff = () => {
        if (price === 0) {
            estateCollectionApi.saveUserSubscription(id).then(async () => {
                if (extraId) {
                    await estateCollectionApi.saveUserSubscription(extraId)
                }
                localStorage.setItem('subscriptionId', id)
                navigate('/listing')
            }).catch((e) => console.log(e))
        }
        handleOpenInfoModal()
    }

    const getSubscription = (): string => {
        if (userSubscriptionId) {
            if (userSubscriptionId === id) {
                return price > 0 ? `Мой тариф` : 'Продолжить бесплатно'
            }
        }
        return price > 0 ? `${price}$ в месяц` : 'Бесплатно'
    }

    return (
        <div className={styles.infoCard}>
            <h5>
                <strong>{title}</strong>
            </h5>
            <Spacer height={20} width={100}/>
            {description.map((desc) =>
                <>
                    <p>{desc}</p>
                    <Spacer height={10} width={100}/>
                </>)
            }
            <Spacer height={20} width={100}/>
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '87%',
                }}
            >
                <Button
                    onClick={handleTariff}
                    wide
                    variant={userSubscriptionId === id ? 'cta' : 'primary'}
                    style={{
                        border: '1px solid #04b0be',
                    }}
                    size='l'
                >{getSubscription()}
                </Button>
                <Spacer height={20} width={100}/>
            </div>
            <PayModal
                open={infoModal}
                onClose={handleCloseInfoModal}
                onOpen={handleOpenInfoModal}
                anchor="bottom"
                price={price * 100}
                bottom={10}
                id={id}
            />
        </div>
    )
}

const CheckoutForm: FC<{
    id: string,
    price: number
}> = ({price, id}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState<string>();

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        // Trigger form validation and wallet collection
        const {error: submitError} = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await estateCollectionApi.stripeSession(price);

        const {error} = await stripe!!.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret: res.data.clientSecret,
            confirmParams: {
                return_url: `https://insightestate.pro/tariffs?tariffId=${id}`,
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
            <Spacer height={20} width={100}/>
            <Button
                type="submit"
                size='l'
                wide
                disabled={!stripe || !elements}
            >
                Оплатить
            </Button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export const PayModal: FC<
    TModalProps & {
    bottom: number;
    price: number;
    id: string;
}
> = ({ onClose, open, anchor, onOpen, bottom, price, id }) => {
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
                        <Elements stripe={stripePromise} options={{
                            mode: 'payment',
                            amount: price > 0 ? price : 1,
                            currency: 'usd',
                            setup_future_usage: 'off_session',
                            appearance: {
                                theme: "flat",
                                labels: "floating"
                            }
                        }}>
                            <CheckoutForm
                                id={id}
                                price={price}
                            />
                        </Elements>
                    </StyledWrapperProgress>
                </StyledUpperWrapperProgress>
            </StyledSwipeableDrawer>
        </>
    );
};
