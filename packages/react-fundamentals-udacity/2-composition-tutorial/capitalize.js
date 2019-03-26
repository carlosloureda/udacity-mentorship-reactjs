

/**
 * @name capitalize
 * @param {String}
 * @returns {String}
 */
const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

/**
 * @name capitalizeList
 * @param {String[]} arr - Array of strings to capitalize
 * @returns {String[]} An array with all entries capitalized
 */
const { map } = require('./utils');
const capitalizeList = map(capitalize);

module.exports = {
    capitalize,
    capitalizeList
}