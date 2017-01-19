import React from 'react';

import { storiesOf } from '@kadira/storybook';

import SystemMessage from './SystemMessage.jsx';


storiesOf('organisms/SystemMessage', module)
.add('standard', () => (
  <div className="app flex-center-middle">
    <div className="element-width">
      <SystemMessage
        changes={[{
          object: 'Fee',
          from: '800',
          to: '2000',
        }, {
          object: 'Deal',
          from: 'Landed',
          to: 'Flat',
        }, {
          object: 'Performance',
          from: 'DJ',
          to: 'Live',
        }, {
          object: 'Duration',
          from: '1.5',
          to: '2',
        }, {
          object: 'Date',
          from: '24.12.2016',
          to: '31.12.2016',
        }]}
        date="24.12.2016" time="12:23" user="Hans"
      />
    </div>
  </div>
))
;

