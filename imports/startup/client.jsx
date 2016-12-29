import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import App from '../pages/app.jsx';
import { reducer as app, actionCreators as appActionCreators } from '../actions/App.js';
import meteorMiddleware from '../middlewares/meteor.js';
import sendbirdMiddleware from '../middlewares/sendbird.js';


const store = createStore(
  combineReducers({
    app,
  }),
  compose(
    applyMiddleware(
      meteorMiddleware,
      sendbirdMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

const deconstructUser = user => ({
  id: user._id,
  name: user.services.auth0.name,
  profilePicUrl: user.services.auth0.picture,
});

Tracker.autorun(() => {
  if (Meteor.user()) {
    store.dispatch(appActionCreators.authenticate(deconstructUser(Meteor.user())));
    store.dispatch(appActionCreators.setOnlineUsers(
      Meteor.users.find({
        _id: { $ne: Meteor.user()._id },
        'status.online': true,
      }).fetch().map(deconstructUser),
    ));
  }
});

Meteor.startup(() => {
  Meteor.subscribe('users');

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-root'),
  );
});
