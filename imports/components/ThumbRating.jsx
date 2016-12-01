import React from 'react';
import { connect } from 'react-redux';

import ThumbUp from './ThumbUp.jsx';
import ThumbDown from './ThumbDown.jsx';

import { actionCreators } from '../actions/ThumbRating';


const ThumbRating = props => (
  <div>
    <ThumbDown onClick={props.onClickDown} size={24} active={props.value < 0} />
    <ThumbUp onClick={props.onClickUp} size={24} active={props.value > 0} />
  </div>
);

ThumbRating.propTypes = {
  value: React.PropTypes.number,
  onClickDown: React.PropTypes.func,
  onClickUp: React.PropTypes.func,
};

ThumbRating.defaultProps = {
  value: 0,
};

const mapStateToProps = (globalState, ownProps) => ({
  ...ownProps,
  ...globalState,
});

const mapDispatchToProps = dispatch => ({
  initialize: value => dispatch(actionCreators.initialize(value)),
  onClickUp: () => dispatch(actionCreators.handleClickUp()),
  onClickDown: () => dispatch(actionCreators.handleClickDown()),
});

class ThumbRatingLifeCycle extends React.Component {
  componentDidMount() {
    this.props.initialize(this.props.initialValue);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.props.initialize(nextProps.initialValue);
    }
  }

  render() {
    return <ThumbRating {...this.props} />;
  }
}

ThumbRatingLifeCycle.propTypes = {
  initialize: React.PropTypes.func,
  initialValue: React.PropTypes.number,
};


export default connect(mapStateToProps, mapDispatchToProps)(ThumbRatingLifeCycle);
