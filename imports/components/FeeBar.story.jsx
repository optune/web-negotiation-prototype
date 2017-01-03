import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FeeBar from './FeeBar.jsx';

storiesOf('element/FeeBar', module)
.add('FeeBar', () =>
(
  <FeeBar />
),
)
.add('FeeBar 2', () =>
(
  <FeeBar />
),
);
