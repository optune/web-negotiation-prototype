import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Header from './Header.jsx';

storiesOf('element/Header', module)
  .add('Header To', () =>
  (
    <Header tofrom="To" name="Marc Promoter" />
  ),
  ).add('Header From', () =>
  (
    <Header tofrom="From" name="Fernando Artist (Agent Tiffany)" />
  ),
);
