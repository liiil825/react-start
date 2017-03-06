import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter, BrowserRouter } from 'react-router'
import { makeRoutes } from '../routes'

export default function root({ store }) {
  const action = type => store.dispatch({ type })

  return (
    <Provider store={store}>
      <Router {...this.props} >
        {makeRoutes()}
      </Router>
    </Provider>
  )
}

root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

