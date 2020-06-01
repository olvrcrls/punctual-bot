const prefix = process.env.PREFIX;
const owner = process.env.OWNER;

module.exports.run = async (client, msg) => {
  const { commands } = client;
  if (!commands.length) {
    for (command in commands) {
      //TODO: Loop up and display all the available commands.
    }
  } else {
    await msg.channel.send(`My master, <@${owner}>, has not created any commands for me yet.`);
  }
};

module.exports.help = {
  name: 'help',
  description: 'List all of my commands or info about a specific command.',
  usage: 'List all of my commands or info about a specific command.',
  category: 'Misc',
  aliases: ['commands'],
};
