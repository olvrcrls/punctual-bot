const Attendance = require('../services/AttendanceService');

module.exports.run = async (client, msg, args) => {
    await msg.channel.send('This is attendance. WIP.');
};

module.exports.help = {
    name: 'attendance',
    description: '',
    usage: '',
    category: '',
    aliases: [''],
}; 