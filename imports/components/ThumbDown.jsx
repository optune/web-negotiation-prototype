import React from 'react';

const ThumbDown = props => (
  <svg onClick={props.onClick} width={props.size} height={props.size} viewBox="20 739 36 36">
    <defs />
    <g id="ic_thumb_down_black_24px" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(20.000000, 739.000000)">
      <g id="Group">
        <polygon id="Shape" points="0 0 36 0 36 36 0 36" />
        <path
          d="M22.5,4.5 L9,4.5 C7.755,4.5 6.69,5.25 6.24,6.33 L1.71,16.905 C1.575,17.25 1.5,17.61 1.5,18 L1.5,20.865 L1.515,20.88 L1.5,21 C1.5,22.65 2.85,24 4.5,24 L13.965,24 L12.54,30.855 L12.495,31.335 C12.495,31.95 12.75,32.52 13.155,32.925 L14.745,34.5 L24.63,24.615 C25.17,24.075 25.5,23.325 25.5,22.5 L25.5,7.5 C25.5,5.85 24.15,4.5 22.5,4.5 L22.5,4.5 Z M28.5,4.5 L28.5,22.5 L34.5,22.5 L34.5,4.5 L28.5,4.5 L28.5,4.5 Z"
          id="Shape"
          fill={props.active ? '#27E200' : '#000000'}
        />
      </g>
    </g>
  </svg>
);

ThumbDown.propTypes = {
  size: React.PropTypes.number,
  active: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default ThumbDown;
