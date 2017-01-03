import React from 'react';
import { Link } from 'react-router';
import { reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';

import { actionCreators } from '../actions/App.js';
import MessageBox from '../components/MessageBox.jsx';
import MessageInput from '../components/MessageInput.jsx';


const Negotiation = props => (
  <Form className="flex-center-middle" onSubmit={props.handleSubmit(props.sendMessage)}>
    <div className="element-width">
      <MessageBox messages={props.messages} />
      <MessageInput name="message" placeholder="Your message" onClick={() => props.submit()} />
      <p>
        <button type="submit" className="push bottom micro" disabled={props.pristine || props.submitting}>Send</button>
        <Link className="button small" to="/">Back</Link>
        <button onClick={props.decline} className="button-secondary small hover-warning">Decline</button>
      </p>
    </div>
  </Form>
);

Negotiation.propTypes = {
  handleSubmit: React.PropTypes.func,
  submit: React.PropTypes.func,
  sendMessage: React.PropTypes.func,
  decline: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
  messages: React.PropTypes.arrayOf(
    MessageBox.messagePropTypes,
  ),
};

Negotiation.defaultProps = {
  messages: [],
};

const NegotiationForm = reduxForm({
  form: 'negotiation',
})(Negotiation);

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
  messages: state.app.currentNegotiation.messages,
});

const mapDispatchToProps = (dispatch, props) => ({
  loadNegotiation(id) { dispatch(actionCreators.loadNegotiation(id)); },
  decline(event) {
    event.preventDefault();

    if (confirm('Do you really want to decline. This will close this negotiation definitely.')) {
      dispatch(actionCreators.declineNegotiation(props.params.id));
    }
  },
  sendMessage(values) { dispatch(actionCreators.sendMessage(values.message)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(NegotiationLifecycle);
