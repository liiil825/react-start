import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistState } from 'redux-devtools'

import rootReducer from '../reducers'
import rootSaga from '../../modules/counter/sagas'
import DevTools from '../containers/dev-tools'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument(),
    persistState(
      typeof window !== 'undefined' && window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      )
    ),
  )(createStore)

  const store = finalCreateStore(rootReducer, initialState)
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      // eslint-disable-next-line
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

