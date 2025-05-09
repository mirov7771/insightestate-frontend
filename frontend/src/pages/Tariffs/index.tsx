import React, {ChangeEvent, FC, useEffect, useState} from "react";
import styles from './Tariffs.module.scss';
import {estateCollectionApi, TariffRs} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {Button} from "@/shared/ui";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import {useNavigate} from "react-router";

export const Tariffs: FC = () => {
    const [tariffs, setTariffs] = useState<TariffRs>()
    const [extra, setExtra] = useState(true)
    const [extraPrice, setExtraPrice] = useState(0)
    const [extraId, setExtraId] = useState<string>()
    useEffect(() => {
        estateCollectionApi.getTariffs()
            .then((r) => setTariffs(r.data))
            .catch((e) => console.log(e))
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
        </div>
    )
}
