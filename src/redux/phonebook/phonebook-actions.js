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

export default { addContact, deleteContact }
