import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../actions/Switch';

import Switch from './Switch.jsx';

const store = createStore(reducer);

storiesOf('element/Switch', module)
.add('Switch unchecked', () =>
  (
    <Provider store={store}>
      <Switch />
    </Provider>
  ),
)
.add('Switch checked', () =>
  (
    <Provider store={store}>
      <Switch initialChecked />
    </Provider>
  ),
);
