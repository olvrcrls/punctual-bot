let randInt = require('../helpers/randInt');

module.exports.run = async (client, msg, args) => {
    let max = args[0] || 100;
    let rng = randInt(parseInt(max)) || randInt(max);

    await msg.channel.send(`Your roll from (1-${max}) is **${rng}** :game_die:`);
};


module.exports.help = {
  name: 'roll',
  description: 'For death rolls in discord',
  usage: 'For death rolls in discord',
  category: 'Misc',
  aliases: ['dr', 'deathroll'],
}