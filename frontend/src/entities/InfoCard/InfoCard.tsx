import {FC} from "react";
import {InfoCardProps} from "@/shared/constants/constants";
import styles from './InfoCard.module.scss';

export const InfoCard: FC<InfoCardProps> = ({
    title,
    description
}) => {
    return (
        <div className={styles.whyCard}>
            <h4 className={styles.title}>
                <strong>{title}</strong>
            </h4>
            <p>{description}</p>
        </div>
    )
}
