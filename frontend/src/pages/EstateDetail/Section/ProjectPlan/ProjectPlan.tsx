import React, { FC } from 'react';
import { Section } from '@/pages/EstateDetail/Section/Section';
import plan from './plan.jpeg';
import styles from './ProjectPlan.module.scss';

export const ProjectPlan: FC = () => {
  return (
    <Section title="План проекта">
      <div className={styles.wrapper}>
        <img src={plan} alt="plan" className={styles.img} />
      </div>
    </Section>
  );
};
