import { combineReducers } from 'redux'
import types from './phonebook-types'
import store from './store'

const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            // console.log(items)
            return [...state, payload]

        case types.DELETE:
            // console.log(state)
            return state.filter(({ id }) => id !== payload)

        default:
            return state
    }
}

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload
    }
    console.log(state.length)
    // if (state.length !== 0)
    return state
}

// const mapStateT

export default combineReducers({
    items,
    filter,
})
