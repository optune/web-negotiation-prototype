import React from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { actionCreators } from '../actions/App.js';


const Negotiation = props => (
  <form className="flex-center-middle" onSubmit={props.handleSubmit(props.sendMessage)}>
    <div className="element-width">
      <Link to="/">Back to dashboard</Link>
      <ul>
        {props.messages.map(msg => (
          <li
            key={msg.id}
            className={classNames('message', {
              right: !msg.mine,
              left: msg.mine,
            })}
          >{msg.text}</li>
        ))}
      </ul>
      <p>
        <Field name="message" component="textarea" type="text" placeholder="Your message" />
      </p>
      <p>
        <button type="submit" disabled={props.pristine || props.submitting}>Submit</button>
      </p>
    </div>
  </form>
);

Negotiation.propTypes = {
  handleSubmit: React.PropTypes.func,
  sendMessage: React.PropTypes.func,
  pristine: React.PropTypes.bool,
  submitting: React.PropTypes.bool,
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    mine: React.PropTypes.bool,
    id: React.PropTypes.string,
  })),
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

const mapDispatchToProps = dispatch => ({
  loadNegotiation(id) { dispatch(actionCreators.loadNegotiation(id)); },
  sendMessage(values) { dispatch(actionCreators.sendMessage(values.message)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(NegotiationLifecycle);
