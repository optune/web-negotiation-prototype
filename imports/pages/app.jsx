import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';


const App = props => (
  <div className="flex-center-middle filling">
    {props.showLogin ?
      <button onClick={props.login}>Login</button>
    :
      <div>
        <h1>Hello {props.user ? props.user.services.auth0.email : undefined}</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
    }
  </div>
);

App.propTypes = {
  showLogin: React.PropTypes.bool,
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
  user: React.PropTypes.object,
};

const AppContainer = createContainer((props) => {
  const handles = [
    Meteor.subscribe('users'),
  ];

  const newProps = {
    ...props,
    user: Meteor.user(),
    showLogin: !Meteor.user() && !Meteor.loggingIn(),
    login: () => Meteor.loginWithAuth0(),
    logout: () => Meteor.logout(),
  };

  return newProps;
}, App);


export default AppContainer;
