import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Counter from '../../modules/counter/components'

export default function root({ store }) {
  const action = type => store.dispatch({ type })

  return (
    <Provider store={store}>
      <div>
        <Counter
          value={store.getState()}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />
      </div>
    </Provider>
  )
}

