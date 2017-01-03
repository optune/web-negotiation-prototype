import React from 'react';


export default (props) => (
  <div id="whitebox">
    <div id="anrede">{props.tofrom}:</div><div><b>{props.name}</b></div>
  </div>
);
