let randInt = require('./randInt');

module.exports = function () {
    const strings = [
        '',
        'Awesome lad here', 'Looks strong', 'What a noob', 'Pepega user',
        'Is this famous?',
    ];
    return strings[randInt(strings.length)];
}