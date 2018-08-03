import {createStore, applyMiddleware, combineReducers} from 'redux'
import loggingMiddleware from 'redux-logger'
import user from './reducer/user'
import theme from './reducer/theme'
import music from './reducer/music'

const reducer = combineReducers({
    user, theme, music
})

export default createStore(reducer, applyMiddleware(loggingMiddleware))