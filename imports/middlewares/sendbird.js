import { push } from 'react-router-redux';
import { reset as resetForm, change as changeForm } from 'redux-form';
import moment from 'moment';

import NegotiationStatus from '../constants/NegotiationStatus.js';

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
  createChannel,
  getChannel,
  getChannels,
  getMessages,
  updateMetaData,
  sendMessage,
} from '../utils/sendbird.js';


export default store => next => (action) => {
  const mapSendbirdMessage = msg => ({
    body: msg.message,
    self: msg.sender.userId === store.getState().app.user.id,
    id: `${msg.messageId}`,
    date: moment(msg.createdAt).format('D.M.Y'),
    time: moment(msg.createdAt).format('HH:mm'),
    userPicture: msg.sender.profileUrl,
  });

  switch (action.type) {
    case appActions.AUTHENTICATE:
      if (!store.getState().sendbird.connected) {
        connect(action.user.id, action.user.name, action.user.profilePicUrl, (channel, message) => {
          store.dispatch(appActionCreators.receiveMessage(
            channel.url,
            mapSendbirdMessage(message),
          ));
        })
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
      }
      break;
    case sendbirdActions.SET_CHANNELS:
      store.dispatch(appActionCreators.setNegotiations(action.channels.map((channel) => {
        const user = store.getState().app.user;
        const negotiant = channel.members.find(c => c.userId !== user.id) || {};

        return {
          id: channel.url,
          status: channel.metaData.status,
          negotiant: {
            name: negotiant.nickname,
            id: negotiant.userId,
            profilePicUrl: negotiant.profileUrl,
          },
        };
      })));

      break;
    case appActions.CREATE_NEGOTIATION:
      createChannel(
        [store.getState().app.user.id, action.negotiantId],
        { status: NegotiationStatus.PENDING },
      )
      .catch((error) => { throw error; });

      break;
    case appActions.SELECT_NEGOTIATION:
      store.dispatch(push(`/${action.negotiationId}`));
      break;
    case appActions.SEND_MESSAGE: {
      const channelUrl = store.getState().app.currentNegotiation.id;

      store.dispatch(resetForm('negotiation'));
      store.dispatch(appActionCreators.addOptimisticMessage(action.message));

      sendMessage(channelUrl, action.message)
      .then(() => getChannel(channelUrl))
      .then((channel) => {
        store.dispatch(appActionCreators.setCurrentNegotiation(channel.url));
      })
      .catch((error) => {
        store.dispatch(changeForm('negotiation', 'message', action.message));
        throw error;
      });
      break;
    }
    case appActions.LOAD_NEGOTIATION:
    case appActions.SET_CURRENT_NEGOTIATION:
      if (store.getState().sendbird.connected) {
        getMessages(action.currentNegotiation.id)
        .then((messages) => {
          store.dispatch(appActionCreators.setMessages(
            messages
            .sort((a, b) => a.createdAt > b.createdAt)
            .map(mapSendbirdMessage),
          ));
        })
        .catch((error) => { throw error; });
      }
      break;
    case appActions.DECLINE_NEGOTIATION:
      updateMetaData(action.id, { status: NegotiationStatus.DECLINED })
      .then((response) => {
        console.log(response);
        return getChannels();
      })
      .then((channels) => {
        store.dispatch(sendbirdActionCreators.setChannels(channels));
      })
      .catch((error) => { throw error; });
      break;
    default:
  }

  return next(action);
};
