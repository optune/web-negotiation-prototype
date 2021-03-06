import React from 'react';

const FeeInput = props => (
  <label className="field fee-input" htmlFor="fee-input">
    <div className="label">{props.label}</div>
    <input {...props.input} disabled={props.disabled} type="number" step="1" min="0" className="form-field" />
  </label>
);

FeeInput.propTypes = {
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  input: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default FeeInput;
