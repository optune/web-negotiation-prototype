import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions/App.js';


const Negotiation = props => (
  <div className="flex-center-middle filling">
    <button>Negotiation</button>
  </div>
);

Negotiation.propTypes = {
};

class NegotiationLifecycle extends React.Component {
  componentWillMount() {
    this.props.loadNegotiation(this.props.params.id);
  }

  render() {
    return <Negotiation {...this.props} />;
  }
}

NegotiationLifecycle.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  loadNegotiation: React.PropTypes.func,
};

const mapStateToProps = state => ({
  ...state.app,
});

const mapDispatchToProps = dispatch => ({
  loadNegotiation(id) { dispatch(actionCreators.loadNegotiation(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(NegotiationLifecycle);
