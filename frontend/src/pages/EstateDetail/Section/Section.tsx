import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Section.module.scss';
import { Text } from '@/shared/ui';

type SectionProps = {
  title: string | ReactNode;
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
        <Text variant="heading4">{title}</Text>
        {rightSide}
      </div>
      <div>{children}</div>
    </section>
  );
};
