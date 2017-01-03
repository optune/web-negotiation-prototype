import React from 'react';


const Avatar = (props) => (
  <div
    className={`${props.className || ''} circle sized ${props.size} quiten`}
  >
    <img
      className="circle bg-light"
      src={props.img}
    />
  </div>
);

Avatar.propTypes = {
  size: React.PropTypes.string,
  img: React.PropTypes.string,
  className: React.PropTypes.string,
};

Avatar.defaultProps = {
  size: 'tiny',
};

export default Avatar;
