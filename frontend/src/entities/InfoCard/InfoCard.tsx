import {FC} from "react";
import {InfoCardProps} from "@/shared/constants/constants";
import styles from './InfoCard.module.scss';
import { Dollar, Yes, Riskt, Man } from '@/shared/assets/icons';

export const InfoCard: FC<InfoCardProps & {isMobile: boolean}> = ({
    title,
    image,
    description,
    isMobile
}) => {

    return (
        <div className={isMobile ? styles.infoCard_mobile : styles.infoCard}>
            <div className={isMobile ? styles.icon_mobile : styles.icon}>
            {image === 'Yes' ? <Yes /> : (image === 'Man' ? <Man /> : (image === 'Riskt' ? <Riskt /> : <Dollar />))}
            </div>
            <h4 className={isMobile ? styles.title_mobile : styles.title}>
                <strong>{title}</strong>
            </h4>
            {isMobile ? <p className={styles.p_mobile}>{description}</p> : <p>{description}</p>}
        </div>
    )
}
