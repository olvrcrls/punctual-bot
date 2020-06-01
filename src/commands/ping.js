module.exports.run = async (client, msg) => {
  await msg.channel.send('Pong!');
};

module.exports.help = {
  name: 'ping',
  description: 'Test to see if the bot is responding to the user',
  usage: 'Test to see if the bot is responding to the user',
  category: 'Test',
  aliases: ['pong'],
};
