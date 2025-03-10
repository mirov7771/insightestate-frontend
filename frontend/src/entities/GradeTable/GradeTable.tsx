import {FC} from "react";
import styles from './GradeTable.module.scss';
import {Estate, EstateCollection} from "@/widgets/EstateCollection/api/estateCollectionApi";
import {Card} from "@/entities/Card/Card";

export const GradeTable: FC<EstateCollection> = ({
  estates
}) => {
    return (
        <div className={styles.masterNeighbourhood2}>
            <table className={styles.tb}>
                <tbody>
                <tr>
                    <th className={styles.th}>Название проекта</th>
                    <th className={styles.th}>Безопасность вложений</th>
                    <th className={styles.th}>Инвестиционный потенциал</th>
                    <th className={styles.th}>Расположение объекта</th>
                    <th className={styles.th}>Комфорт жизни</th>
                    <th className={styles.th}>Общая оценка</th>
                </tr>
                </tbody>
                <tbody>
                {estates.map((estate) => <GradeRow {...estate}/>)}
                </tbody>
            </table>
            <main className={styles.main}>
                {estates.map((estate) => (
                    <Card key={estate.id}
                          id={estate.id}
                          level={estate.level}
                          beachTravelTime={estate.infrastructure?.beachTime?.car || 0}
                          grade={estate.grade?.main || 0}
                          buildEndDate={estate.buildEndDate}
                          priceMin={estate.price?.min || 0}
                          facilityImages={estate.facilityImages}
                          interiorImages={estate.interiorImages}
                          exteriorImages={estate.exteriorImages}
                          name={estate.name}
                          projectId={estate.projectId}
                          roi={estate.profitability?.roi || 0}
                    />
                ))}
            </main>
        </div>
    )
}

const GradeRow: FC<Estate> = ({
  name,
  grade
}) => {
    return (
        <tr>
            <td className={styles.td}>{name}</td>
            <td className={styles.td}>{grade?.investmentSecurity}</td>
            <td className={styles.td}>{grade?.investmentPotential}</td>
            <td className={styles.td}>{grade?.projectLocation}</td>
            <td className={styles.td}>{grade?.comfortOfLife}</td>
            <td className={styles.td}>{grade?.main}</td>
        </tr>
    )
}
