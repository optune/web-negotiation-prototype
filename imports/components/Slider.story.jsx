import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Slider from './Slider.jsx';

storiesOf('element/Slider', module)
.add('Slider with 3 Options', () =>
(
  <Slider id="slider" min={0} max={2} steps={1} />
),
)
.add('Slider with 4 Options', () =>
(
  <Slider id="slider" min={0} max={3} steps={1} />
),
);
