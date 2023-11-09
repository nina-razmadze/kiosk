import { FloatButton } from 'antd';
import { IntlProvider } from 'react-intl';
import { PropsWithChildren, useEffect, useState, useCallback } from 'react';

import { Locale_Enum, LocaleContext } from './LocaleContext';
import { LOCAL_STORAGE_LANG_KEY } from '@src/config/constants';

import en from './translations/en.json';
import ka from './translations/ka.json';

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale_Enum>(Locale_Enum.EN);

  const languages = { en, ka };

  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    if (savedLocale) setLocale(savedLocale as Locale_Enum);
  }, []);

  const toggleLocale = useCallback(() => {
    if (locale === Locale_Enum.KA) setLocale(Locale_Enum.EN);
    else if (locale === Locale_Enum.EN) setLocale(Locale_Enum.KA);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        messages={languages[locale]}
        locale={locale}
        defaultLocale='en'
      >
        {children}
      </IntlProvider>
      <FloatButton
        type='primary'
        description={locale === Locale_Enum.KA ? 'EN' : 'KA'}
        onClick={toggleLocale}
      />
    </LocaleContext.Provider>
  );
}
