/**
 * @name words
 * @param {String} str - A string to split into an array of words
 * @returns {String[]} An array of individual words
 */
const Oldwords = str => {
    //  Breal string into words
    const parts = str.trim().split(' ');
    // Remove extra white space
    return parts.filter((next) => next.length > 0);
}



/* We can do more composition on the words funciton, this function does:

    1. Trim leading/trailing white space
    2. Split string on spaces
    (1 and 2 are the first line of code)
    3. Remove empty strings (extra spaces) from words list


*/

/* 1. The trim thing */
/**
 * @name trim
 * @param {String} str - The string to trim
 * @returns {String} A string with leading and trailing whitespace removed
 */
const trim = (str) => str.trim();

/* 2. Split string on spaces */

/**
 * @name split
 * @param {String} separator - Character to split string on
 * @param {String} str - The string to split
 * @returns {String[]} An array of strings
 */
const { curry } = require('./utils');
const split = curry((separator, str) => str.split(separator));

/* For this example we want to split on spaces, so may do a breakOnSpace funtion: */

/**
 * @name breakOnSpace
 * @param {String} str - The string to break
 * @returns {String[]} An array of strings
 */
const breakOnSpace = split(' ');

/* 3. Remove empty*/

/**
 * @name removeEmpty
 * @param {Array} xs - List to filter
 * @returns {Array} New array with empty elements removed
 */
const removeEmpty = (xs) => xs.filter(next => next.length > 0);


/**
 * @name words
 * @param {String} str - A string to split into an array of words
 * @returns {String[]} An array of individual words
 */
const { compose } = require("./utils")

// const words = str => {
//     const parts = breakOnSpace(trim(str));
//     return removeEmpty(parts);
// }

const words = compose(removeEmpty, breakOnSpace, trim);

module.exports = words;