import React from 'react'
import ReactDOM from 'react-dom'

import Root from './app/containers/root'
import AppContainer from './app/containers/hmr-container'
import createStore from './app/store/create-store'

const store = createStore()

const isDev = process.env.NODE_ENV === 'development'

function render() {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()
store.subscribe(render)

if (isDev && module.hot) {
  module.hot.accept('./app/containers/root', () => render(Root))
}
