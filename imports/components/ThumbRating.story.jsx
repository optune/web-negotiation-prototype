import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ThumbRating from './ThumbRating.jsx';

storiesOf('element/ThumbRating', module)
.add('ThumbRating Down Vote -1', () =>
  (
    <ThumbRating value={-1} />
  ),
)
.add('ThumbRating Up Vote 1', () =>
  (
    <ThumbRating value={1} />
  ),
)
.add('ThumbRating Neutral 0', () =>
  (
    <ThumbRating value={0} />
  ),
);
