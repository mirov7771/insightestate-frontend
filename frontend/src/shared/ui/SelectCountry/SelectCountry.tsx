import { ComponentProps, FC } from 'react';
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';
import styles from './SelectCountry.module.scss';
import { Text } from '@/shared/ui';
import { Autocomplete, TextField } from '@mui/material';

type SelectCountryProps = ComponentProps<typeof CountryDropdown> & { label?: string };

const data = CountryRegionData.default.map(([name]) => name);

export const SelectCountry: FC<SelectCountryProps> = (props) => {
  return (
    <Autocomplete
      renderInput={(params) => <TextField {...params} label="" placeholder="Страна проживания" />}
      options={data}
      open
    />
  );

  return (
    <div>
      {props.label && (
        <Text variant="heading4" as="label" className={styles.label}>
          {props.label}
        </Text>
      )}
      <CountryDropdown {...props} className={styles.select} />
    </div>
  );
};
