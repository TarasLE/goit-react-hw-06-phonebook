import shortid from 'shortid'
import types from './phonebook-types'

const addContact = ({ id, name, number }) => ({
    type: types.ADD,
    payload: {
        id,
        name,
        number,
    },
})

const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId,
})

const changeFilter = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value,
})

export default { addContact, deleteContact, changeFilter }
