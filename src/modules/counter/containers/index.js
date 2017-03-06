import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components'

function CounterContainer(props) {
  return (
    <Counter {...props} />
  )
}

function mapStateToProps(state) {
  return {
    value: state.counters.value,
  }
}

export default connect(
  mapStateToProps, {
    onIncrement: () => ({
      type: 'INCREMENT',
    }),
    onDecrement: () => ({
      type: 'DECREMENT',
    }),
    onIncrementIfOdd: () => ({
      type: 'INCREMENT_IF_ODD',
    }),
    onIncrementAsync: () => ({
      type: 'INCREMENT_ASYNC',
    }),
  },
)(CounterContainer)

