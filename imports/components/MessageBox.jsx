// NPM imports
import classNames from 'classnames';

// React imports
import React from 'react';

// Local imports
import Avatar from './Avatar.jsx';
import MessageType from '../constants/MessageType.js';


const MessageBox = props => (
  <div className="message-box thrust-out">
    {
    props.messages
    .sort((a, b) => ((a.createdAt > b.createdAt) ? 1 : -1))
    .map(message => (
      <div key={message.id}>
        { message.type === MessageType.USER ?
          <div>
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
            { (!message.self && message.userPicture) ?
              <Avatar
                className="left"
                img={message.userPicture}
                size="small"
              /> : undefined
            }
            <br className="clear" />
          </div>
        :
          <div>
            { message.type === MessageType.SYSTEM ?
              <div className="bluebox">
                <div>
                  {!message.self ?
                    <strong>The Other </strong> : <strong>Me </strong>
                  }
                  updated the offer:
                </div>
                <div>
                  <ul>
                    {(message.changes || []).map(change => (
                      <li>
                        -
                        <strong>{change.object}</strong>
                        changed from {change.from} to
                        <strong>{change.to}</strong>
                      </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            : // message.type === MessageType.QUICK
              <div className="bluebox">
                <div>
                  { !message.self ?
                    <strong>The Other</strong> : <strong>Me</strong> } sent a quickanswer:
                  <div>
                    <ul>
                      {(message.changes || []).map(change => (
                        <li>
                          - {change.message}
                        </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
             }
          </div>
        }
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
