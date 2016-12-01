export const initialState = {
  value: 0,
};

export const actions = {
  SET_VALUE: 'optune/HeartRating/SET_VALUE',
  CLICK: 'optune/HeartRating/CLICK',
};

export const actionCreators = {
  initialize: (value = 0) => ({
    type: actions.SET_VALUE,
    value,
  }),
  handleClick: index => ({
    type: actions.CLICK,
    index,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.SET_VALUE:
      return {
        value: params.value,
      };
    case actions.CLICK: {
      let tmp = 0;
      if (state.value !== params.index) {
        tmp = params.index;
      }
      return {
        value: tmp,
      };
    }
    default:
      return state;
  }
};
