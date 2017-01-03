import React from 'react';
import { connect } from 'react-redux';

import UserCard from '../components/UserCard.jsx';
import { actionCreators } from '../actions/App.js';


const Dashboard = props => (
  <div className="flex-center-middle filling">
    <div>
      <h1>Hello {props.user.name}</h1>
      <p className="push bottom small">Welcome to the NEGOTIATOR</p>
      {props.negotiations.length > 0 ?
        <div className="push bottom small">
          <h2 className="push bottom nano">Your negotiations</h2>
          <ul>
            {props.negotiations.map(negotation => (
              <UserCard
                name={negotation.negotiant.name}
                key={negotation.id}
                caption={`status: ${negotation.status}`}
                profilePic={negotation.negotiant.profilePicUrl}
                onClick={() => props.selectNegotiation(negotation.id)}
              />
            ))}
          </ul>
        </div>
      : undefined }
      {props.onlineUsers.length > 0 ?
        <div className="push bottom small">
          <h2 className="push bottom nano">New negotiation</h2>
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
  </div>
);

const userPropType = React.PropTypes.shape({
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  profilePicUrl: React.PropTypes.string,
});

Dashboard.propTypes = {
  logout: React.PropTypes.func.isRequired,
  user: userPropType.isRequired,
  onlineUsers: React.PropTypes.arrayOf(userPropType),
  negotiations: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    negotiant: userPropType,
    status: React.PropTypes.string,
  })),
};

const mapStateToProps = state => ({
  ...state.app,
});

const mapDispatchToProps = dispatch => ({
  createNegotiation: negotiantId => dispatch(actionCreators.createNegotiation(negotiantId)),
  selectNegotiation: negotiationId => dispatch(actionCreators.selectNegotiation(negotiationId)),
  logout: () => dispatch(actionCreators.logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
