import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { actionCreators } from '../actions/App.js';


const Negotiation = props => (
  <form className="flex-center-middle filling" onSubmit={props.handleSubmit}>
    <p>
      <Field name="message" component="textarea" type="text" placeholder="Your message" />
    </p>
    <p>
      <button type="submit" disabled={props.pristine || props.submitting}>Submit</button>
    </p>
  </form>
);

Negotiation.propTypes = {
  handleSubmit: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
};

const NegotiationForm = reduxForm({ form: 'negotiation' })(Negotiation);

class NegotiationLifecycle extends React.Component {
  componentWillMount() {
    this.props.loadNegotiation(this.props.params.id);
  }

  render() {
    return <NegotiationForm {...this.props} />;
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
