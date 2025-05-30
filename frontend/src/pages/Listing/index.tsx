import React, { FC, useEffect, useState } from 'react';
import styles from './Listing.module.scss';
import { Filter } from '@/widgets/Filter/Filter';
import { Card } from '@/entities/Card/Card';
import { Pagination } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { Watch } from 'react-loader-spinner';
import { useIntl } from 'react-intl';
import { InfoModal } from '@/widgets/Modal/InfoModal';

const Listing: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, pageNumber, estates, totalPages, hasMore, loading } = useFilters();

  const [infoModal, setInfoModal] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const infoText = formatMessage({ id: 'listing.info' });

  const handleOpenInfoModal = () => {
    setInfoModal(true);
  };
  const handleCloseInfoModal = () => {
    setInfoModal(false);
  };

  useEffect(() => {
    const onboarding = localStorage.getItem('onboarding');

    if (!onboarding) {
      localStorage.setItem('onboarding', 'showed');
      handleOpenInfoModal();
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.header}>{formatMessage({ id: 'projects' })}</h1>
      <div className={styles.layout}>
        <aside>
          <Filter />
        </aside>
        <main className={styles.main}>
          {estates.length === 0 ? (
            loading ? (
              <Watch
                height="180"
                width="180"
                color="gray"
                ariaLabel="watch-loading"
                wrapperClass=""
              />
            ) : (
              <h5>{formatMessage({ id: 'not_found' })}</h5>
            )
          ) : (
            <>
              {estates.map((estate) => (
                <Card
                  key={estate.id}
                  {...estate}
                  clickable={true}
                  token={localStorage.getItem('basicToken')}
                />
              ))}
            </>
          )}
        </main>
        {!hasMore ? (
          <></>
        ) : (
          <div className={styles.pagination}>
            <Pagination
              totalPages={totalPages}
              pageNumber={pageNumber as number}
              goToPreviousPage={() =>
                setFilters((filtersState) => ({
                  ...filtersState,
                  pageNumber: (pageNumber as number) - 1 || 0,
                }))
              }
              goToNextPage={() =>
                setFilters((filtersState) => ({
                  ...filtersState,
                  pageNumber: Math.min((pageNumber as number) + 1, totalPages),
                }))
              }
            />
          </div>
        )}
      </div>
      <InfoModal
        open={infoModal}
        onClose={handleCloseInfoModal}
        onOpen={handleOpenInfoModal}
        anchor="bottom"
        title={infoTitle}
        text={infoText}
        bottom={30}
      />
    </div>
  );
};

export default Listing;
