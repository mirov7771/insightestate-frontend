import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import styles from './BottomSheet.module.scss';
import { TablerIconX } from '@/shared/assets/icons';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: RefObject<HTMLElement | HTMLDivElement | null>;
};

export const BottomSheet = ({ isOpen, onClose, children, triggerRef }: Props) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ left: number; top: number }>({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && triggerRef?.current && sheetRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const sheetRefRect = sheetRef.current.getBoundingClientRect();

      setPosition({
        top: rect.bottom - 72 - sheetRefRect.height,
        left: rect.left,
      });
    }

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen, triggerRef]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div
        style={
          window.innerWidth >= 768
            ? { top: `${position.top}px`, left: `${position.left}px`, position: 'absolute' }
            : undefined
        }
        ref={sheetRef}
        className={`${styles.sheet} ${isOpen ? styles.sheet__open : ''}`}
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
