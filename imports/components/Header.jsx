import React from 'react';

const Header = props => (
  <div className="whitebox">
    <div className="anrede">{props.tofrom}:</div>
    <div><b>{props.name}</b></div>
  </div>
);

Header.propTypes = {
  tofrom: React.PropTypes.string,
  name: React.PropTypes.string,
};

export default Header;
