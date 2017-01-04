import React from 'react';
import { storiesOf } from '@kadira/storybook';

import MessageInput from './MessageInput.jsx';

storiesOf('element/MessageInput', module)
  .add('MessageInput', () =>
  (
    <div className="element-width">
      <MessageInput label="MESSAGE" />
    </div>
  ),
);
