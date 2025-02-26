import { FC } from 'react';
import styles from './Listing.module.scss';
import { Filter } from '@/widgets/Filter/Filter';

export const Listing: FC = () => {
  return (
    <div className={styles.layout}>
      <aside>
        <Filter />
      </aside>
      <main className={styles.main}>Laguna Beach Residences Bayside</main>
    </div>
  );
};
