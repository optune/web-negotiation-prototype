import { Meteor } from 'meteor/meteor';
import { push } from 'react-router-redux';

import { actions, actionCreators } from '../actions/App.js';


export default store => next => (action) => {
  switch (action.type) {
    case actions.LOGIN:
      Meteor.loginWithAuth0();
      break;
    case actions.LOGOUT:
      Meteor.logout(() => store.dispatch(actionCreators.deauthenticate()));
      break;
    case actions.AUTHENTICATE:
      store.dispatch(push('/'));
      break;
    case actions.DEAUTHENTICATE:
      store.dispatch(push('/login'));
      break;
    default:
  }

  return next(action);
};
