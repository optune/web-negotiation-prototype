import classNames from 'classnames';

// React imports
import React from 'react';

import NegotiationStatus from '../constants/NegotiationStatus.js';


const SystemMessage = props => (
  <div>
    <div
      className={classNames(
        'bluebox',
        {
          greenbox: props.changes[0].to === NegotiationStatus.CONFIRMED,
          redbox: props.changes[0].to === NegotiationStatus.DECLINED,
        })
      }
    >
      <div>{props.user} updated the offer:</div>
      <div>
        <ul>
          {props.changes.map(change => (
            <li key={change.object}>
              <strong>{change.object} </strong>
              changed from {change.from} to
              <strong> {change.to}</strong>
            </li>
            ),
          )}
        </ul>
      </div>
    </div>
  </div>
);

SystemMessage.propTypes = {
  changes: React.PropTypes.arrayOf(React.PropTypes.shape({
    object: React.PropTypes.string,
    from: React.PropTypes.string,
    to: React.PropTypes.string,
  })),
  user: React.PropTypes.string,
};

SystemMessage.defaultProps = {
  changes: [],
};

export default SystemMessage;
