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
        { message.type === 'user' ?
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
          </div>
        :
          <div>
            { message.type === 'system' ?
              <div className="bluebox">
                <div>
                  {!message.self ?
                    <strong>The Other </strong> : <strong>Me </strong>
                  }
                  updated the offer:
                </div>
                <div>
                  <ul>
                    {message.changes.map(change => (
                      <li>
                        - <strong>{change.object}</strong> changed from {change.from} to <strong>{change.to}</strong>
                      </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            :
              <div className="bluebox">
                <div>
                  { !message.self ?
                    <strong>The Other</strong> : <strong>Me</strong> } send a Quickanswer:
                  <div>
                    <ul>
                      {message.changes.map(change => (
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


MessageBox.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    self: React.PropTypes.bool,
    body: React.PropTypes.string,
    userPicture: React.PropTypes.string,
    date: React.PropTypes.string,
    time: React.PropTypes.string,
    type: React.PropTypes.string,
    changes: React.PropTypes.arrayOf(React.PropTypes.shape({
      object: React.PropTypes.string,
      from: React.PropTypes.string,
      to: React.PropTypes.string,
      message: React.PropTypes.string,
    })),
  })),
};

MessageBox.defaultProps = {
  messages: [],
};

export default MessageBox;
