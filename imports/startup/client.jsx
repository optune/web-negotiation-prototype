import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import App from '../pages/app.jsx';
import { reducer as app } from '../actions/App.js';
import appMiddleware from '../middlewares/App.js';


const store = createStore(
  combineReducers({
    app,
  }),
  compose(
    applyMiddleware(
      appMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-root'),
  );
});
