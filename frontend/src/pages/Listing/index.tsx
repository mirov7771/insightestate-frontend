import { FC, useEffect, useState } from 'react';
import styles from './Listing.module.scss';
import { Filter } from '@/widgets/Filter/Filter';
import { Button, Pagination, Text } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';
import { useIntl } from 'react-intl';
import { InfoModal } from '@/shared/ui/modals';
import { CardSlide } from '@/entities/CardSlide/CardSlide';

const Listing: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters, pageNumber, estates, totalPages, hasMore, loading } = useFilters();
  const token = localStorage.getItem('basicToken');
  const [openFilters, setOpenFilters] = useState(true);

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
      <Button onClick={() => setOpenFilters(true)}>Все фильтры</Button>
      <Filter open={openFilters} setOpen={setOpenFilters} />
      <div className={styles.layout}>
        <main className={styles.main}>
          {!loading && !estates.length && (
            <Text variant="heading5">{formatMessage({ id: 'not_found' })}</Text>
          )}
          {!!estates.length &&
            estates.map((estate) => (
              <div>
                <CardSlide estate={estate} token={token} loading={loading} clickable />
              </div>
            ))}
        </main>
      </div>
      <div className={styles.pagination}>
        <Pagination
          onChangePage={(_, page) => {
            setFilters((filtersState) => ({
              ...filtersState,
              pageNumber: page - 1,
            }));
          }}
          totalPages={totalPages}
          pageNumber={(pageNumber as number) + 1}
        />
      </div>
      <InfoModal setOpen={setInfoModal} open={infoModal} title={infoTitle} text={infoText} />
    </div>
  );
};

export default Listing;
