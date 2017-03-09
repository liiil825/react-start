import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { makeRoutes } from '../../routes'

export default function root({ store }) {
  return (
    <Provider store={store}>
      {makeRoutes()}
    </Provider>
  )
}

root.propTypes = {
  store: PropTypes.object.isRequired,
}
