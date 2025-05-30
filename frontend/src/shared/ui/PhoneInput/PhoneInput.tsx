import { FC } from 'react';
import PhoneInputCountries, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';

export const PhoneInput: FC<PhoneInputProps> = (props) => {
  return <PhoneInputCountries {...props} inputClass={styles.input} containerClass={styles.input} />;
};
