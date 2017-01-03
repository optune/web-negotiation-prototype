import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions/Switch';

const Switch = props => (
  <div className="onoffswitch">
    <input
      onClick={props.onClick} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch"
      defaultChecked={props.checked}
    />
    <label className="onoffswitch-label" htmlFor="myonoffswitch" />
  </div>
);

Switch.propTypes = {
  checked: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

Switch.defaultProbs = {
  checked: false,
};

const mapStateToProps = (globalState, ownProps) => ({
  ...ownProps,
  ...globalState,
});

const mapDispatchToProps = dispatch => ({
  initialize: checked => dispatch(actionCreators.initialize(checked)),
  onClick: () => dispatch(actionCreators.handleClick()),
});

class SwitchLifeCycle extends React.Component {
  componentDidMount() {
    this.props.initialize(this.props.initialChecked);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialChecked !== this.props.initialChecked) {
      this.props.initialize(nextProps.initialChecked);
    }
  }

  render() {
    return <Switch {...this.props} />;
  }
}

SwitchLifeCycle.propTypes = {
  initialize: React.PropTypes.func,
  initialChecked: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchLifeCycle);
