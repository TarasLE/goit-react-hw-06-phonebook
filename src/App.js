import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import ContactForm from './components/Contactform/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className={styles.Container}>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames={{
                        appear: styles.HeaderFadeAppear,
                        appearActive: styles.HeaderFadeAppearActive,
                    }}
                >
                    <h1>Phonebook</h1>
                </CSSTransition>

                <ContactForm />

                <CSSTransition
                    in={this.props.contacts.length >= 1}
                    timeout={0}
                    unmountOnExit
                >
                    <Filter />
                </CSSTransition>
                <CSSTransition
                    in={this.props.contacts.length > 0}
                    timeout={250}
                    unmountOnExit
                >
                    <ContactList />
                </CSSTransition>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
})

export default connect(mapStateToProps, null)(App)
