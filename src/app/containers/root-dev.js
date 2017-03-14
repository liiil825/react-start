import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import debug from 'debug'

import { BrowserRouter as Router } from 'react-router-dom'

import { makeRoutes } from '../../routes'
import DevTools from './dev-tools'

localStorage.debug = 'worker:*'
const log = debug('worker:a')
const isBrowser = process.env.IS_BROWSER === 'true'
log('Root:isBrowser?:', isBrowser)

export default function RootDev({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Router>
          {makeRoutes()}
        </Router>
        <DevTools />
      </div>
    </Provider>
  )
}

RootDev.propTypes = {
  store: PropTypes.object.isRequired,
}
