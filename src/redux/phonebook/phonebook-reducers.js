import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import actions from './phonebook-actions'

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => [...state, payload],

    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
})
const filter = createReducer('', {
    [actions.changeFilter]: (state, { payload }) => payload,
})

export default combineReducers({
    items,
    filter,
})
