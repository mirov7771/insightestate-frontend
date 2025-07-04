import { FC, ReactNode, useState } from 'react';
import styles from './Accordion.module.scss';
import { Text } from '@/shared/ui';
import { IconChevronLeft } from '@/shared/assets/icons';

type AccordionProps = {
  children: ReactNode;
  title: string | ReactNode;
  icon?: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordion__header} onClick={() => setIsOpen(!isOpen)}>
        <Text variant="heading5">{title}</Text>
        <div className={styles.accordion__icon_wrapper}>
          <span className={`${styles.accordion__icon} ${isOpen ? `${styles.open}` : ''}`}>
            <IconChevronLeft />
          </span>
        </div>
      </button>
      <div className={styles.accordion__content} style={{ maxHeight: isOpen ? '400px' : '0px' }}>
        <div className={styles.accordion__body}>{children}</div>
      </div>
    </div>
  );
};
