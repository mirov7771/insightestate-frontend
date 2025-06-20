import { FC } from 'react';
import { Section } from '../Section';
import styles from './AverageYield.module.scss';
import { Profitability } from '@/widgets/Detail/api/detailApi';
import { useIntl } from 'react-intl';
import { Text } from '@/shared/ui';

export const AverageYield: FC<Profitability> = ({ roi, irr, capRateFirstYear }) => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: 'yield' })}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Text variant="heading3" className={styles.bold}>
            {roi}%
          </Text>
          <Text variant="body1">{formatMessage({ id: 'roiSummary' })}</Text>
        </div>
        <div className={styles.item}>
          <Text variant="heading3" className={styles.bold}>
            {irr}%
          </Text>
          <Text variant="body1">{formatMessage({ id: 'irr' })}</Text>
        </div>
        <div className={styles.item}>
          <Text variant="heading3" className={styles.bold}>
            {capRateFirstYear}%
          </Text>
          <Text variant="body1">{formatMessage({ id: 'net' })}</Text>
        </div>
      </div>
    </Section>
  );
};
