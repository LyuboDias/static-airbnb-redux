import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
//  logger is a middleware tool that act between action and reducer, need to be disabled when pushing to production or restricted ti admin
import { logger } from 'redux-logger';
//  this tool deals with the promise when we fetch API
import reduxPromise from 'redux-promise';

import '../assets/stylesheets/application.scss';
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';
import App from './components/app';


const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

//  compose refer to redux devtool in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
 root);
