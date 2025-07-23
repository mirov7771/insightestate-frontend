import { ComponentProps, FC } from 'react';
import { CountryRegionData } from 'react-country-region-selector';
import styles from './SelectCountry.module.scss';
import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';
import { useIntl } from 'react-intl';
import { Text } from '@/shared/ui';

type SelectCountryProps = Omit<
  AutocompleteProps<string, undefined, true, undefined>,
  'renderInput' | 'options' | 'disableClearable'
> & {
  error?: string;
  label?: string;
};

const data = CountryRegionData.default.map(([name]) => name);

export const SelectCountry: FC<SelectCountryProps> = (props) => {
  const { formatMessage } = useIntl();
  const { label, ...rest } = props;

  return (
    <Autocomplete
      {...rest}
      renderInput={(params) => (
        <>
          {label && (
            <Text variant="heading5" as="label" className={styles.label}>
              {label}
            </Text>
          )}
          <TextField
            {...params}
            classes={{ root: `${styles.root} ${!!props.error ? styles.root__error : ''}` }}
            placeholder={formatMessage({ id: 'country_of_residence' })}
            error={!!props.error}
          />
          {!!props.error && (
            <Text variant="caption1" as="span" className={styles.errorText}>
              {props.error}
            </Text>
          )}
        </>
      )}
      options={data}
      disableClearable
    />
  );
};
