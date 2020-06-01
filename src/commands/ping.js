module.exports.run = async (client, msg, args) => {
  await msg.channel.send(`pong and the argrument is ${args}`);
};

module.exports.help = {
  name: 'ping',
  description: '',
  usage: '',
  category: '',
  aliases: [''],
};
