import { push } from 'react-router-redux';
import {
  actions as appActions,
  actionCreators as appActionCreators,
} from '../actions/App.js';
import {
  actions as sendbirdActions,
  actionCreators as sendbirdActionCreators,
} from '../actions/sendbird.js';

import {
  connect,
  getChannels,
  getChannel,
  createChannel,
  sendMessage,
  getMessages,
} from '../utils/sendbird.js';


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
        const currentChannel = channels.find(c => c.url === currentNegotiationId);

        store.dispatch(sendbirdActionCreators.setChannels(channels));

        if (currentChannel) {
          store.dispatch(appActionCreators.setCurrentNegotiation(currentChannel.url));
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
      store.dispatch(push(`/${action.negotiationId}`));
      break;
    case appActions.SEND_MESSAGE: {
      const channelUrl = store.getState().app.currentNegotiation.id;
      // TODO: Optimistic display of sent message

      sendMessage(channelUrl, action.message)
      .then((message) => {
        console.log(message);
        return getChannel(channelUrl);
      })
      .then((channel) => {
        store.dispatch(appActionCreators.setCurrentNegotiation(channel.url));
      })
      .catch((error) => { throw error; });
      break;
    }
    case appActions.SET_CURRENT_NEGOTIATION:
      getMessages(action.currentNegotiation.id)
      .then((messages) => {
        console.log(messages);
        store.dispatch(appActionCreators.setMessages(
          messages
          .sort((a, b) => a.createdAt > b.createdAt)
          .map(msg => ({
            text: msg.message,
            mine: msg.sender.userId === store.getState().app.user.id,
            id: `${msg.messageId}`,
          })),
        ));
      })
      .catch((error) => { throw error; });
      break;
    default:
  }

  return next(action);
};
