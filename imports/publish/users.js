import { Meteor } from 'meteor/meteor';


Meteor.publish('users', () => Meteor.users.find({}));
