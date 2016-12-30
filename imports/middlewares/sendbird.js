import { push } from 'react-router-redux';
import {
  actions as appActions,
  actionCreators as appActionCreators,
} from '../actions/App.js';
import {
  actions as sendbirdActions,
  actionCreators as sendbirdActionCreators,
} from '../actions/sendbird.js';

import { connect, getChannels, createChannel } from '../utils/sendbird.js';


export default store => next => (action) => {
  switch (action.type) {
    case appActions.AUTHENTICATE:

      connect(action.user.id, action.user.name, action.user.profilePicUrl)
      .then((user) => {
        store.dispatch(sendbirdActionCreators.connect(user));

        return getChannels();
      })
      .then((channels) => {
        store.dispatch(sendbirdActionCreators.setChannels(channels));
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
      createChannel([store.getState().app.user.id, action.negotiantId]);

      break;
    case appActions.SELECT_NEGOTIATION:
      store.dispatch(push(`/${action.negotiationId.slice(23, -1)}`));
      break;
    case appActions.LOAD_NEGOTIATION:
      /*console.log(channelsCache);

      store.dispatch(appActionCreators.setCurrentNegotiation(channelsCache.find(c =>
        c.url === `sendbird_group_channel_${action.negotiationId}`)));
      */
      break;
    default:
  }

  return next(action);
};
