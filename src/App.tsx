import React, { useCallback } from 'react'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global-styles'
import { Main } from './pages/Main'
import { useFetchCoutries } from './hooks/countries'
import { useTheme } from './hooks/themes'
import { ThemeContext, selectTheme } from './services/theme';
import { CoutriesContext } from './services/countries'

const CoutriesProvider = ({ children }: { children?: React.ReactNode }) => {
  const { countries, isLoading } = useFetchCoutries()
  
  const getCountryByIata = useCallback((iata: string) => {
    return countries[iata] ? countries[iata] : null
  }, [countries])

  return (
    <CoutriesContext.Provider value={{
      isLoading,
      countries,
      getCountryByIata,
    }}>
      {children}
    </CoutriesContext.Provider>
  )
}

const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, toggleTheme] = useTheme()
  
  const theme = selectTheme(themeName)

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const App = () => (
  <CoutriesProvider>
    <StyleProvider>
      <Main />
    </StyleProvider>
  </CoutriesProvider>
)