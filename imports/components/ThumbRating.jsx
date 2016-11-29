import React from 'react';

import ThumbUp from './ThumbUp.jsx';
import ThumbDown from './ThumbDown.jsx';

const ThumbRating = props => (
  <div>
    <ThumbDown size={24} active={props.value < 0} />
    <ThumbUp size={24} active={props.value > 0} />
  </div>
);

ThumbRating.propTypes = {
  value: React.PropTypes.number,
};

ThumbRating.defaultProps = {
  value: 0,
};

export default ThumbRating;
