import { push } from 'react-router-redux';
import {
  actions as appActions,
  actionCreators as appActionCreators,
} from '../actions/App.js';
import {
  actions as sendbirdActions,
  actionCreators as sendbirdActionCreators,
} from '../actions/sendbird.js';

import { connect, getChannels, getChannel, createChannel, sendMessage } from '../utils/sendbird.js';


export default store => next => (action) => {
  switch (action.type) {
    case appActions.AUTHENTICATE:

      connect(action.user.id, action.user.name, action.user.profilePicUrl)
      .then((user) => {
        store.dispatch(sendbirdActionCreators.connect(user));

        return getChannels();
      })
      .then((channels) => {
        const currentNegotiationId = store.getState().app.currentNegotiation.id;

        store.dispatch(sendbirdActionCreators.setChannels(channels));

        if (currentNegotiationId) {
          const channelUrl = `sendbird_group_channel_${currentNegotiationId}`;
          const currentChannel = channels.find(c => c.url === channelUrl);

          store.dispatch(appActionCreators.setCurrentNegotiation(currentChannel));
        }
      })
      .catch((error) => { throw error; });

      break;
    case sendbirdActions.SET_CHANNELS:
      store.dispatch(appActionCreators.setNegotiations(action.channels.map((channel) => {
        const user = store.getState().app.user;
        const negotiant = channel.members.find(c => c.userId !== user.id);

        return {
          id: channel.url,
          negotiant: {
            name: negotiant.nickname,
            id: negotiant.userId,
            profilePicUrl: negotiant.profileUrl,
          },
        };
      })));

      break;
    case appActions.CREATE_NEGOTIATION:
      createChannel([store.getState().app.user.id, action.negotiantId])
      .catch((error) => { throw error; });

      break;
    case appActions.SELECT_NEGOTIATION:
      store.dispatch(push(`/${action.negotiationId.slice(23)}`));
      break;
    case appActions.SEND_MESSAGE: {
      const channelUrl = store.getState().app.currentNegotiation.url;

      sendMessage(channelUrl, action.message)
      .then((message) => {
        console.log(message);
        return getChannel(channelUrl);
      })
      .then((channel) => {
        console.log(channel);
        store.dispatch(appActionCreators.setCurrentNegotiation(channel));
      })
      .catch((error) => { throw error; });
      break;
    }
    default:
  }

  return next(action);
};
