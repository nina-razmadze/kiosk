import { PropsWithChildren, useState, useCallback } from 'react';

import { ConfigProvider as AntdConfigProvider, FloatButton, theme } from 'antd';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

import '@src/assets/global.css';
import GlobalCss from '@src/assets/global.styled';
import { ThemeContext, ThemeModes_Enum } from './ThemeContext';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeModes_Enum>(
    ThemeModes_Enum.DARK
  );

  const { darkAlgorithm } = theme;

  const colors = {
    [ThemeModes_Enum.LIGHT]: {
      primary: '#ffffff'
    },
    [ThemeModes_Enum.DARK]: {
      primary: '#000000'
    }
  };

  const toggleTheme = useCallback(() => {
    if (themeMode === ThemeModes_Enum.LIGHT) {
      setThemeMode(ThemeModes_Enum.DARK);
    } else if (themeMode === ThemeModes_Enum.DARK) {
      setThemeMode(ThemeModes_Enum.LIGHT);
    }
  }, [themeMode]);

  const algorithm = themeMode === ThemeModes_Enum.DARK ? [darkAlgorithm] : [];

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <AntdConfigProvider
        theme={{
          algorithm: algorithm
        }}
      >
        <StyledThemeProvider
          theme={{ colors: colors[themeMode], mode: themeMode }}
        >
          <GlobalCss />
          {children}
        </StyledThemeProvider>
        <FloatButton
          icon={
            themeMode === ThemeModes_Enum.DARK ? (
              <MdLightMode />
            ) : (
              <MdDarkMode />
            )
          }
          style={{ right: 94 }}
          onClick={toggleTheme}
        />
      </AntdConfigProvider>
    </ThemeContext.Provider>
  );
}
