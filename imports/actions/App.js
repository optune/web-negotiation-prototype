// This is a duck: https://github.com/erikras/ducks-modular-redux


const initialState = {

};

export const actions = {
  CREATE_NEGOTIATION: 'optune-negotiator/App/CREATE_NEGOTIATION',
};

export const actionCreators = {
  createNegotiation: negotiantId => ({
    type: actions.CREATE_NEGOTIATION,
    negotiantId,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.CREATE_NEGOTIATION:
      return {
        ...state,
        ...params,
      };
    default:
      return state;
  }
};
