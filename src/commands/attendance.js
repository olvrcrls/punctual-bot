// const Attendance = require('../services/AttendanceService');

module.exports.run = async (client, msg, args) => {
  await msg.channel.send(`This is attendance. This is the argument ${args}`);
};

module.exports.help = {
  name: 'attendance',
  description: '',
  usage: '',
  category: 'Attendance',
  aliases: [''],
};
