import React from 'react';

import ThumbUp from './ThumbUp.jsx';
import ThumbDown from './ThumbDown.jsx';

const ThumbRating = props => (
  <div>
    <ThumbDown size={24} color="#27E200" />
    <ThumbUp size={24} color="#27E200" />
  </div>
);

ThumbRating.propTypes = {
  size: React.PropTypes.number,
  color: React.PropTypes.color,
};

export default ThumbRating;
