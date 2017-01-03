// NPM imports
import classNames from 'classnames';

// React imports
import React from 'react';

// Local imports
import Avatar from './Avatar.jsx';


const MessageBox = props => (
  <div className="message-box thrust-out">
    {props.messages.map(message => (
      <div key={message.id}>
        <div
          className={classNames('message', {
            right: message.self,
            left: !message.self,
          })}
        >
          <div
            className={classNames('edge', {
              right: !message.self,
              left: message.self,
            })}
          />
          {message.body}
        </div>
        {(() => (!message.self && message.userPicture ?
          <Avatar
            className="left"
            img={message.userPicture}
            size="small"
          /> : undefined)
        )()}
        <br className="clear" />
        <small
          className={classNames('message-meta')}
        >
          <span className="light">{message.date},</span> {message.time}
        </small>
      </div>),
    )}
  </div>
);

MessageBox.messagePropTypes = React.PropTypes.shape({
  id: React.PropTypes.string,
  self: React.PropTypes.bool,
  body: React.PropTypes.string,
  userPicture: React.PropTypes.string,
  date: React.PropTypes.string,
  time: React.PropTypes.string,
});

MessageBox.propTypes = {
  messages: React.PropTypes.arrayOf(
    MessageBox.messagePropTypes,
  ),
};

MessageBox.defaultProps = {
  messages: [],
};

export default MessageBox;
