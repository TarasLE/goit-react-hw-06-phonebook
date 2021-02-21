import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import phonebookAction from '../../redux/phonebook/phonebook-actions'
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'
import './ContactList.css'

const ContactList = ({ contacts, deleteContact }) => (
    <div className={styles.Container}>
        <TransitionGroup component="ul" classnames={styles.ListContainer}>
            {contacts.map((contact) => (
                <CSSTransition
                    timeout={250}
                    classNames={{
                        enter: styles.ContactListItemFadeEnter,
                        enterActive: styles.ContactListItemFadeEnterActive,
                        exit: styles.ContactListItemFadeExit,
                        exitActive: styles.ContactListItemFadeExitActive,
                    }}
                    key={contact.id}
                >
                    <li className={styles.Contact}>
                        <span className={styles.ContactInfo}>
                            {contact.name} : {contact.number}
                        </span>
                        <button
                            type="button"
                            onClick={() => deleteContact(contact.id)}
                            className={styles.DeleteBtn}
                        >
                            Delete
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </div>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

const filteredElements = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
    )
}

const testfilter = (filter) => {
    console.log(filter)
    return filter
}

const mapStateToProps = ({ contacts: { filter, items } }) => ({
    contacts: filteredElements(filter, items),
})

const mapDispatchToProps = (dispatch) => ({
    deleteContact: (id) => {
        dispatch(phonebookAction.deleteContact(id))
    },
    filter: () => {
        dispatch(phonebookAction.changeFilter(''))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
