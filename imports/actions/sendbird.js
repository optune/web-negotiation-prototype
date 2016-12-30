// This is a duck: https://github.com/erikras/ducks-modular-redux

const initialState = {
  connected: false,
  user: undefined,
  channels: [],
  currentChannel: undefined,
};

export const actions = {
  CONNECT: 'optune-negotiator/sendbird/CONNECT',
  SET_CHANNELS: 'optune-negotiator/sendbird/SET_CHANNELS',
  OPEN_CHANNEL: 'optune-negotiator/sendbird/OPEN_CHANNEL',
};

export const actionCreators = {
  connect: user => ({
    type: actions.CONNECT,
    connected: user !== undefined,
    user,
  }),
  setChannels: channels => ({
    type: actions.SET_CHANNELS,
    channels,
  }),
  openChannel: currentChannel => ({
    type: actions.OPEN_CHANNEL,
    currentChannel,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.CONNECT:
    case actions.SET_CHANNELS:
    case actions.OPEN_CHANNEL:
      return {
        ...state,
        ...params,
      };
    default:
      return state;
  }
};
