import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Heart from './Heart.jsx';

storiesOf('element/Heart', module)
.add('Heart', () =>
  (
    <Heart size={24} />
  ),
)
.add('Heart Active', () =>
  (
    <Heart size={24} active />
  ),
);

