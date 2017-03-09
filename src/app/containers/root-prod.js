import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { makeRoutes } from '../../routes'

export default function root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        {makeRoutes()}
      </Router>
    </Provider>
  )
}

root.propTypes = {
  store: PropTypes.object.isRequired,
}
