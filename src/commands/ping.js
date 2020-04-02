module.exports.run = async (client, msg, args) => {
  await msg.channel.send('pong');
};

module.exports.help = {
  name: 'ping',
  description: '',
  usage: '',
  category: '',
  aliases: [''],
};
