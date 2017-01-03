import { Meteor } from 'meteor/meteor';

import SendBird from 'sendbird';


const metaKeys = ['status'];

export const api = new SendBird({
  appId: Meteor.settings.public.SENDBIRD_APP_ID,
});

// expose api to browser for debugging
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

const getChannelMetaData = channel => new Promise((resolve, reject) => {
  channel.getMetaData(metaKeys, (response, error) => {
    const enhancedChannel = channel;
    enhancedChannel.metaData = response;
    if (error) reject(error);
    else resolve(enhancedChannel);
  });
});

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
  .then(channels =>
    Promise.all(channels.map(getChannelMetaData)),
  )
);

export const getChannel = channelUrl => (
  new Promise((resolve, reject) => {
    api.GroupChannel.getChannel(channelUrl, (channel, error) => {
      if (error) reject(error);
      else resolve(channel);
    });
  })
  .then(getChannelMetaData)
);

export const createChannel = (participants, metaData) => (
  new Promise((resolve, reject) => {
    api.GroupChannel.createChannelWithUserIds(
      participants, true, null, null, metaData,
      (channel, error) => {
        if (error) reject(error);
        else resolve(channel);
      },
    );
  })
);

export const sendMessage = (channelUrl, message, metaData) => (
  getChannel(channelUrl)
  .then(channel => (
    new Promise((resolve, reject) => {
      channel.sendUserMessage(message, metaData, 'TEXT_MESSAGE', (result, error) => {
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

export const updateMetaData = (channelUrl, metaData) => (
  getChannel(channelUrl)
  .then(channel => (
    new Promise((resolve, reject) => {
      channel.updateMetaData(metaData, true, (response, error) => {
        if (error) reject(error);
        else resolve(response, channel);
      });
    })
  ))
  .then(() => (
    getChannel(channelUrl)
  ))
  .then(channel => (
    new Promise((resolve, reject) => {
      console.log(channel);

      channel.getMetaData(Object.keys(metaData), (response, error) => {
        console.log(response);

        if (error) reject(error);
        else resolve(response);
      });
    })
  ))
);
