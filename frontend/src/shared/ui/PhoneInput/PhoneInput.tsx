import { FC } from 'react';
import PhoneInputCountries, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';
import { Text } from '@/shared/ui';

export const PhoneInput: FC<PhoneInputProps & { error?: string; label?: string }> = (props) => {
  return (
    <div>
      {props.label && (
        <Text variant="heading4" as="label" className={styles.label}>
          {props.label}
        </Text>
      )}
      <PhoneInputCountries
        {...props}
        isValid={(value, country, countries, hiddenAreaCodes) => {
          if (typeof props.isValid === 'function') {
            props.isValid(value, country, countries, hiddenAreaCodes);
          }

          return !props.error;
        }}
        containerClass={styles.container}
        country={props.country || 'th'}
      />
      {!!props.error && (
        <Text variant="caption1" className={styles.error}>
          {props.defaultErrorMessage}
        </Text>
      )}
    </div>
  );
};
