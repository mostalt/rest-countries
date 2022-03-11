import React from 'react'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global-styles'
import { Main } from './pages/Main'
import { useTheme } from './hooks/themes'
import { ThemeContext, selectTheme } from './themes';

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
  <StyleProvider>
    <Main />
  </StyleProvider>
)