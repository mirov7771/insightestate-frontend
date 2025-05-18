import en from './en';
import ru from './ru';

export const messages = {
  en,
  ru,
};

export type Locale = keyof typeof messages;
