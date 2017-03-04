import { combineReducers } from 'redux'
import counters from '../../modules/counter/reducers'

const rootReducer = combineReducers({
  counters,
})

export default rootReducer

