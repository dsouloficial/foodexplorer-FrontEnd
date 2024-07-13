import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => `${theme.COLORS.LIGHT_700}77`};
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
  }

  @supports (scrollbar-width: thin) {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => `${theme.COLORS.LIGHT_700} ${theme.COLORS.DARK_600}`};
      scrollbar-gutter: stable;
    }
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Roboto', sans-serif;
    min-height: 100%;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
