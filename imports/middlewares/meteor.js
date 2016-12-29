import { Meteor } from 'meteor/meteor';

import { actions, actionCreators } from '../actions/App.js';


export default store => next => (action) => {
  switch (action.type) {
    case actions.LOGIN:
      Meteor.loginWithAuth0();
      break;
    case actions.LOGOUT:
      Meteor.logout(() => store.dispatch(actionCreators.deauthenticate()));
      break;
    default:
  }

  return next(action);
};
