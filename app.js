const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
var randomEmoji = require('random-emoji');

const emojiHaikuBot = new TwitterBot({
  consumer_key: 'u1IbPHqvfJfvXvm8p2UW4aSw4',
  consumer_secret: 'ReXcqRD8L0pxfAys0sWVSQ4sDUwGiX5HjdTmvhaypUO1wu9C11',
  access_token: '1096447518458695680-sHifOiHVJj7n0wi1fyGkVPGdN6MCgQ',
  access_token_secret: 'AXSf1V25RA4LyjR8gtvp6ac1aiaXbW18cgRQm1IfjgFHN'
});

function formatTranslation(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace).replace(/[0-9]/g, '');
}

function getEmojiLine(array) {
  console.log(array);
  return array.map(emoji => emoji.character).join(' ');
}

function getTranslationLine(array) {
  return formatTranslation(array.map(emoji => emoji.name).join(' '), '_', '-');
}

const newHaiku = randomEmoji.haiku();
const packagedTweet = getEmojiLine(newHaiku[0]) + '\n' + getEmojiLine(newHaiku[1]) + '\n' + getEmojiLine(newHaiku[2])
  + '\n\n' + getTranslationLine(newHaiku[0]) + '\n' + getTranslationLine(newHaiku[1]) + '\n' + getTranslationLine(newHaiku[2]);

emojiHaikuBot.tweet(packagedTweet);
