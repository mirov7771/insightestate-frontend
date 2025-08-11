import {FC, useState} from 'react';
import { Section } from '../Section';
import styles from './AverageYield.module.scss';
import { Profitability } from '@/widgets/Detail/api/detailApi';
import {useIntl} from 'react-intl';
import { Text } from '@/shared/ui';
import {ProfitInfoModal} from "@/shared/ui/modals/InfoModal/InfoModal";

export const AverageYield: FC<Profitability> = ({ roi, irr, capRateFirstYear }) => {
  const { formatMessage } = useIntl();
  const [infoModal, setInfoModal] = useState(false);
  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  return (
    <Section
        title={formatMessage({ id: 'yield' })}
        action={handleOpenInfoModal}
    >
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Text variant="heading3" className={styles.bold}>
            {roi}%
          </Text>
          <Text variant="body1" className={styles.description}>
            {formatMessage({ id: 'roiSummary' })}
          </Text>
        </div>
        <div className={styles.item}>
          <Text variant="heading3" className={styles.bold}>
            {irr}%
          </Text>
          <Text variant="body1" className={styles.description}>
            {formatMessage({ id: 'irr' })}
          </Text>
        </div>
        <div className={styles.item}>
          <Text variant="heading3" className={styles.bold}>
            {capRateFirstYear}%
          </Text>
          <Text variant="body1" className={styles.description}>
            {formatMessage({ id: 'net' })}
          </Text>
        </div>
      </div>
      <ProfitInfoModal open={infoModal} setOpen={setInfoModal} />
    </Section>
  );
};
