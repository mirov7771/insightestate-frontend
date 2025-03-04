import { FC, ReactNode, useState } from 'react';
import styles from './Accordion.module.scss';
import Plus from './plus.svg';
import Minus from './minus.svg';

type AccordionProps = {
  children: ReactNode;
  title: string | ReactNode;
  icon?: ReactNode;
};

export const Accordion: FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordion__header} onClick={() => setIsOpen(!isOpen)}>
        {icon && <span className={styles.accordion__vector}>{icon}</span>}
        {title}
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
