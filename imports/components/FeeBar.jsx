import React from 'react';


const FeeBar = props => (
  <div className="whitebox">
    <div className="label">{props.label}</div>
    <div className="flex-container">
      <div className="flex-item">
        <input type="text" autoComplete="off" className="form-field" value={props.value} name="fee" />
      </div>
    </div>
    <div className="progress">
      { props.value < props.max ?
        <div className="progress-bar-min" style={{ width: `${(100 / props.max) * props.min}%` }}>
          <div className="progress-bar-value" style={{ width: `${(100 / props.min) * props.value}%` }} />
        </div>
        :
        <div className="progress-bar-value" style={{ width: '100%' }} />
      }
    </div>
    <div className="flex-container fee-container">
      <div className="flex-item">
        min: {props.min}
      </div>
      <div className="flex-item">
        target: {props.max}
      </div>
    </div>
  </div>
);

FeeBar.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.number,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
};

export default FeeBar;
