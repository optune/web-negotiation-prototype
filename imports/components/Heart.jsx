import React from 'react';

const Heart = props => (
  <svg width={props.size} height={props.size} viewBox="55 613 36 36">
    <defs />
    <g id="ic_favorite_black_24px" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(55.000000, 613.000000)">
      <g id="Group">
        <polygon id="Shape" points="0 0 36 0 36 36 0 36" />
        <path d="M18,32.025 L15.825,30.045 C8.1,23.04 3,18.42 3,12.75 C3,8.13 6.63,4.5 11.25,4.5 C13.86,4.5 16.365,5.715 18,7.635 C19.635,5.715 22.14,4.5 24.75,4.5 C29.37,4.5 33,8.13 33,12.75 C33,18.42 27.9,23.04 20.175,30.06 L18,32.025 L18,32.025 Z" id="Shape" fill={props.color} />
      </g>
    </g>
  </svg>
);

Heart.propTypes = {
  size: React.PropTypes.number,
  color: React.PropTypes.color,
};

export default Heart;
