import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import SendBird from 'sendbird';

import App from '../pages/app.jsx';
import { reducer as app } from '../actions/App.js';


const store = createStore(
  combineReducers({
    app,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

Meteor.startup(() => {
  const sendbird = new SendBird({
    appId: Meteor.settings.public.SENDBIRD_APP_ID,
  });

  render(
    <Provider store={store}>
      <App sendbird={sendbird} />
    </Provider>,
    document.getElementById('react-root'),
  );
});
