import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../actions/HeartRating';

import HeartRating from './HeartRating.jsx';


const store = createStore(reducer);

storiesOf('element/HeartRating', module)
.add('HeartRating 0', () =>
  (
    <Provider store={store}>
      <HeartRating initialValue={0} />
    </Provider>
  ),
)
.add('HeartRating  1', () =>
  (
    <Provider store={store}>
      <HeartRating initialValue={1} />
    </Provider>
  ),
)
.add('HeartRating 2', () =>
  (
    <Provider store={store}>
      <HeartRating initialValue={2} />
    </Provider>
  ),
)
.add('HeartRating 3', () =>
  (
    <Provider store={store}>
      <HeartRating initialValue={3} />
    </Provider>
  ),
)
.add('HeartRating 4', () =>
  (
    <Provider store={store}>
      <HeartRating initialValue={4} />
    </Provider>
  ),
)
.add('HeartRating 5', () =>
  (
    <Provider store={store}>
      <HeartRating initialValue={5} />
    </Provider>
  ),
);
