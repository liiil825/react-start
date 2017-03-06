import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import debug from 'debug'

import { makeRoutes } from '../../routes'
import DevTools from './dev-tools'

const isBrowser = process.env.IS_BROWSER === 'true'
debug('Root:isBrowser?:', isBrowser)

export default function RootDev({ store }) {
  return (
    <Provider store={store}>
      <div>
        {makeRoutes()}
        <DevTools />
      </div>
    </Provider>
  )
}

RootDev.propTypes = {
  store: PropTypes.object.isRequired,
}

