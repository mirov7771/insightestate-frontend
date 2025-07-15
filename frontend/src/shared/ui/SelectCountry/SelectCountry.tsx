import { ComponentProps, FC } from 'react';
import { CountryRegionData } from 'react-country-region-selector';
import styles from './SelectCountry.module.scss';
import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';
import { useIntl } from 'react-intl';

type SelectCountryProps = Omit<
  AutocompleteProps<string, undefined, true, undefined>,
  'renderInput' | 'options' | 'disableClearable'
>;

const data = CountryRegionData.default.map(([name]) => name);

export const SelectCountry: FC<SelectCountryProps> = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Autocomplete
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          classes={{ root: styles.root }}
          placeholder={formatMessage({ id: 'country_of_residence' })}
        />
      )}
      options={data}
      disableClearable
    />
  );
};
