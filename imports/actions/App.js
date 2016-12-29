// This is a duck: https://github.com/erikras/ducks-modular-redux

const initialState = {
  user: {
    name: undefined,
    id: undefined,
    profilePicUrl: undefined,
  },
  onlineUsers: [],
  negotiations: [],
};

export const actions = {
  CREATE_NEGOTIATION: 'optune-negotiator/App/CREATE_NEGOTIATION',
  AUTHENTICATE: 'optune-negotiator/App/AUTHENTICATE',
  DEAUTHENTICATE: 'optune-negotiator/App/DEAUTHENTICATE',
  SET_ONLINE_USERS: 'optune-negotiator/App/SET_ONLINE_USERS',
  SET_NEGOTIATIONS: 'optune-negotiator/App/SET_NEGOTIATIONS',
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
  setNegotiations: negotiations => ({
    type: actions.SET_NEGOTIATIONS,
    negotiations,
  }),
  login: () => ({ type: actions.LOGIN }),
  logout: () => ({ type: actions.LOGOUT }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.SET_ONLINE_USERS:
    case actions.SET_NEGOTIATIONS:
    case actions.AUTHENTICATE:
    case actions.CREATE_NEGOTIATION:
    case actions.DEAUTHENTICATE:
      return {
        ...state,
        ...params,
      };
    default:
      return state;
  }
};
