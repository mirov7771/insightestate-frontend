import React, { FC } from 'react';
import { Section } from '@/pages/EstateDetail/Section/Section';
import plan from './plan.jpeg';
import styles from './ProjectPlan.module.scss';
import {localField} from "@/i18n/localField";

export const ProjectPlan: FC = () => {
  return (
    <Section title={localField('project_plan')}>
      <div className={styles.wrapper}>
        <img src={plan} alt="plan" className={styles.img} />
      </div>
    </Section>
  );
};
