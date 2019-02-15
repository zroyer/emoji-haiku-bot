const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;

const emojiHaikuBot = new TwitterBot({
 consumer_key: process.env.TWITTER_CONSUMER_KEY,
 consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
 access_token: process.env.TWITTER_ACCESS_TOKEN,
 access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

emojiHaikuBot.tweet('hello world!');
