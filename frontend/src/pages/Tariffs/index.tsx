import React, {FC, useEffect, useState} from "react";
import styles from './Tariffs.module.scss';
import {estateCollectionApi, TariffRs} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {Spacer} from "@/widgets/Spacer/Spacer";
import {Button} from "@/shared/ui";

export const Tariffs: FC = () => {
    const [tariffs, setTariffs] = useState<TariffRs>()
    useEffect(() => {
        estateCollectionApi.getTariffs()
            .then((r) => setTariffs(r))
            .catch((e) => console.log(e))
    }, []);
    return (
        <>
            <div style={{
                display: 'inline-flex',
                gap: '35px',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '50px'
            }}>
                {tariffs?.main.map((tariff) => <Tariff {...tariff}/>)}
            </div>
            <Spacer height={25} width={100}/>
            {tariffs?.extra[0] ?
                <div style={{
                    display: 'block',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: '35px'
                }}>
                    <ExtraTariff {...tariffs?.extra[0]} />
                </div> :
                <></>
            }
        </>
    )
}

const Tariff: FC<{id: string,
    title: string,
    description: string[],
    price: number
}> = ({
    id, title, description, price
}) => {
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
                    onClick={() => {}}
                    wide
                    size='l'
                >
                    {
                        price > 0 ? `${price}$ в месяц` : 'Бесплатно'
                    }
                </Button>
                <Spacer height={20} width={100}/>
            </div>
        </div>
    )
}

const ExtraTariff: FC<{id: string,
    title: string,
    description: string[],
    price: number
}> = ({
    id, title, description, price
}) => {
    return (
        <div className={styles.infoCard2}>
            <h5>
                <strong>{title}</strong>
            </h5>
            <Spacer height={20} width={100}/>
            <p>{description[0]}</p>
            <div
                style={{
                    position: 'absolute',
                    right: '1rem',
                    bottom: '1rem',
                    width: '20%',
                }}
            >
                <Button
                    onClick={() => {}}
                    wide
                    size='l'
                >
                    ${price}$ в месяц
                </Button>
                <Spacer height={20} width={100}/>
            </div>
        </div>
    )
}
