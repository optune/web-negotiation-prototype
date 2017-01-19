// React imports
import React from 'react';

import SystemMessage from './SystemMessage.jsx';
import UserMessage from './UserMessage.jsx';
import QuickMessage from './QuickMessage.jsx';
import MessageType from '../constants/MessageType.js';


const MessageBox = props => (
  <div className="message-box thrust-out">
    {
    props.messages
    .sort((a, b) => ((a.createdAt > b.createdAt) ? 1 : -1))
    .map(message => (
      <div key={message.id}>
        {(() => {
          switch (message.type) {
            case MessageType.USER:
              return <UserMessage {...message} />;
            case MessageType.SYSTEM:
              return <SystemMessage user={message.self ? 'You' : 'Negotiant'} {...message} />;
            case MessageType.QUICK:
              return <QuickMessage user={message.self ? 'You' : 'Negotiant'} {...message} />;
            default:
              return <div />;
          }
        })()}
      </div>),
    )}
  </div>
);

MessageBox.messagePropTypes = React.PropTypes.shape({
  id: React.PropTypes.string,
  self: React.PropTypes.bool,
  body: React.PropTypes.string,
  userPicture: React.PropTypes.string,
  createdAt: React.PropTypes.number,
  date: React.PropTypes.string,
  time: React.PropTypes.string,
  type: React.PropTypes.oneOf(Object.values(MessageType)),
  changes: React.PropTypes.arrayOf(React.PropTypes.shape({
    object: React.PropTypes.string,
    from: React.PropTypes.string,
    to: React.PropTypes.string,
    message: React.PropTypes.string,
  })),
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
