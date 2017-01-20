import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router';
import { reduxForm, Form, Field } from 'redux-form';
import { connect } from 'react-redux';

import { actionCreators } from '../actions/App.js';
import FeeInput from '../components/FeeInput.jsx';
import Header from '../components/Header.jsx';
import MessageBox from '../components/MessageBox.jsx';
import MessageInput from '../components/MessageInput.jsx';
import NegotiationStatus from '../constants/NegotiationStatus.js';


const Negotiation = props => (
  <Form className="flex-center-middle" onSubmit={props.handleSubmit(props.sendMessage)}>
    <div className="element-width">
      <Link className="button small" to="/">Back to Dashboard</Link>
      <br /><br />
      <Header tofrom="To" name={props.negotiantName} />
      <Header tofrom="From" name={props.selfName} />
      <MessageBox messages={props.messages} />

      <div className="whitebox">
        <Field name="fee" component={FeeInput} label="Fee" disabled={!props.isNegotiating} />
      </div>

      <Field name="message" component={MessageInput} label="Message" placeholder="Your message" />
      { props.isNegotiating
        ?
          <p>
            <button onClick={props.decline} className="button-secondary small hover-warning">
              { props.canAccept ? 'Decline' : 'Withdraw' }
            </button>
            <button
              onClick={props.accept}
              disabled={!props.canAccept}
              className={
                classNames('button-primary small hover-warning inline', { disabled: !props.canAccept })
              }
            >Accept</button>
          </p>
        : null
      }
    </div>
  </Form>
);

Negotiation.propTypes = {
  isNegotiating: React.PropTypes.bool,
  canAccept: React.PropTypes.bool,
  selfName: React.PropTypes.string,
  negotiantName: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  sendMessage: React.PropTypes.func,
  decline: React.PropTypes.func,
  accept: React.PropTypes.func,
  messages: React.PropTypes.arrayOf(
    MessageBox.messagePropTypes,
  ),
};

Negotiation.defaultProps = {
  messages: [],
};

const NegotiationForm = reduxForm({
  form: 'negotiation',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
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
  isNegotiating: state.app.currentNegotiation.status === NegotiationStatus.PENDING,
  canAccept: state.app.user.id !== state.app.currentNegotiation.lastOfferBy,
  messages: state.app.currentNegotiation.messages,
  selfName: state.app.user.name,
  negotiantName: state.app.currentNegotiation.negotiant ? state.app.currentNegotiation.negotiant.name : '',
  initialValues: {
    fee: state.app.currentNegotiation.fee,
  },
});

const mapDispatchToProps = (dispatch, props) => ({
  loadNegotiation(id) { dispatch(actionCreators.loadNegotiation(id)); },
  accept(event) {
    event.preventDefault();

    if (confirm('Do you really want to accept? This will close this negotiation definitely.')) {
      dispatch(actionCreators.acceptNegotiation(props.params.id));
    }
  },
  decline(event) {
    event.preventDefault();

    if (confirm('Do you really want to decline. This will close this negotiation definitely.')) {
      dispatch(actionCreators.declineNegotiation(props.params.id));
    }
  },
  sendMessage(values) { dispatch(actionCreators.sendMessage(values)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(NegotiationLifecycle);
