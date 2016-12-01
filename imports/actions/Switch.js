export const initialState = {
  checked: false,
};

export const actions = {
  SET_VALUE: 'optune/Switch/SET_VALUE',
  CLICK: 'optune/Switch/CLICK',
};

export const actionCreators = {
  initialize: (checked = false) => ({
    type: actions.SET_VALUE,
    checked,
  }),
  handleClick: () => ({
    type: actions.CLICK,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.SET_VALUE:
      return {
        checked: params.checked,
      };
    case actions.CLICK: {
      return {
        checked: !state.checked,
      };
    }
    default:
      return state;
  }
};
