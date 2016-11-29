import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ThumbRating from './ThumbRating.jsx';

storiesOf('element/ThumbRating', module)
.add('ThumbRating', () =>
  (
    <ThumbRating />
  ),
);
