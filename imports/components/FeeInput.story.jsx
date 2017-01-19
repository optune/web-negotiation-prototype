import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FeeInput from './FeeInput.jsx';

storiesOf('element/FeeInput', module)
  .add('MessageInput', () =>
  (
    <div className="element-width">

      <FeeInput label="FEE" value="800" />
    </div>
    </div>
  ),
);
