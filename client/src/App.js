import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from '@andeeplus/aplus-ui'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import GlobalStyle from './GlobalStyle'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
