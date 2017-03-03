import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import sagaMonitor from '../../sagaMonitor'

import Root from './app/containers/root'
import reducer from './modules/counter/reducers'
import rootSaga from './modules/counter/sagas'
import AppContainer from './app/containers/hmr-container'

const isDev = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const composeEnhancers = isDev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/* eslint-enable */
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
)
sagaMiddleware.run(rootSaga)

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

if (isDev) {
  if (module.hot) {
    module.hot.accept('./app/containers/root', () => render(Root))
  }
}

