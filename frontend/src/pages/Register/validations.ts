import { IntlShape } from 'react-intl';
import { PhoneInputProps } from 'react-phone-input-2';

/**
 * Валидация полей формы регистрации.
 * @param fields - объект с полями формы
 * @returns объект с ошибками для каждого поля (если есть)
 */
export interface FormFields {
  email: string;
  location: string;
  password: string;
  username: string;
}

export interface FormErrors {
  email?: string;
  location?: string;
  password?: string;
  phone?: string;
  username?: string;
}

type Country = {
  countryCode: string;
  dialCode: string;
  format: string;
  iso2: string;
  name: string;
  priority: number;
  regions: string[];
};

export const validationPhone: PhoneInputProps['isValid'] = (value, country) => {
  const currentCountry = country as Country;
  const format = currentCountry.format.replaceAll(/[\s\-\(\)]/g, '');

  return value.startsWith(currentCountry.dialCode, 0) && format.length - 1 === value.length;
};

// Username: обязательно, минимум 3 символа, только буквы и цифры
export const validationUsername = (username: string, formatMessage: IntlShape['formatMessage']) => {
  if (!username) {
    return formatMessage({ id: 'form.error.username.required' });
  } else if (!/^[a-zA-Zа-яА-Я0-9_]{3,}$/.test(username)) {
    return formatMessage({ id: 'form.error.username.invalid' });
  }
  return '';
};

// Password: обязательно, минимум 6 символов
export const validationPassword = (password: string, formatMessage: IntlShape['formatMessage']) => {
  if (!password) {
    return formatMessage({ id: 'form.error.password.required' });
  } else if (password.length < 6) {
    return formatMessage({ id: 'form.error.password.short' });
  }
  return '';
};

export const validationLocation = (location: string, formatMessage: IntlShape['formatMessage']) => {
  if (!location) {
    return formatMessage({ id: 'form.error.location.required' });
  } else if (location.length < 2) {
    return formatMessage({ id: 'form.error.location.short' });
  }
  return '';
};

export const validationEmail = (email: string, formatMessage: IntlShape['formatMessage']) => {
  if (!email) {
    return formatMessage({ id: 'form.error.email.required' });
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(email)) {
    return formatMessage({ id: 'form.error.email.invalid' });
  }
  return '';
};

export function validate(
  fields: FormFields,
  formatMessage: IntlShape['formatMessage']
): FormErrors {
  const errors: FormErrors | null = {};

  // Username: обязательно, минимум 3 символа, только буквы и цифры
  //errors.username = validationUsername(fields.username, formatMessage);

  // Password: обязательно, минимум 6 символов
  errors.password = validationPassword(fields.password, formatMessage);

  // Location: обязательно, минимум 2 символа
  errors.location = validationLocation(fields.location, formatMessage);

  // Email: обязательно, корректный формат
  errors.email = validationEmail(fields.email, formatMessage);

  return errors;
}
