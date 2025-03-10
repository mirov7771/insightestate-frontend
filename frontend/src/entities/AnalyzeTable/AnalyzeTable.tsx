import {FC} from "react";
import styles from './AnalyzeTable.module.scss';

export const AnalyzeTable: FC = () => {
    return (
        <div className={styles.masterNeighbourhood2}>
            <table className={styles.tb}>
                <tbody>
                    <tr>
                        <th className={styles.th}>Название проекта</th>
                        <th className={styles.th}>Общая оценка</th>
                        <th className={styles.th}>Цена, от ($)</th>
                        <th className={styles.th}>Дата сдачи</th>
                        <th className={styles.th}>IRR (%)</th>
                        <th className={styles.th}>10Y ROI (%)</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className={styles.td}>#Название объекта#</td>
                        <td className={styles.td}>#Оценка#</td>
                        <td className={styles.td}>#Цена от#</td>
                        <td className={styles.td}>#Дата сдачи#</td>
                        <td className={styles.td}>#IRR#</td>
                        <td className={styles.td}>#ROI#</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
