// import types from './phonebook-types'
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contact/add')
// const addContact = ({ id, name, number }) => ({
//     type: types.ADD,
//     payload: {
//         id,
//         name,
//         number,
//     },
// })
const deleteContact = createAction('contact/delete')
// const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId,
// })

const changeFilter = createAction('contact/changeFilter')
// const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

export default { addContact, deleteContact, changeFilter }
