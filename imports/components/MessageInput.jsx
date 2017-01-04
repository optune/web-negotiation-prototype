import React from 'react';


const MessageInput = props => (
  <div className="whitebox">
    <label className="field" htmlFor={props.name}>
      <div className="label">{props.label}</div>
      <div className="messageBox flex-container">
        <div className="messageText flex-item">
          <textarea
            {...props.input}
            className="form-field textarea small"
          >
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
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  message: React.PropTypes.string,
  onClick: React.PropTypes.func,
  input: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

MessageInput.defaultProps = {
  name: 'message',
};

export default MessageInput;
