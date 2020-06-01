// const Attendance = require('../services/AttendanceService');

module.exports.run = async (client, msg, args) => {
  await msg.channel.send(`This is attendance. This is the argument ${args}`);
};

module.exports.help = {
  name: 'attendance',
  description: 'Sets the member of this server to have attendance specifically here.',
  usage: 'Set attendance.',
  category: 'Attendance',
  aliases: [''],
};
