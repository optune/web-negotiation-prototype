import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Switch from './Switch.jsx';

storiesOf('element/Switch', module)
.add('Switch unchecked', () =>
  (
    <Switch checked={false} />
  ),
)
.add('Switch checked', () =>
  (
    <Switch checked={true} />
  ),
);
