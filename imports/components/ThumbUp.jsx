import React from 'react';

const ThumbUp = props => (
  <svg width={props.size} height={props.size} viewBox="81 739 36 36">
    <defs />
    <g id="ic_thumb_up_black" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(81.000000, 739.000000)">
      <g id="Group">
        <polygon id="Shape" points="0 0 36 0 36 36 0 36" />
        <path d="M1.5,31.5 L7.5,31.5 L7.5,13.5 L1.5,13.5 L1.5,31.5 L1.5,31.5 Z M34.5,15 C34.5,13.35 33.15,12 31.5,12 L22.035,12 L23.46,5.145 L23.505,4.665 C23.505,4.05 23.25,3.48 22.845,3.075 L21.255,1.5 L11.385,11.385 C10.83,11.925 10.5,12.675 10.5,13.5 L10.5,28.5 C10.5,30.15 11.85,31.5 13.5,31.5 L27,31.5 C28.245,31.5 29.31,30.75 29.76,29.67 L34.29,19.095 C34.425,18.75 34.5,18.39 34.5,18 L34.5,15.135 L34.485,15.12 L34.5,15 L34.5,15 Z" id="Shape" fill={props.color} />
      </g>
    </g>
  </svg>
);

ThumbUp.propTypes = {
  size: React.PropTypes.number,
  color: React.PropTypes.color,
};

export default ThumbUp;
