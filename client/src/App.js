import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from '@andeeplus/aplus-ui'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import GlobalStyle from './styles/GlobalStyle'
import store, { persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyle />
            <Routes />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
