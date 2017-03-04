const initState = {
  value: 0,
}

export default function counter(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1,
      }
    case 'INCREMENT_IF_ODD':
      return (state.value % 2 !== 0) ? {
        value: state.value + 1,
      } : state
    case 'DECREMENT':
      return {
        value: state.value - 1
      }
    default:
      return state
  }
}

