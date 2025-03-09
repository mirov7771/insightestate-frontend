import {FC} from "react";
import {InfoCardProps} from "@/shared/constants/constants";

export const InfoCard: FC<InfoCardProps> = ({
    title,
    description
}) => {
    return (
        <div>
            {title}
            {description}
        </div>
    )
}
