import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import phoneBookReducer from '../phonebook/phonebook-reducers'

const rootReducer = combineReducers({
    contacts: phoneBookReducer,
})
// const reducer = (state = {}, action) => state
const store = createStore(rootReducer, composeWithDevTools())
export default store
