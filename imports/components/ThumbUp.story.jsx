import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ThumbUp from './ThumbUp.jsx';

storiesOf('element/ThumbUp', module)
.add('ThumbUp', () =>
  (
    <ThumbUp size={24} color="#000000" />
  ),
)
.add('ThumbDown Active', () =>
  (
    <ThumbUp size={24} color="#27E200" />
  ),
);
