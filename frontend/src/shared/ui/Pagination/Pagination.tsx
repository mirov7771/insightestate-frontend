import { FC } from 'react';
import styles from './Pagination.module.scss';
import PaginationItem from '@mui/material/PaginationItem';
import MuiPagination, { PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';
import { IconChevronRight, IconChevronLeft } from '@/shared/assets/icons';
import { useWindowResize } from '@/shared/utils/useWindowResize';

type PaginationProps = {
  onChangePage: MUIPaginationProps['onChange'];
  pageNumber: number;
  totalPages: number;
};

export const Pagination: FC<PaginationProps> = ({ totalPages, pageNumber, onChangePage }) => {
  const { width } = useWindowResize();

  return (
    <div className={styles.pagination}>
      <MuiPagination
        boundaryCount={1}
        siblingCount={width <= 768 ? 0 : 1}
        classes={{ root: styles.root }}
        count={totalPages}
        onChange={onChangePage}
        page={pageNumber}
        renderItem={(item) => (
          <PaginationItem
            slotProps={{
              previous: <IconChevronLeft />,
              last: <IconChevronRight />,
            }}
            {...item}
          />
        )}
      />
    </div>
  );
};
