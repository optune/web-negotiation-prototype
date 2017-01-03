import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions/App.js';


const Login = props => (
  <div className="flex-center-middle filling">
    <button onClick={props.login}>Login</button>
  </div>
);

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.app,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actionCreators.login()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
