// This generates a random integer number from 0 to given the max number.

module.exports = function (max) {
    return Math.ceil(Math.random() * Math.max(parseInt(max)));
}