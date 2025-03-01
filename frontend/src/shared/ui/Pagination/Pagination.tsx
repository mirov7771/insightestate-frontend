import { FC, useState } from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ totalPages, initialPage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);

      onPageChange?.(newPage);
      return newPage;
    });
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages);

      onPageChange?.(newPage);
      return newPage;
    });
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__buttons}>
        {currentPage !== 1 && (
          <button className={styles.pagination__button} onClick={goToPreviousPage}>
            {'< Назад'}
          </button>
        )}
        {currentPage !== totalPages && (
          <button
            className={styles.pagination__button}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {'Вперед >'}
          </button>
        )}
      </div>
      <span className={styles.pagination__pages}>
        {currentPage} / {totalPages}
      </span>
    </div>
  );
};
