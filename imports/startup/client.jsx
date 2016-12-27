import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from '../pages/app.jsx';


Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});
