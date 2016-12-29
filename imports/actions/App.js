// This is a duck: https://github.com/erikras/ducks-modular-redux

const initialState = {
  user: {
    name: undefined,
    id: undefined,
    profilePicUrl: undefined,
  },
  onlineUsers: [],
  channels: [],
};

export const actions = {
  CREATE_NEGOTIATION: 'optune-negotiator/App/CREATE_NEGOTIATION',
  AUTHENTICATE: 'optune-negotiator/App/AUTHENTICATE',
  DEAUTHENTICATE: 'optune-negotiator/App/DEAUTHENTICATE',
  SET_ONLINE_USERS: 'optune-negotiator/App/SET_ONLINE_USERS',
  SET_CHANNELS: 'optune-negotiator/App/SET_CHANNELS',
  LOGIN: 'optune-negotiator/App/LOGIN',
  LOGOUT: 'optune-negotiator/App/LOGOUT',
};

export const actionCreators = {
  createNegotiation: negotiantId => ({
    type: actions.CREATE_NEGOTIATION,
    negotiantId,
  }),
  authenticate: ({ name, id, profilePicUrl }) => ({
    type: actions.AUTHENTICATE,
    user: {
      name, id, profilePicUrl,
    },
  }),
  deauthenticate: () => ({
    type: actions.DEAUTHENTICATE,
    ...initialState,
  }),
  setOnlineUsers: onlineUsers => ({
    type: actions.SET_ONLINE_USERS,
    onlineUsers,
  }),
  setChannels: channels => ({
    type: actions.SET_CHANNELS,
    channels,
  }),
  login: () => ({ type: actions.LOGIN }),
  logout: () => ({ type: actions.LOGOUT }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.AUTHENTICATE:
    case actions.CREATE_NEGOTIATION:
    case actions.SET_ONLINE_USERS:
    case actions.SET_CHANNELS:
    case actions.DEAUTHENTICATE:
      return {
        ...state,
        ...params,
      };
    default:
      return state;
  }
};
