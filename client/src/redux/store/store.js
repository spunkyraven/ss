import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)))

export default store  