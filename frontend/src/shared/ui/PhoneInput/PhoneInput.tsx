import { FC } from 'react';
import PhoneInputCountries, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';
import { Text } from '@/shared/ui';

export const PhoneInput: FC<PhoneInputProps & { label?: string }> = (props) => {
  return (
    <div>
      {props.label && (
        <Text variant="heading4" as="label" className={styles.label}>
          {props.label}
        </Text>
      )}
      <PhoneInputCountries
        {...props}
        containerClass={styles.container}
        country={props.country || 'th'}
      />
    </div>
  );
};
