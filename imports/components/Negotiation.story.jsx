import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Header from './Header.jsx';
import MessageInput from './MessageInput.jsx';
import MessageBox from './MessageBox.jsx';
import FeeBar from './FeeBar.jsx';


storiesOf('Negotiation', module)
.add('standard', () => (
  <div className="app flex-center-middle">
    <div className="element-width">
      <Header tofrom="To" name="Marc Promoter" />
      <Header tofrom="From" name="Fernando Artist (Agent Tiffany)" />

      <MessageBox
        messages={[{
          self: true,
          body: 'Hi there, Id like to book you to our awesome party. Are you interested?',
          date: '23.12.2016',
          time: '22:05',
          type: 'user',
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: false,
          body: 'Oh, hi',
          date: '23.12.2016',
          time: '22:06',
          type: 'user',
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: false,
          body: 'Yes, of course! But I need mo money!',
          date: '23.12.2016',
          time: '22:07',
          type: 'user',
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: true,
          body: 'Alright, we`ll give you as much as you want. Cool?',
          date: '23.12.2016',
          time: '22:30',
          type: 'user',
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: false,
          body: 'Good boy',
          date: '23.12.2016',
          time: '22:35',
          type: 'user',
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        },
        {
          self: false,
          body: 'Fee is to low',
          date: '23.12.2016',
          time: '22:35',
          type: 'quick',
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [{
            object: 'Fee',
            message: 'Fee is to low',
          }, {
            object: 'Date',
            message: 'Date not avialable',
          }],
        }, {
          self: false,
          body: 'Hallo',
          date: '23.12.2016',
          time: '22:35',
          userPicture: 'https://placeimg.com/100/100/people',
          type: 'system',
          changes: [{
            object: 'Fee',
            from: '800',
            to: '1000',
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
          }],
        }]}
      />

      <MessageInput label="MESSAGE" />

      <FeeBar value={800} min={1000} max={1200} label="FEE" />
    </div>
  </div>
))
;

