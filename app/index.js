import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.css'

import { AppContainer } from 'react-hot-loader'
import moment from 'moment'

import App from './app'

import './main.css'

moment.locale('zh-cn')

const rootEl = document.getElementById('root')
const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  )

render(App)

if (process.env.node_env !== 'production') {
  if (module.hot) {
    module.hot.accept('./app', () => render(App))
  }
}

