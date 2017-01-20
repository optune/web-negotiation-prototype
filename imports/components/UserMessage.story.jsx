import React from 'react';

import { storiesOf } from '@kadira/storybook';

import UserMessage from './UserMessage.jsx';


storiesOf('organisms/UserMessage', module)
.add('standard', () => (
  <div className="app flex-center-middle">
    <div className="element-width">
      <UserMessage
        date="24.12.2016" time="12:23" user="Hans"
        body="Hallo Fritz, wie geht es dir?"
        self
      />
    </div>
  </div>
))
;

