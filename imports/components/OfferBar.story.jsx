import React from 'react';
import { storiesOf } from '@kadira/storybook';

import OfferBar from './OfferBar.jsx';

storiesOf('element/OfferBar', module)
.add('OfferBar 1800', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <OfferBar value={1800} init={1000} max={1500} label="OFFER" />
    </div>
  </div>
),
)
.add('OfferBar 1000', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <OfferBar value={1000} init={1000} max={1500} label="OFFER" />
    </div>
  </div>
),
)
.add('OfferBar 1200', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <OfferBar value={1200} init={1000} max={1500} label="OFFER" />
    </div>
  </div>
),
);
