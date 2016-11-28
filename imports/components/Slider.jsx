import React from 'react';


export default (props) => (
<input id={props.id} type="range" min={props.min} max={props.max} step={props.steps} />
);