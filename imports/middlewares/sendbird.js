import { actions } from '../actions/App.js';
import sendbird from '../utils/sendbird.js';


export default store => next => (action) => {
  switch (action.type) {
    case actions.AUTHENTICATE:
      sendbird.connect(action.user.id, (user, error) => {
        console.log('sendbirded', user, error);

        const channelListQuery = sendbird.GroupChannel.createMyGroupChannelListQuery();
        channelListQuery.includeEmpty = true;

        if (channelListQuery.hasNext) {
          channelListQuery.next((channelList, error) => {
            console.log(error, channelList);
          });
        }
      });

      break;
    case actions.CREATE_NEGOTIATION: {
      sendbird.GroupChannel.createChannelWithUserIds(
        [Meteor.user()._id, action.negotiantId],
        true,
        null,
        null,
        {
          test: 123,
        },
        (channel, error) => {
          console.log(channel, error);
        },
      );

      break;
    }
    default:
  }

  return next(action);
}
