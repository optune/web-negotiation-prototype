import React from 'react';
import { storiesOf} from '@kadira/storybook';

import Heart from './Heart.jsx';

storiesOf("element/Heart", module)
.add('Heart', () =>
  (
    <Heart />
  )
)

