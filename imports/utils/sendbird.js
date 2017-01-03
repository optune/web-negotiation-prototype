import { Meteor } from 'meteor/meteor';

import SendBird from 'sendbird';


export const api = new SendBird({
  appId: Meteor.settings.public.SENDBIRD_APP_ID,
});

window.sendbird = api;

export const connect = (id, name, profilePicUrl, onMessageReceived) => (
  new Promise((resolve, reject) =>
    api.connect(id, (user, error) => {
      if (error) reject(error);
      else resolve(user);
    }))
  ).then(user => new Promise((resolve, reject) => (
    api.updateCurrentUserInfo(name, profilePicUrl,
      (response, error) => {
        if (error) reject(error);
        else resolve(user);
      },
    )
  )).then(() => {
    const channelHandler = new api.ChannelHandler();
    channelHandler.onMessageReceived = onMessageReceived;
    api.addChannelHandler('HANDLER_ID', channelHandler);
    return user;
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

export const getChannel = channelUrl => (
  new Promise((resolve, reject) => {
    api.GroupChannel.getChannel(channelUrl, (channel, error) => {
      if (error) reject(error);
      else resolve(channel);
    });
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

export const sendMessage = (channelUrl, message) => (
  getChannel(channelUrl)
  .then(channel => (
    new Promise((resolve, reject) => {
      channel.sendUserMessage(message, { data: 'test' }, 'TEXT_MESSAGE', (result, error) => {
        if (error) reject(error);
        else resolve(result);
      });
    })
  ))
);

export const getMessages = channelUrl => (
  getChannel(channelUrl)
  .then(channel => (
    new Promise((resolve, reject) => {
      channel.createPreviousMessageListQuery()
      .load(200, true, (messages, error) => {
        if (error) reject(error);
        else resolve(messages);
      });
    })
  ))
);

export const leaveChannel = channelUrl => (
  getChannel(channelUrl)
  .then(channel => (
    new Promise((resolve, reject) => {
      channel.leave((response, error) => {
        if (error) reject(error);
        else resolve(response);
      });
    })
  ))
);
