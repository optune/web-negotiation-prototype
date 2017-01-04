import React from 'react';

const FeeInput = props => (
  <label className="field fee-input">
    <div className="label">{props.label}</div>
    <div className="flex-container">
      <div className="flex-item fee-input">
        <input type="text" autoComplete="off" className="form-field" value={props.value} name="fee" />
      </div>
    </div>
    </label>
);

FeeInput.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default FeeInput;
