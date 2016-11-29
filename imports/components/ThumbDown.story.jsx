import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ThumbDown from './ThumbDown.jsx';

storiesOf('element/ThumbDown', module)
.add('ThumbDown', () =>
  (
    <ThumbDown size={24} color="#000000" />
  ),
)
.add('ThumbDown Active', () =>
  (
    <ThumbDown size={24} color="#27E200" />
  ),
);
