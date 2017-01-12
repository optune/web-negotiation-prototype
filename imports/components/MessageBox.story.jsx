import React from 'react';

import { storiesOf } from '@kadira/storybook';

import MessageBox from './MessageBox.jsx';
import MessageType from '../constants/MessageType.js';


storiesOf('organisms/MessageBox', module)
.addWithInfo('info', null, () => (
  <MessageBox
    messages={[{
      self: true,
      body: 'Hi there, Id like to book you to our awesome party. Are you interested?',
      date: '23.12.2016',
      time: '22:05',
      type: MessageType.USER,
      userPicture: 'https://placeimg.com/100/100/people',
    }]}
  />
), { inline: true })
.add('standard', () => (
  <div className="app flex-center-middle">
    <div className="element-width">
      <MessageBox
        messages={[{
          self: true,
          body: 'Hi there, Id like to book you to our awesome party. Are you interested?',
          date: '23.12.2016',
          time: '22:05',
          type: MessageType.USER,
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: false,
          body: 'Oh, hi',
          date: '23.12.2016',
          time: '22:06',
          type: MessageType.USER,
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: false,
          body: 'Yes, of course! But I need mo money!',
          date: '23.12.2016',
          time: '22:07',
          type: MessageType.USER,
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: true,
          body: 'Alright, we`ll give you as much as you want. Cool?',
          date: '23.12.2016',
          time: '22:30',
          type: MessageType.USER,
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        }, {
          self: false,
          body: 'Good boy',
          date: '23.12.2016',
          time: '22:35',
          type: MessageType.USER,
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [],
        },
        {
          self: false,
          body: 'Fee is to low',
          date: '23.12.2016',
          time: '22:35',
          type: MessageType.QUICK,
          userPicture: 'https://placeimg.com/100/100/people',
          changes: [{
            message: 'Fee is to low',
          }, {
            message: 'Date not avialable',
          }],
        }, {
          self: false,
          body: 'Hallo',
          date: '23.12.2016',
          time: '22:35',
          userPicture: 'https://placeimg.com/100/100/people',
          type: MessageType.SYSTEM,
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
    </div>
  </div>
))
;
