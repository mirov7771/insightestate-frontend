import {FC, useEffect, useState} from "react";
import {EstateCollection, estateCollectionApi} from "@/widgets/EstateCollection/api/estateCollectionApi";
import styles from "./UserCollection.module.scss"
import {DEFAULT_IMG} from "@/entities/Card/Card";

export const UserCollection: FC = () => {
    const [collection, setCollection] = useState<EstateCollection[]>([])
    const token = localStorage.getItem('basicToken')

    useEffect(() => {
        estateCollectionApi.getEstateCollection(token!!).then((r) => {
                setCollection(r.data.items)
            }
        ).catch(e => console.log(e))
    }, []);

    return (
        <div className={styles.wrap}>
            <h1 className={styles.header}>Подборки</h1>
            <div className={styles.collection}>
                {collection.map((item) => <ItemCollection {...item}/>)}
            </div>
        </div>
    )
}

const ItemCollection: FC<EstateCollection> = ({
    name,
    estates,
    id
}) => {
    const img = estates?.[0]?.exteriorImages?.[0] || estates?.[0]?.facilityImages?.[0] || estates?.[0]?.interiorImages?.[0] || DEFAULT_IMG;
    return (
        <div className={styles.card}>
            <a  href={`/offer-collection/${id}?byId=true`} className={styles.card__title}>
                <img className={styles.colImage} src={img} alt="" />
                <p>{name}</p>
                <div className={styles.card__details}>
                    <span className={styles.card__details__item}>Количество объектов: {estates.length}</span>
                </div>
            </a>
        </div>
    )
}
