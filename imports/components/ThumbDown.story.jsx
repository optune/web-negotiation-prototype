import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ThumbDown from './ThumbDown.jsx';

storiesOf('element/ThumbDown', module)
.add('ThumbDown', () =>
  (
    <ThumbDown size={24} />
  ),
)
.add('ThumbDown Active', () =>
  (
    <ThumbDown size={24} active />
  ),
);
