import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { reducer as app, actionCreators as appActionCreators } from '../actions/App.js';
import meteorMiddleware from '../middlewares/meteor.js';
import sendbirdMiddleware from '../middlewares/sendbird.js';

import Dashboard from '../pages/dashboard.jsx';
import Login from '../pages/login.jsx';


const store = createStore(
  combineReducers({
    app,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(
      routerMiddleware(browserHistory),
      meteorMiddleware,
      sendbirdMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

const history = syncHistoryWithStore(browserHistory, store);

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

const requireAuth = (nextState, replace) => {
  if (!Meteor.user() && !Meteor.loggingIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  Meteor.subscribe('users');

  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" /* component={Layout} */>
          <IndexRoute component={Dashboard} onEnter={requireAuth} />
          <Route path="login" component={Login} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('react-root'),
  );
});
