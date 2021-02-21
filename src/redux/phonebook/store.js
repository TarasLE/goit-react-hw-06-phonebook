import {
    configureStore,
    getDefaultMiddleware,
    // combineReducers,
} from '@reduxjs/toolkit'
import phoneBookReducer from '../phonebook/phonebook-reducers'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig = {
    key: 'myRoot',
    storage,
}
// const rootReducer = combineReducers({
//     contacts: persistReducer(persistConfig, phoneBookReducer),
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const phonebookPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
]
const store = configureStore({
    reducer: {
        contacts: persistReducer(phonebookPersistConfig, phoneBookReducer),
    },
    // reducer: phoneBookReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export default { store, persistor }
