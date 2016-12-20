import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';

import UserCard from '../components/UserCard.jsx';


const App = props => (
  <div className="flex-center-middle filling">
    {props.showLogin ?
      <button onClick={props.login}>Login</button>
    :
      <div>
        <h1>Hello {props.user ? props.user.services.auth0.name : undefined}</h1>
        <p className="push bottom small">Welcome to the NEGOTIATOR</p>
        {props.onlineUsers.length > 0 ?
          <div className="push bottom small">
            <p>Select a negotiant from below to start a negotation:</p>
            <ul>
              {props.onlineUsers.map(user => (
                <UserCard
                  name={user.services.auth0.name}
                  id={user._id}
                  profilePic={user.services.auth0.picture}
                />
              ))}
            </ul>
          </div>
        :
          <p>On one is online 🤔, invite your negotiant.</p>
        }
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
  onlineUsers: React.PropTypes.array,
};

const AppContainer = createContainer((props) => {
  const handles = [
    Meteor.subscribe('users'),
  ];

  const allReady = handles.reduce((previousValue, currentValue) =>
    previousValue && currentValue.ready(), true);

  const newProps = {
    ...props,
    user: Meteor.user(),
    onlineUsers: [],
    showLogin: !Meteor.user() && !Meteor.loggingIn(),
    login: () => Meteor.loginWithAuth0(),
    logout: () => Meteor.logout(),
  };

  if (allReady) {
    newProps.onlineUsers = Meteor.users.find({
      _id: { $ne: Meteor.user()._id },
      'status.online': true,
    }).fetch();
  }

  return newProps;
}, App);


export default AppContainer;
