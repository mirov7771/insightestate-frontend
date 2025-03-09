import {FC} from "react";
import {InfoCardProps} from "@/shared/constants/constants";
import styles from './InfoCard.module.scss';

export const InfoCard: FC<InfoCardProps> = ({
    title,
    description
}) => {
    return (
        <div className={styles.whyCard}>
            {title}
            {description}
        </div>
    )
}
