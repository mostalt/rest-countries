import { createGlobalStyle, ThemeProps } from 'styled-components';
import { Theme } from './services/theme';

export const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Nunito Sans, sans-serif';
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.textColor};
    background: ${({ theme }) => theme.background};
    font-size: 14px;
  }
  
  * {
    box-sizing: border-box;
  }
`;