import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { theme } from '@andeeplus/aplus-ui'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import './index.css'
import Home from './Home/Home'
import ChatRoom from './ChatRoom/ChatRoom'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    margin: 0;
        scrollbar-width: thin;
    scrollbar-color: ${(p) => p.theme.colors.gray[8]} ${(p) =>
  p.theme.colors.gray[0]};
  }
  ::-webkit-scrollbar {
    width: 11px;
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
`

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
