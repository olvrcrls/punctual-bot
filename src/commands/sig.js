let randInt = require('../helpers/randInt');

module.exports.run = async (client, msg, args) => {
    if (args.length) {
        let name = encodeURI(args.join(' '));
        let background = randInt(10);
        let stance = randInt(25);
        let url = `https://www.novaragnarok.com/ROChargenPHP/newsig/${name}/${background}/${stance}`;
        await msg.channel.send(url);
    } else {
        await msg.channel.send('What is this?! **Please provide** a character name.');
    }
  };
  
  module.exports.help = {
    name: 'sig',
    description: 'Load out the signature template of a character',
    usage: 'Load out the signature template of a character',
    category: 'NovaRO',
    aliases: ['signature'],
  };
  