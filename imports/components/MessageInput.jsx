import React from 'react';

const MessageInput = props => (
  <div className="whitebox">
  <label className="field">
    <div className="label">{props.label}</div>
    <div className="messageBox flex-container">
      <div className="messageText flex-item">
        <textarea className="form-field textarea small" name="message">
          {props.message}
        </textarea>
      </div>
      <div className="sendIcon flex-item">
        <a onClick={props.onClick}>
          <svg width="21px" height="18px" viewBox="2 3 21 18" >
            <polygon
              id="Fill-5" stroke="none" fill="#000000"
              fillRule="evenodd" points="2 10 17 11.999 2 14 2.011 21 22.999 11.999 2.011 3"
            />
          </svg>
        </a>
      </div>
    </div>
    </label>
  </div>
);

MessageInput.propTypes = {
  label: React.PropTypes.string,
  message: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default MessageInput;
