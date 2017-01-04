import React from 'react';


const OfferBar = props => (
  <div className="whitebox">
    <div className="label">{props.label}</div>
    <div className="flex-container">
      <div className="flex-item">
        <input type="text" autoComplete="off" className="form-field" value={props.value} name="fee" />
      </div>
    </div>
    { props.value > props.max ?
      <div className="progress" style={{ backgroundColor: '#FF0000' }}>
        <div className="progress-bar-value" style={{ width: `${(100 / (props.value - props.init)) * (props.max - props.init)}%` }} />
      </div>
      :
      <div className="progress">
        <div className="progress-bar-value" style={{ width: `${(100 / (props.max - props.init)) * (props.value - props.init)}%` }} />
      </div>
    }
    <div className="flex-container fee-container">
      <div className="flex-item">
        init: {props.init}
      </div>
      <div className="flex-item">
        max: {props.max}
      </div>
    </div>
  </div>
);

OfferBar.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.number,
  init: React.PropTypes.number,
  max: React.PropTypes.number,
};

export default OfferBar;
