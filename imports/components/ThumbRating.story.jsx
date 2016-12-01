import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../actions/ThumbRating';

import ThumbRating from './ThumbRating.jsx';


const store = createStore(reducer);

storiesOf('element/ThumbRating', module)
.add('ThumbRating Down Vote -1', () =>
  (
    <Provider store={store}>
      <ThumbRating initialValue={-1} />
    </Provider>
  ),
)
.add('ThumbRating Up Vote 1', () =>
  (
    <Provider store={store}>
      <ThumbRating initialValue={1} />
    </Provider>
  ),
)
.add('ThumbRating Neutral 0', () =>
  (
    <Provider store={store}>
      <ThumbRating initialValue={0} />
    </Provider>
  ),
);
