import { FC } from 'react';
import styles from './AnalyzeTable.module.scss';
import { Estate, EstateCollection } from '@/widgets/EstateCollection/api/estateCollectionApi';

export const AnalyzeTable: FC<EstateCollection & { isMobile: boolean }> = ({
  estates,
  isMobile,
}) => {
  return (
    <div className={styles.masterNeighbourhood2}>
      <table className={styles.tb}>
        {isMobile ? (
          <tbody className={styles.tbody_mobile}>
            <tr>
              <th className={styles.th}>
                Название
                <br />
                проекта
              </th>
              <th className={styles.th}>
                Общая
                <br />
                оценка
              </th>
              <th className={styles.th}>Цена, от ($)</th>
              <th className={styles.th}>
                Дата
                <br />
                сдачи
              </th>
              <th className={styles.th}>IRR (%)</th>
              <th className={styles.th}>
                10Y
                <br />
                ROI (%)
              </th>
            </tr>
          </tbody>
        ) : (
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
        )}
        {isMobile ? (
          <tbody className={styles.tbody_mobile}>
            {estates.map((estate) => (
              <AnalyzeRow {...estate} />
            ))}
          </tbody>
        ) : (
          <tbody>
            {estates.map((estate) => (
              <AnalyzeRow {...estate} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

const AnalyzeRow: FC<Estate> = ({ name, grade, price, buildEndDate, profitability }) => {
  return (
    <tr>
      <td className={styles.td}>{name}</td>
      <td className={styles.td}>{grade?.main}</td>
      <td className={styles.td}>{price?.min}</td>
      <td className={styles.td}>{buildEndDate}</td>
      <td className={styles.td}>{profitability?.irr}</td>
      <td className={styles.td}>{profitability?.roi}</td>
    </tr>
  );
};
