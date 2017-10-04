import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as BrowserRouterGA } from 'react-g-analytics';


import { AppContainer } from 'react-hot-loader'
import { IntlProvider } from 'react-intl';

import DataLoader from './DataLoader'
import configureStore from './store'
const CONFIG = require('../config.json')[process.env.NODE_ENV || 'development'];

const store = configureStore(window.__INITIAL_STATE__)

if (__DEV__) {
  ReactDOM.render(
    <IntlProvider locale="en-GB">
      <AppContainer>
        <Provider store={ store }>
          <BrowserRouter>
            <DataLoader />
          </BrowserRouter>
        </Provider>
      </AppContainer>
    </IntlProvider>,
    document.getElementById('app')
  )
  // Hot reloading on the client
  if (module.hot) {
    module.hot.accept()
  }
} else {
  ReactDOM.render(
    <IntlProvider locale="en-GB">
      <Provider store={ store }>
        <BrowserRouterGA  id={CONFIG.gauid}>
          <DataLoader />
        </BrowserRouterGA>
      </Provider>
    </IntlProvider>,
    document.getElementById('app')
  )
}
