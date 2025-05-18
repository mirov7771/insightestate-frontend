import { FC } from 'react';
import styles from './Pagination.module.scss';
import { useIntl } from 'react-intl';

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
  const { formatMessage } = useIntl();

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__buttons}>
        {pageNumber !== 0 && (
          <button className={styles.pagination__button} onClick={goToPreviousPage}>
            {formatMessage({ id: 'pagination.back' })}
          </button>
        )}
        {pageNumber !== totalPages && (
          <button
            className={styles.pagination__button}
            onClick={goToNextPage}
            disabled={pageNumber === totalPages}
          >
            {formatMessage({ id: 'pagination.next' })}
          </button>
        )}
      </div>
      <span className={styles.pagination__pages}>
        {pageNumber + 1} / {totalPages}
      </span>
    </div>
  );
};
