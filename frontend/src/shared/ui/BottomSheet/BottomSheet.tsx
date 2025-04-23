import { ReactNode, useEffect } from 'react';
import styles from './BottomSheet.module.scss';
import { TablerIconX } from '@/shared/assets/icons';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const BottomSheet = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div
        className={styles.sheet}
        onClick={(e) => e.stopPropagation()} // предотвратить закрытие при клике внутрь
      >
        <button className={styles.close} onClick={onClose}>
          <TablerIconX />
        </button>
        {children}
      </div>
    </div>
  );
};
