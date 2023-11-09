import { createContext, Dispatch, SetStateAction } from 'react';

export enum Locale_Enum {
  EN = 'en',
  KA = 'ka'
}

type LocaleContextValue = {
  locale: Locale_Enum;
  setLocale: Dispatch<SetStateAction<Locale_Enum>>;
};

export const LocaleContext = createContext<LocaleContextValue>({
  locale: Locale_Enum.EN,
  setLocale: () => {}
});
