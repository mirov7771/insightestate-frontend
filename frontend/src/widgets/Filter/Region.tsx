import { ChangeEvent, FC } from 'react';
import { LocationImg2 } from '@/shared/assets/icons';
import styles from './Filter.module.scss';
import { Accordion, RadioButton } from '@/shared/ui';
import { useFilters } from '@/widgets/Filter/model/useFilters';

export const Region: FC = () => {
  const { setFilters, beachName } = useFilters();

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filtersState) => ({ ...filtersState, beachName: e.target.value }));
  };

  return (
    <Accordion icon={<LocationImg2 />} title="Район">
      <div className={styles.content}>
        <RadioButton
          name="beachName"
          value="Kata"
          onChange={handleClick}
          checked={beachName === 'Kata'}
          label="Kata"
        />
        <RadioButton
          name="beachName"
          value="Mai Khao"
          onChange={handleClick}
          checked={beachName === 'Mai Khao'}
          label="Mai Khao"
        />
        <RadioButton
          name="beachName"
          value="Layan"
          onChange={handleClick}
          checked={beachName === 'Layan'}
          label="Layan"
        />
        <RadioButton
          name="beachName"
          value="Bang Tao"
          onChange={handleClick}
          checked={beachName === 'Bang Tao'}
          label="Bang Tao"
        />
        <RadioButton
          name="beachName"
          value="Rawai"
          onChange={handleClick}
          checked={beachName === 'Rawai'}
          label="Rawai"
        />
        <RadioButton
          name="beachName"
          value="Kamala"
          onChange={handleClick}
          checked={beachName === 'Kamala'}
          label="Kamala"
        />
        <RadioButton
          name="beachName"
          value="Naithon"
          onChange={handleClick}
          checked={beachName === 'Naithon'}
          label="Naithon"
        />
        <RadioButton
          name="beachName"
          value="Karon"
          onChange={handleClick}
          checked={beachName === 'Karon'}
          label="Karon"
        />
        <RadioButton
          name="beachName"
          value="Surin"
          onChange={handleClick}
          checked={beachName === 'Surin'}
          label="Surin"
        />
        <RadioButton
          name="beachName"
          value="Nai Yang"
          onChange={handleClick}
          checked={beachName === 'Nai Yang'}
          label="Nai Yang"
        />
        <RadioButton
          name="beachName"
          value="Ao Yon"
          onChange={handleClick}
          checked={beachName === 'Ao Yon'}
          label="Ao Yon"
        />
      </div>
    </Accordion>
  );
};
