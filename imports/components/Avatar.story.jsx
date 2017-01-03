import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Avatar from './Avatar.jsx';


storiesOf('elements/Avatar', module)
.add('test', () => (
  <div className="app flex-center-middle">
    <Avatar profilePicture="https://placeimg.com/100/100/people" />
  </div>
));
