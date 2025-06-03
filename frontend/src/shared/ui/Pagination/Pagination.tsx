import { FC } from 'react';
import styles from './Pagination.module.scss';
import MuiPagination, { PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';

type PaginationProps = {
  onChangePage: MUIPaginationProps['onChange'];
  pageNumber: number;
  totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ totalPages, pageNumber, onChangePage }) => {
  return (
    <div className={styles.pagination}>
      <MuiPagination count={totalPages} onChange={onChangePage} page={pageNumber} />
    </div>
  );
};
