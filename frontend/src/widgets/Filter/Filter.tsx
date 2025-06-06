import { Dispatch, FC, SetStateAction, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from './Filter.module.scss';
import { PropertyType } from './PropertyType';
import { CompletionDate } from './CompletionDate';
import { NumberOfBedrooms } from './NumberOfBedrooms';
import { Price } from './Price';
import { Potential } from './Potential';
import { DEFAULT_FILTERS, useFilters } from '@/widgets/Filter/model/useFilters';
import { Airport } from '@/widgets/Filter/Airport';
import { Beach } from '@/widgets/Filter/Beach';
import { Company } from '@/widgets/Filter/Company';
import { Region } from '@/widgets/Filter/Region';
import { City } from '@/widgets/Filter/City';
import { useIntl } from 'react-intl';
import { Spacer } from '@/widgets/Spacer/Spacer';
import { Button, Text } from '@/shared/ui';
import { AiModal } from '@/widgets/Modal/AiModal';
import { OfferCollectionX } from '@/shared/assets/icons';

type FilterProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> };

export const Filter: FC<FilterProps> = ({ open, setOpen }) => {
  const { formatMessage } = useIntl();
  const { setFilters, totalCount } = useFilters();
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SwipeableDrawer
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      anchor="right"
      disableSwipeToOpen
      disableDiscovery
    >
      <div className={styles.filters}>
        <div className={styles.header}>
          <h5>{formatMessage({ id: 'filters.header' })}</h5>
          <span className={styles.reset} onClick={handleClose}>
            <OfferCollectionX />
          </span>
        </div>
        <div className={styles.filters__wrapper}>
          <City />
          <Region />
          <PropertyType />
          <CompletionDate />
          <NumberOfBedrooms />
          <Price />
          <Potential />
          <Beach />
          <Airport />
          <Company />
          <AiFilter />
        </div>
        <div className={styles.filters__buttons}>
          <Button variant="primary" onClick={handleClose} wide>
            <Text variant="heading4">
              {formatMessage({ id: 'filter.show_objects' }, { totalCount })}
            </Text>
          </Button>
          <Button variant="base" onClick={resetFilters} wide>
            <Text variant="heading4">{formatMessage({ id: 'filter_clear' })}</Text>
          </Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

const AiFilter: FC = () => {
  const { formatMessage } = useIntl();
  const [aiModal, setAiModal] = useState(false);
  const handleOpenAiModal = () => {
    setAiModal(true);
  };
  const handleCloseAiModal = () => {
    setAiModal(false);
  };

  return (
    <>
      <div className={styles.info}>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          {formatMessage({ id: 'ai_header_text' })}
        </p>
        <Spacer height={20} width={100} />
        <p>{formatMessage({ id: 'ai_text' })}</p>
        <Spacer height={20} width={100} />
        <Button onClick={handleOpenAiModal} wide size={'m'}>
          {formatMessage({ id: 'ai_button' })}
        </Button>
      </div>
      <AiModal
        open={aiModal}
        onClose={handleCloseAiModal}
        onOpen={handleOpenAiModal}
        anchor="bottom"
      />
    </>
  );
};
