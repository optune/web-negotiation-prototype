import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import SendBird from 'sendbird';

import App from '../pages/app.jsx';


Meteor.startup(() => {
  const sendbird = new SendBird({
    appId: Meteor.settings.public.SENDBIRD_APP_ID,
  });

  render(<App sendbird={sendbird} />, document.getElementById('react-root'));
});
