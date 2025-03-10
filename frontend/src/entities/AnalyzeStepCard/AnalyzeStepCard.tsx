import {FC} from "react";
import {AnalyzeStepProps} from "@/shared/constants/constants";
import styles from './AnalyzeStepCard.module.scss';

export const AnalyzeStepCard: FC<AnalyzeStepProps> = ({
    title,
    id,
    description
}) => {

    return (
        <div className={styles.infoCard}>
            <div className={styles.icon}>
                {id}
            </div>
            <h4 className={styles.title}>
                <strong>{title}</strong>
            </h4>
            <p>{description}</p>
        </div>
    )
}
