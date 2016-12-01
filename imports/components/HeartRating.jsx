import React from 'react';
import { connect } from 'react-redux';

import Heart from './Heart.jsx';

import { actionCreators } from '../actions/HeartRating';

const HeartRating = props => (
  <div>
    <Heart
      onClick={() => props.onClick(1)} active={props.value > 0} size={24}
    />
    <Heart
      onClick={() => props.onClick(2)} active={props.value > 1} size={24}
    />
    <Heart
      onClick={() => props.onClick(3)} active={props.value > 2} size={24}
    />
    <Heart
      onClick={() => props.onClick(4)} active={props.value > 3} size={24}
    />
    <Heart
      onClick={() => props.onClick(5)} active={props.value > 4} size={24}
    />
  </div>
);

HeartRating.propTypes = {
  value: React.PropTypes.number,
  onClick: React.PropTypes.func,
  onMouseOver: React.PropTypes.func,
  onMouseOut: React.PropTypes.func,
};

HeartRating.defaultProps = {
  value: 0,
};

const mapStateToProps = (globalState, ownProps) => ({
  ...ownProps,
  ...globalState,
});

const mapDispatchToProps = dispatch => ({
  initialize: value => dispatch(actionCreators.initialize(value)),
  onClick: (index) => dispatch(actionCreators.handleClick(index)),
  onMouseOver: (index) => dispatch(actionCreators.handleMouseOver(index)),
  onMouseOut: (index) => dispatch(actionCreators.handleMouseOut(index)),
});

class HeartRatingLifeCycle extends React.Component {
  componentDidMount() {
    this.props.initialize(this.props.initialValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.props.initialize(nextProps.initialValue);
    }
  }

  render() {
    return <HeartRating {...this.props} />;
  }
}

HeartRatingLifeCycle.propTypes = {
  initialize: React.PropTypes.func,
  initialValue: React.PropTypes.number,
};


export default connect(mapStateToProps, mapDispatchToProps)(HeartRatingLifeCycle);
