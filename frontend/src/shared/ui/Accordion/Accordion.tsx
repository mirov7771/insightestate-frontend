import { FC, ReactNode, useState } from 'react';
import styles from './Accordion.module.scss';
import Plus from './plus.svg';
import Minus from './minus.svg';

type AccordionProps = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
};

export const Accordion: FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordion__header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.accordion__vector}>{icon}</span>
        {title}
        <span className={`${styles.accordion__icon} ${isOpen ? `${styles.open}` : ''}`}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <div className={styles.accordion__content} style={{ maxHeight: isOpen ? '200px' : '0px' }}>
        <div className={styles.accordion__body}>{children}</div>
      </div>
    </div>
  );
};
