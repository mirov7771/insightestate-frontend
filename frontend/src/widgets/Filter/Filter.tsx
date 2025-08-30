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
import { IconX } from '@/shared/assets/icons';
import {Developer} from "@/widgets/Filter/Developer";
import {PetFriendly} from "@/widgets/Filter/PetFriendly";

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
          <Text variant="heading4">{formatMessage({ id: 'filters.header' })}</Text>
          <span className={styles.reset} onClick={handleClose}>
            <IconX />
          </span>
        </div>
        <div className={styles.filters__wrapper}>
          <Price />
          <City />
          <Region />
          <PropertyType />
          <CompletionDate />
          <NumberOfBedrooms />
          <Potential />
          <Beach renderName />
          <Airport renderName />
          <Company />
          <PetFriendly />
          <Developer />
          <AiFilter />
        </div>
        <div className={styles.filters__buttons}>
          <Button variant="primary" onClick={handleClose} wide size="l">
            <Text variant="body1" bold>
              {formatMessage({ id: 'filter.show_objects' }, { totalCount })}
            </Text>
          </Button>
          <Button variant="base" onClick={resetFilters} wide size="l">
            <Text variant="body1" bold>
              {formatMessage({ id: 'filter_clear' })}
            </Text>
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
        <Text variant="heading4">{formatMessage({ id: 'ai_header_text' })}</Text>
        <Spacer height={20} width={100} />
        <Text variant="body1">{formatMessage({ id: 'ai_text' })}</Text>
        <Spacer height={20} width={100} />
        <Button onClick={handleOpenAiModal} wide size={'m'}>
          <Text variant="body1" bold>
            {formatMessage({ id: 'ai_button' })}
          </Text>
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
