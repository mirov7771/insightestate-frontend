import { FC, ReactNode, useState } from 'react';
import styles from './Accordion.module.scss';
import Plus from './plus.svg?react';
import Minus from './minus.svg?react';
import { Text } from '@/shared/ui';

type AccordionProps = {
  children: ReactNode;
  title: string | ReactNode;
  activeFilters?: string[] | number[];
  icon?: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({ title, children, icon, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordion__header} onClick={() => setIsOpen(!isOpen)}>
        {icon && <span className={styles.accordion__vector}>{icon}</span>}
        {title}
        {!!activeFilters?.length ? (
          <span className={styles.filters}>
            <Text variant="caption2">{activeFilters.length}</Text>
          </span>
        ) : null}
        <span className={`${styles.accordion__icon} ${isOpen ? `${styles.open}` : ''}`}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <div className={styles.accordion__content} style={{ maxHeight: isOpen ? '400px' : '0px' }}>
        <div className={styles.accordion__body}>{children}</div>
      </div>
    </div>
  );
};
