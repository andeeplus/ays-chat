import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body, #root {
    margin: 0;
    height: 100%;
    scrollbar-width: thin;
    scrollbar-color: ${(p) => p.theme.colors.gray[8]} ${(p) => p.theme.colors.gray[0]};
  }

  html {
    height: -webkit-fill-available;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.colors.gray[0]};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.gray[3]} ;
    border-radius: 6px;
    border: 3px solid ${(p) => p.theme.colors.gray[1]};
  }

  body, input, button, a, textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input[type="text" i] {
    padding: 0px 4px;
  }
`