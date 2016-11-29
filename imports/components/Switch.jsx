import React from 'react';


const Switch = props => (
  <div className="onoffswitch">
    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked={props.checked} />
    <label className="onoffswitch-label" htmlFor="myonoffswitch" />
  </div>
);

Switch.propTypes = {
  checked: React.PropTypes.boolean,
};


export default Switch;
