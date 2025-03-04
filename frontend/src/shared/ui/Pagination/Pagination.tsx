import { FC } from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  pageNumber: number;
  totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  pageNumber,
  goToPreviousPage,
  goToNextPage,
}) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__buttons}>
        {pageNumber !== 0 && (
          <button className={styles.pagination__button} onClick={goToPreviousPage}>
            {'< Назад'}
          </button>
        )}
        {pageNumber !== totalPages && (
          <button
            className={styles.pagination__button}
            onClick={goToNextPage}
            disabled={pageNumber === totalPages}
          >
            {'Вперед >'}
          </button>
        )}
      </div>
      <span className={styles.pagination__pages}>
        {pageNumber} / {totalPages}
      </span>
    </div>
  );
};
