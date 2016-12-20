import React from 'react';


const UserCard = props => (
  <div className="card padding bottom micro interactive flex">
    <div className="push top left micro circle sized sized-card">
      <img className="circle bg-light" src={props.profilePic} alt="profile pic" />
    </div>
    <summary style={{ width: '100%', margin: 10, marginTop: 15 }}>
      <h3><strong>{props.name}</strong></h3>
      <div className="subtitle">{props.id}</div>
    </summary>
  </div>
);

UserCard.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  profilePic: React.PropTypes.string,
};


export default UserCard;
