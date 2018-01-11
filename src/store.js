import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

export const configStore = (reducers, preloadState) => createStore(reducers, preloadState, applyMiddleware(thunkMiddleware))
