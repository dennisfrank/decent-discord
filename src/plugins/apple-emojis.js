const emojiData = require('emoji-datasource-apple/emoji');

let emojis = {};
let css = '';

let skinTones = {
  '1F3FB': '::skin-tone-1',
  '1F3FC': '::skin-tone-2',
  '1F3FD': '::skin-tone-3',
  '1F3FE': '::skin-tone-4',
  '1F3FF': '::skin-tone-5',
};

for (let i = 0; i < emojiData.length; i++) {

  let emoji = emojiData[i];
  let emojiNames = emoji.short_names;

  for (let i = 0; i < emojiNames.length; i++) {
    for (let tone in skinTones) {

      emojis[emojiNames[i]] = '\'https://dennisfrank.github.io/decent-discord/resources/emojis/apple/' + emoji.image + '\'';

      if (emoji.skin_variations && emoji.skin_variations[tone]) {
        emojis[emojiNames[i] + skinTones[tone]] = '\'https://dennisfrank.github.io/decent-discord/resources/emojis/apple/' + emoji.skin_variations[tone].image + '\'';
      }

    }
  }
}

for (let shortcode in emojis) {
  if (emojis.hasOwnProperty(shortcode)) {
    css += `[alt=":${shortcode}:"] {\n    content: url(${emojis[shortcode]});\n}\n\n`
  }
}

module.exports = css;
