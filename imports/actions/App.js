// This is a duck: https://github.com/erikras/ducks-modular-redux

const initialState = {
  user: {
    name: undefined,
    id: undefined,
    profilePicUrl: undefined,
  },
  onlineUsers: [],
  negotiations: [],
  currentNegotiation: {
    id: undefined, // sendbird channel url
    messages: [],
  },
};

export const actions = {
  CREATE_NEGOTIATION: 'optune-negotiator/App/CREATE_NEGOTIATION',
  SELECT_NEGOTIATION: 'optune-negotiator/App/SELECT_NEGOTIATION',
  LOAD_NEGOTIATION: 'optune-negotiator/App/LOAD_NEGOTIATION',
  SET_CURRENT_NEGOTIATION: 'optune-negotiator/App/SET_CURRENT_NEGOTIATION',
  SET_MESSAGES: 'optune-negotiator/App/SET_MESSAGES',
  AUTHENTICATE: 'optune-negotiator/App/AUTHENTICATE',
  DEAUTHENTICATE: 'optune-negotiator/App/DEAUTHENTICATE',
  SET_ONLINE_USERS: 'optune-negotiator/App/SET_ONLINE_USERS',
  SET_NEGOTIATIONS: 'optune-negotiator/App/SET_NEGOTIATIONS',
  SEND_MESSAGE: 'optune-negotiator/App/SEND_MESSAGE',
  LOGIN: 'optune-negotiator/App/LOGIN',
  LOGOUT: 'optune-negotiator/App/LOGOUT',
};

export const actionCreators = {
  createNegotiation: negotiantId => ({
    type: actions.CREATE_NEGOTIATION,
    negotiantId,
  }),
  selectNegotiation: negotiationId => ({
    type: actions.SELECT_NEGOTIATION,
    negotiationId,
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
  loadNegotiation: id => ({
    type: actions.LOAD_NEGOTIATION,
    currentNegotiation: { id },
  }),
  setCurrentNegotiation: currentNegotiationId => ({
    type: actions.SET_CURRENT_NEGOTIATION,
    currentNegotiation: {
      id: currentNegotiationId,
      messages: [],
    },
  }),
  setMessages: messages => ({
    type: actions.SET_MESSAGES,
    messages,
  }),
  sendMessage: message => ({
    type: actions.SEND_MESSAGE,
    message,
  }),
  login: () => ({ type: actions.LOGIN }),
  logout: () => ({ type: actions.LOGOUT }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.SET_ONLINE_USERS:
    case actions.SET_NEGOTIATIONS:
    case actions.SET_CURRENT_NEGOTIATION:
    case actions.AUTHENTICATE:
    case actions.CREATE_NEGOTIATION:
    case actions.SELECT_NEGOTIATION:
    case actions.LOAD_NEGOTIATION:
    case actions.DEAUTHENTICATE:
      return {
        ...state,
        ...params,
      };
    case actions.SET_MESSAGES:
      return {
        ...state,
        currentNegotiation: {
          id: state.currentNegotiation.id,
          messages: params.messages,
        },
      };
    default:
      return state;
  }
};
