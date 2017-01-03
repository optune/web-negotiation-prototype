import React from 'react';

import { storiesOf } from '@kadira/storybook';

import Header from './Header.jsx';
import MessageInput from './MessageInput.jsx';
import MessageBox from './MessageBox.jsx';


storiesOf('Negotiation', module)
.add('standard', () => (
  <div className="app flex-center-middle">
    <div className="element-width">
      <Header tofrom="To" name="Marc Promoter" />
      <Header tofrom="From" name="Fernando Artist (Agent Tiffany)" />

      <MessageBox
        messages={[{
          self: true,
          body: 'Hi there, Id like to book you to our awesome party. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Are you interested?',
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
          body: 'Yes, of course! But I need mo money! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
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

      <MessageInput label="MESSAGE" messagehint="Your message" />
    </div>
  </div>
))
;

