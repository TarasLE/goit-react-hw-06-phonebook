import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/phonebook/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={'Loading'} persistor={store.persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
)
