export const initialState = {
  value: 0,
};

export const actions = {
  SET_VALUE: 'optune/ThumbRating/SET_VALUE',
  CLICK_UP: 'optune/ThumbRating/CLICK_UP',
  CLICK_DOWN: 'optune/ThumbRating/CLICK_DOWN',
};

export const actionCreators = {
  initialize: (value = 0) => ({
    type: actions.SET_VALUE,
    value,
  }),
  handleClickUp: () => ({
    type: actions.CLICK_UP,
  }),
  handleClickDown: () => ({
    type: actions.CLICK_DOWN,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.SET_VALUE:
      return {
        value: params.value,
      };
    case actions.CLICK_UP: {
      let value = 1;

      if (state.value > 0) {
        value = 0;
      }

      return {
        value,
      };
    }
    case actions.CLICK_DOWN: {
      let value = -1;

      if (state.value < 0) {
        value = 0;
      }

      return {
        value,
      };
    }
    default:
      return state;
  }
};
