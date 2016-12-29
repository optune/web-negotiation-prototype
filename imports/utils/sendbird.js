import { Meteor } from 'meteor/meteor';

import SendBird from 'sendbird';


export default new SendBird({
  appId: Meteor.settings.public.SENDBIRD_APP_ID,
});
