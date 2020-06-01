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


/**
 * Load up all the command libraries.
 * @param {string} dir 
 */
const loadCommands = (dir = './commands') => {
    const commands = readdirSync(`./src/${dir}`).filter(file => file.endsWith('.js'));

    // eslint-disable-next-line no-restricted-syntax
    for (const file of commands) {
      const command = require(`${dir}/${file}`);
      if (command.help && typeof (command.help.name) === 'string' && typeof (command.help.category) === 'string') {
        if (client.commands.has(command.help.name)) {
          console.warn(`${warning} The command is redundant with the name of ${command}`);
          return;
        }

        client.commands.set(command.help.name, command);

        console.log(`${success} loaded command: ${command.help.name}`);
      } else {
        console.log(`${error} loading the command commits an error in ${dir}${commands}.\n you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
        continue;
      }

      if (command.help.aliases && typeof (command.help.aliases) === 'array') {
        command.help.aliases.forEach((alias) => {
          if (client.aliases.get(alias)) return console.warn(`${warning} The command is redundant with the name of ${alias}`);

          client.aliases.set(alias, command.help.name);
        });
      }
    }
};

// Event when the bot is ready and online.
client.once('ready', () => {
  loadCommands();
  console.log(`${client.user.username} has started functioning.`);
  client.user.setActivity(`Serving ${client.guilds.cache.size} guild servers. Use ${process.env.PREFIX}help`);
});

client.on('message', async (msg) => {
  const prefix = process.env.PREFIX;
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  const { bot } = msg.author;

  if (prefix && !bot) {
    console.log(`${success} The argument passed from the command: ${cmd} is ${args}`);
  }

  if (!msg.content.startsWith(prefix)) return;

  if (cmd.length === 0) return;

  if (msg.author.bot || !msg.guild) return;

  if (!msg.member) msg.member = await msg.guild.member(msg.author);

  let command = client.commands.get(cmd) || client.commands.find((c) => c.help.aliases && c.help.aliases.includes(cmd));

  // else if (client.aliases.has(cmd)) command = client.commands.get(client.aliases.get(cmd));

  if (command && !bot) await command.run(client, msg, args);
});

client.login(process.env.CLIENT_TOKEN).catch(console.error());
