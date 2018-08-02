import {createStore, applyMiddleware, combineReducers} from 'redux'
import loggingMiddleware from 'redux-logger'
import user from './reducer/user'


const reducer = combineReducers({
    user,
})

export default createStore(reducer, applyMiddleware(loggingMiddleware))