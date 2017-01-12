import React from 'react';
import { storiesOf } from '@kadira/storybook';

import UserCard from './UserCard.jsx';


storiesOf('element/UserCard', module)
.add('Default', () => (
  <div className="element-width">
    <UserCard
      name="Max Muster"
      caption="asdfasdf"
      profilePic="https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14907132_10209692900653176_8309696368725691008_n.jpg?oh=fbde6bbbe04ed6573a5da91fca766056&oe=58FC2A94"
    />
  </div>
))
;
