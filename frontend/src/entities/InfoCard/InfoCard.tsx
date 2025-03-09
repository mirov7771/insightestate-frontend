import {FC} from "react";
import {InfoCardProps} from "@/shared/constants/constants";
import styles from './InfoCard.module.scss';
import { Dollar, Yes, Riskt, Man } from '@/shared/assets/icons';

export const InfoCard: FC<InfoCardProps> = ({
    title,
    image,
    description
}) => {

    return (
        <div className={styles.infoCard}>
            <div className={styles.icon}>
            {image === 'Yes' ? <Yes /> : (image === 'Man' ? <Man /> : (image === 'Riskt' ? <Riskt /> : <Dollar />))}
            </div>
            <h4 className={styles.title}>
                <strong>{title}</strong>
            </h4>
            <p>{description}</p>
        </div>
    )
}
