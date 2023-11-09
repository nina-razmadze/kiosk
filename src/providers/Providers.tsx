import { PropsWithChildren } from 'react';

import { QueryProvider } from './QueryProvider';
import { ThemeProvider } from './ThemeProvider';
import { LocaleProvider } from './LocaleProvider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <LocaleProvider>{children}</LocaleProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
