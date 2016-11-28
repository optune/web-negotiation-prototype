import React from 'react';


const Slider = props => (
  <input id={props.id} type="range" min={props.min} max={props.max} step={props.steps} />
);

Slider.propTypes = {
  id: React.PropTypes.string,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  steps: React.PropTypes.number,
};

export default Slider;
