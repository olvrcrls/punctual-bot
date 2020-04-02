require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.username} has started functioning.`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} guild servers.`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.CLIENT_TOKEN);
