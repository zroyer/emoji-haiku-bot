const Twit = require(‘twit’);
const TwitterBot = require(‘node-twitterbot’).TwitterBot;
const emojiHaikuBot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

emojiHaikuBot.tweet('hello world!');
