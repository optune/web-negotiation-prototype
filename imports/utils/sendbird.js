import { Meteor } from 'meteor/meteor';

import SendBird from 'sendbird';


export const api = new SendBird({
  appId: Meteor.settings.public.SENDBIRD_APP_ID,
});

export const connect = (id, name, profilePicUrl) => (
  new Promise((resolve, reject) =>
    api.connect(id, (user, error) => {
      if (error) reject(error);
      else resolve(user);
    }))
  ).then(user => new Promise((resolve, reject) => {
    api.updateCurrentUserInfo(name, profilePicUrl,
      (response, error) => {
        if (error) reject(error);
        else resolve(user);
      },
    );
  }),
);

export const getChannels = () => (
  new Promise((resolve, reject) => {
    const channelListQuery = api.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = true;

    if (channelListQuery.hasNext) {
      channelListQuery.next((channels, error) => {
        if (error) reject(error);
        else resolve(channels);
      });
    }
  })
);

export const createChannel = participants => (
  new Promise((resolve, reject) => {
    api.GroupChannel.createChannelWithUserIds(
      participants, true, null, null, { test: 123 },
      (channel, error) => {
        if (error) reject(error);
        else resolve(channel);
      },
    );
  })
);
