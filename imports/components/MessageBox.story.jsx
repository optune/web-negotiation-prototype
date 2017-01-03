import React from 'react';

import { storiesOf } from '@kadira/storybook';

import MessageBox from './MessageBox.jsx';


storiesOf('organisms/MessageBox', module)
.addWithInfo('info', null, () => (
  <MessageBox
    messages={[{
      self: true,
      body: 'Hi there, Id like to book you to our awesome party. Are you interested?',
      date: '23.12.2016',
      time: '22:05',
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
          userPicture: 'https://placeimg.com/100/100/people',
        }, {
          self: false,
          body: 'Oh, hi',
          date: '23.12.2016',
          time: '22:06',
          userPicture: 'https://placeimg.com/100/100/people',
        }, {
          self: false,
          body: 'Yes, of course! But I need mo money!',
          date: '23.12.2016',
          time: '22:07',
          userPicture: 'https://placeimg.com/100/100/people',
        }, {
          self: true,
          body: 'Alright, we`ll give you as much as you want. Cool?',
          date: '23.12.2016',
          time: '22:30',
          userPicture: 'https://placeimg.com/100/100/people',
        }, {
          self: false,
          body: 'Good boy',
          date: '23.12.2016',
          time: '22:35',
          userPicture: 'https://placeimg.com/100/100/people',
        }]}
      />
    </div>
  </div>
))
;

