import React, { FC } from 'react';
import { Section } from '@/pages/EstateDetail/Section/Section';
import plan from './plan.jpeg';
import styles from './ProjectPlan.module.scss';
import { useIntl } from 'react-intl';

export const ProjectPlan: FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: 'project_plan' })}>
      <div className={styles.wrapper}>
        <img src={plan} alt="plan" className={styles.img} />
      </div>
    </Section>
  );
};
