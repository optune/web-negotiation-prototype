import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FeeBar from './FeeBar.jsx';

storiesOf('element/FeeBar', module)
.add('FeeBar 800', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <FeeBar value={800} min={1000} max={1200} label="FEE" />
    </div>
  </div>
),
)
.add('FeeBar 1000', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <FeeBar value={1000} min={1000} max={1200} label="FEE" />
    </div>
  </div>
),
)
.add('FeeBar 1200', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <FeeBar value={1200} min={1000} max={1200} label="FEE" />
    </div>
  </div>
),
)
.add('FeeBar 1400', () =>
(
  <div className="app flex-center-middle">
    <div className="element-width">
      <FeeBar value={1400} min={1000} max={1200} label="FEE" />
    </div>
  </div>
),
);
