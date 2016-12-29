import { actions, actionCreators } from '../actions/App.js';
import sendbird from '../utils/sendbird.js';


export default store => next => (action) => {
  switch (action.type) {
    case actions.AUTHENTICATE:

      (new Promise((resolve, reject) => {
        sendbird.connect(action.user.id, (user, error) => {
          if (error) reject(error); else resolve(user);
        });
      })).then(user => Promise.all([

        (new Promise((resolve, reject) => {
          console.log(user);

          sendbird.updateCurrentUserInfo(
            action.user.name,
            action.user.profilePicUrl,
            (response, error) => {
              if (error) reject(error); else resolve(response);
            },
          );
        })),

        (new Promise((resolve, reject) => {
          const channelListQuery = sendbird.GroupChannel.createMyGroupChannelListQuery();
          channelListQuery.includeEmpty = true;

          if (channelListQuery.hasNext) {
            channelListQuery.next((channelList, error) => {
              if (error) reject(error);
              else store.dispatch(actionCreators.setChannels(channelList));
            });
          }
        })),

      ])).catch((error) => { throw error; });

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
};
