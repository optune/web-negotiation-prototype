// This is a duck: https://github.com/erikras/ducks-modular-redux

import MessageType from '../constants/MessageType.js';


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
  ADD_OPTIMISTIC_MESSAGE: 'optune-negotiator/App/ADD_OPTIMISTIC_MESSAGE',
  AUTHENTICATE: 'optune-negotiator/App/AUTHENTICATE',
  CREATE_NEGOTIATION: 'optune-negotiator/App/CREATE_NEGOTIATION',
  DEAUTHENTICATE: 'optune-negotiator/App/DEAUTHENTICATE',
  DECLINE_NEGOTIATION: 'optune-negotiator/App/DECLINE_NEGOTIATION',
  LOAD_NEGOTIATION: 'optune-negotiator/App/LOAD_NEGOTIATION',
  LOGIN: 'optune-negotiator/App/LOGIN',
  LOGOUT: 'optune-negotiator/App/LOGOUT',
  SELECT_NEGOTIATION: 'optune-negotiator/App/SELECT_NEGOTIATION',
  SEND_MESSAGE: 'optune-negotiator/App/SEND_MESSAGE',
  SET_CURRENT_NEGOTIATION: 'optune-negotiator/App/SET_CURRENT_NEGOTIATION',
  SET_MESSAGES: 'optune-negotiator/App/SET_MESSAGES',
  SET_NEGOTIATIONS: 'optune-negotiator/App/SET_NEGOTIATIONS',
  SET_ONLINE_USERS: 'optune-negotiator/App/SET_ONLINE_USERS',
  RECEIVE_MESSAGE: 'optune-negotiator/App/RECEIVE_MESSAGE',
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
  declineNegotiation: id => ({
    type: actions.DECLINE_NEGOTIATION,
    id,
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
    currentNegotiation: { id, messages: [] },
  }),
  setCurrentNegotiation: id => ({
    type: actions.SET_CURRENT_NEGOTIATION,
    currentNegotiation: { id },
  }),
  setMessages: messages => ({
    type: actions.SET_MESSAGES,
    messages,
  }),
  sendMessage: values => ({
    type: actions.SEND_MESSAGE,
    message: values.message,
    data: {
      fee: values.fee,
    },
  }),
  addOptimisticMessage: message => ({
    type: actions.ADD_OPTIMISTIC_MESSAGE,
    message,
  }),
  receiveMessage: (negotiationId, message) => ({
    type: actions.RECEIVE_MESSAGE,
    message,
    negotiationId,
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
    case actions.SELECT_NEGOTIATION:
    case actions.LOAD_NEGOTIATION:
    case actions.DEAUTHENTICATE:
      return {
        ...state,
        ...params,
      };
    case actions.DECLINE_NEGOTIATION:
      return {
        ...state,
      };
    case actions.SET_CURRENT_NEGOTIATION:
      return {
        ...state,
        currentNegotiation: {
          ...state.negotiations.find(n => n.id === params.currentNegotiation.id),
          messages: state.currentNegotiation.messages,
        },
      };
    case actions.SET_MESSAGES:
      return {
        ...state,
        currentNegotiation: {
          ...state.currentNegotiation,
          messages: params.messages,
        },
      };
    case actions.ADD_OPTIMISTIC_MESSAGE:
      return {
        ...state,
        currentNegotiation: {
          ...state.currentNegotiation,
          messages: [
            ...state.currentNegotiation.messages,
            {
              body: action.message,
              self: true,
              id: 'optimistic',
              type: MessageType.USER,
              createdAt: Date.now(),
            },
          ],
        },
      };
    case actions.RECEIVE_MESSAGE: {
      let newState;

      if (state.currentNegotiation.id === params.negotiationId) {
        newState = {
          ...state,
          currentNegotiation: {
            ...state.currentNegotiation,
            messages: [
              ...state.currentNegotiation.messages,
              params.message,
            ],
          },
        };
      } else {
        console.warn(
          'received message from other channel',
          'currentNegotiation.id', state.currentNegotiation.id,
          'channelId', params.negotiationId,
          'message', params.message,
        );
        newState = {
          ...state,
        };
      }

      return newState;
    }
    default:
      return state;
  }
};
