const Twit = require('twit');
const TwitterBot = require('node-twitterbot').TwitterBot;
var randomEmoji = require('random-emoji');
var html2unicode = require("html2unicode");

const emojiHaikuBot = new TwitterBot({
  consumer_key: 'u1IbPHqvfJfvXvm8p2UW4aSw4',
  consumer_secret: 'ReXcqRD8L0pxfAys0sWVSQ4sDUwGiX5HjdTmvhaypUO1wu9C11',
  access_token: '1096447518458695680-sHifOiHVJj7n0wi1fyGkVPGdN6MCgQ',
  access_token_secret: 'AXSf1V25RA4LyjR8gtvp6ac1aiaXbW18cgRQm1IfjgFHN'
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
