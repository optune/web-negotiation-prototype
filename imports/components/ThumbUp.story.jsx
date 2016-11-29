import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ThumbUp from './ThumbUp.jsx';

storiesOf('element/ThumbUp', module)
.add('ThumbUp', () =>
  (
    <ThumbUp size={24} />
  ),
)
.add('ThumbDown Active', () =>
  (
    <ThumbUp size={24} active />
  ),
);
