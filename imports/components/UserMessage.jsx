// NPM imports
import classNames from 'classnames';

// React imports
import React from 'react';

// Local imports
import Avatar from './Avatar.jsx';


const UserMessage = props => (
  <div>
    <div
      className={classNames('message', {
        right: props.self,
        left: !props.self,
      })}
    >
      <div
        className={classNames('edge', {
          right: !props.self,
          left: props.self,
        })}
      />
      {props.body}
    </div>
    { (!props.self && props.userPicture) ?
      <Avatar
        className="left"
        img={props.userPicture}
        size="small"
      /> : undefined
    }
    <br className="clear" />
  </div>
);

UserMessage.propTypes = {
  self: React.PropTypes.bool,
  body: React.PropTypes.string,
  userPicture: React.PropTypes.string,
};

UserMessage.defaultProps = {

};

export default UserMessage;
