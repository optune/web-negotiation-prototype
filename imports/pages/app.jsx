import React from 'react';
import { connect } from 'react-redux';

import UserCard from '../components/UserCard.jsx';
import { actionCreators } from '../actions/App.js';


const App = props => (
  <div className="flex-center-middle filling">
    {!props.user.id ?
      <button onClick={props.login}>Login</button>
    :
      <div>
        <h1>Hello {props.user.name}</h1>
        <p className="push bottom small">Welcome to the NEGOTIATOR</p>
        {props.onlineUsers.length > 0 ?
          <div className="push bottom small">
            <p>Select a negotiant from below to start a negotation:</p>
            <ul>
              {props.onlineUsers.map(user => (
                <UserCard
                  name={user.name}
                  key={user.id}
                  profilePic={user.profilePicUrl}
                  onClick={() => props.createNegotiation(user.id)}
                />
              ))}
            </ul>
          </div>
        :
          <p>No one is online 🤔, invite your negotiant.</p>
        }
        <button onClick={props.logout}>Logout</button>
      </div>
    }
  </div>
);

App.propTypes = {
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
  user: React.PropTypes.object,
  onlineUsers: React.PropTypes.array,
};

const mapStateToProps = state => ({
  ...state.app,
});

const mapDispatchToProps = dispatch => ({
  createNegotiation: negotiantId => dispatch(actionCreators.createNegotiation(negotiantId)),
  login: () => dispatch(actionCreators.login()),
  logout: () => dispatch(actionCreators.logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
