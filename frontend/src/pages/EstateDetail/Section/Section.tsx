import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Section.module.scss';

type SectionProps = {
  title: string;
  rightSide?: ReactNode;
};

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  rightSide = null,
  title,
  children,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h5 className={styles.title}>{title}</h5>
        {rightSide}
      </div>
      <div>{children}</div>
    </section>
  );
};
