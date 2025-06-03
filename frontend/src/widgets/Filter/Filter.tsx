import { FC, useState } from 'react';
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
import { Button } from '@/shared/ui';
import { AiModal } from '@/widgets/Modal/AiModal';

export const Filter: FC = () => {
  const { formatMessage } = useIntl();
  const { setFilters } = useFilters();
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <>
      <div className={styles.header}>
        <h5>{formatMessage({ id: 'filter_params' })}</h5>
        <span className={styles.reset} onClick={resetFilters}>
          {formatMessage({ id: 'filter_clear' })}
        </span>
      </div>
      <City />
      <PropertyType />
      <CompletionDate />
      <NumberOfBedrooms />
      <Price />
      <Potential />
      <Beach />
      <Airport />
      <Company />
      <Region />
      <AiFilter />
    </>
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
