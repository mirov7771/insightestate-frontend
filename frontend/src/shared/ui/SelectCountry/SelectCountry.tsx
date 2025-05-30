import { ComponentProps, FC } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import styles from './SelectCountry.module.scss';
import { Text } from '@/shared/ui';

type SelectCountryProps = ComponentProps<typeof CountryDropdown> & { label?: string };

export const SelectCountry: FC<SelectCountryProps> = (props) => (
  <div>
    {props.label && (
      <Text variant="heading4" as="label" className={styles.label}>
        {props.label}
      </Text>
    )}
    <CountryDropdown {...props} className={styles.select} />
  </div>
);
