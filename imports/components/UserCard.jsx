import React from 'react';


const UserCard = props => (
  <button className="card padding bottom micro interactive flex" onClick={props.onClick}>
    <div className="push top left micro circle sized sized-card">
      <img className="circle bg-light" src={props.profilePic} alt="profile pic" />
    </div>
    <summary style={{ width: '100%', margin: 10, marginTop: 15 }}>
      <h3><strong>{props.name}</strong></h3>
      <div className="subtitle">{props.caption}</div>
    </summary>
  </button>
);

UserCard.propTypes = {
  caption: React.PropTypes.string,
  name: React.PropTypes.string,
  profilePic: React.PropTypes.string,
  onClick: React.PropTypes.func,
};


export default UserCard;
