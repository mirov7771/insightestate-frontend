import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Section.module.scss';
import { Text } from '@/shared/ui';
import {IconInfoCircle} from "@/shared/assets/icons";

type SectionProps = {
  title: string | ReactNode;
  rightSide?: ReactNode;
  action?: () => void
};

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  rightSide = null,
  title,
  children,
  action
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
          {action ?
              <Text variant="heading4" className={styles.info_icon} onClick={action}>
                  {title}
                  <div className={styles.icon} onClick={action}>
                      <IconInfoCircle />
                  </div>
              </Text> :
              <Text variant="heading4">
                  {title}
              </Text>
          }
        {rightSide}
      </div>
      <div>{children}</div>
    </section>
  );
};
