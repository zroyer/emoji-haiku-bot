const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
var randomEmoji = require('random-emoji');
var html2unicode = require("html2unicode");

const emojiHaikuBot = new TwitterBot({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function getEmojiLine(array) {
  return array.map(emoji => emoji.character).join(' ');
}

async function getTranslationLine(array) {
  let htmlLine = (
    '<em><b>' +
    formatTranslation(array.map(emoji => emoji.name).join(' '), '_', '-') +
    '</b></em>'
  );
  return await html2unicode.html2unicode(htmlLine);
}

function formatTranslation(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace).replace(/[0-9]/g, '');
}

async function tweet(haiku) {
  const t = (
    getEmojiLine(newHaiku[0]) + '\n' +
    getEmojiLine(newHaiku[1]) + '\n' +
    getEmojiLine(newHaiku[2]) + '\n\n' +
    await getTranslationLine(newHaiku[0]) + '\n' +
    await getTranslationLine(newHaiku[1]) + '\n' +
    await getTranslationLine(newHaiku[2])
  );

  emojiHaikuBot.tweet(t);
}

const newHaiku = randomEmoji.haiku();
tweet(newHaiku)
  .then(() => {
    console.log('🆒');
  });
