// NPM imports
import classNames from 'classnames';

// React imports
import React from 'react';

const SystemMessage = props => (
  <div className="system-message-box thrust-out">
    <div className="bluebox">
      <div>{props.user} updated the offer:</div>
      <div>
        <ul>
          {props.changes.map(change => (
            <li>
              <strong>{change.object}</strong> changed from {change.from} to <strong>{change.to}</strong>
            </li>
            ),
          )}
        </ul>
      </div>
    </div>
    <br className="clear" />
        <small
          className={classNames('message-meta')}
        >
          <span className="light">{props.date},</span> {props.time}
        </small>

  </div>
);

SystemMessage.propTypes = {
  changes: React.PropTypes.arrayOf(React.PropTypes.shape({
    object: React.PropTypes.string,
    from: React.PropTypes.string,
    to: React.PropTypes.string,
  })),
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  user: React.PropTypes.string,
};

SystemMessage.defaultProps = {
  changes: [],
};

export default SystemMessage;
