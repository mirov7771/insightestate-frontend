import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { messages, Locale } from './index';

type Props = {
  children: ReactNode;
  locale: Locale;
};

export const I18nProvider = ({ children, locale }: Props) => (
  <IntlProvider locale={locale} messages={messages[locale]} defaultLocale="en">
    {children}
  </IntlProvider>
);
