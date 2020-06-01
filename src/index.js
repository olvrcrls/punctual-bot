require('dotenv').config();
const Discord = require('discord.js');
const { readdirSync } = require('fs');
const { success, error, warning } = require('log-symbols');
const errorlog = require('errorlog');

errorlog.defaultLog = process.stdout;
errorlog.defaultLevel = errorlog.DEBUG;
global.log = errorlog();


// Creating client object.
const client = new Discord.Client();

// creating commands and aliases collection
['commands', 'aliases'].forEach((x) => client[x] = new Discord.Collection());

const loadCommands = (dir = './commands') => {
  readdirSync(`./src/${dir}`).forEach((dirs) => {
    const commands = readdirSync(`./src/${dir}`).filter((files) => files.endsWith('.js'));

    // eslint-disable-next-line no-restricted-syntax
    for (const file of commands) {
      const pullFile = require(`${dir}/${file}`);
      if (pullFile.help && typeof (pullFile.help.name) === 'string' && typeof (pullFile.help.category) === 'string') {
        
        if (client.commands.has(pullFile.help.name)) {
          return console.warn(`${warning} The command is redundant with the name of ${pullFile.help.name}`);
        }

        client.commands.set(pullFile.help.name, pullFile);

        console.log(`${success} loaded command: ${pullFile.help.name}`);
      } else {
        console.log(`${error} loading the command commits an error in ${dir}${dirs}.\n you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
        continue;
      }

      if (pullFile.help.aliases && typeof (pullFile.help.aliases) === 'object') {
        pullFile.help.aliases.forEach((alias) => {
          if (client.aliases.get(alias)) return console.warn(`${warning} The command is redundant with the name of ${alias}`);

          client.aliases.set(alias, pullFile.help.name);
        });
      }
    }
  });
};

// Event when the bot is ready and online.
client.on('ready', () => {
  loadCommands();
  console.log(`${client.user.username} has started functioning.`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} guild servers. Use ${process.env.PREFIX}help`);
});

client.on('message', async (msg) => {
  const prefix = process.env.PREFIX;
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  if (prefix) {
    console.log(`${success} The argument passed from the command: ${cmd} is ${args}`);
  }
  
  let command;

  if (!msg.content.startsWith(prefix)) return;

  if (cmd.length === 0) return;

  if (msg.author.bot || !msg.guild) return;

  if (!msg.member) msg.member = await msg.guild.member(msg.author);

  if (client.commands.has(cmd)) command = client.commands.get(cmd);
  else if (client.aliases.has(cmd)) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, msg, args);
});

client.login(process.env.CLIENT_TOKEN).catch(console.error());
