// NPM imports
import classNames from 'classnames';

// React imports
import React from 'react';


const QuickMessage = props => (
  <div>
    <div className="bluebox">
      <div>{props.user} sent a quickanswer:</div>
      <div>
        <ul>
          {(props.changes || []).map(change => (
            <li>
              - {change.message}
            </li>
            ),
          )}
        </ul>
      </div>
    </div>
    <small
      className={classNames('message-meta')}
    >
      <span className="light">{props.date},</span> {props.time}
    </small>
  </div>
);

QuickMessage.propTypes = {
  changes: React.PropTypes.arrayOf(React.PropTypes.shape({
    object: React.PropTypes.string,
    from: React.PropTypes.string,
    to: React.PropTypes.string,
  })),
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  user: React.PropTypes.string,
};

QuickMessage.defaultProps = {

};

export default QuickMessage;
