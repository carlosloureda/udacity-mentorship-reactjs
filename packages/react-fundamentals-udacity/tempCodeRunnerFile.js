/*

* Create a function that takes a string and capitalizes every word in that string.

*  - Find the words in the string.
*  - Capitalize the first character of each word.
*  - Return the new string.
*/

/* Without composition */
function titleCaseOld(str) {
    //  Breal string into words
    const parts = str.trim().split(' ');

    // Remove extra white space
    const trimmed = parts.filter((next) => next.length > 0);

    // Capitalize the first letter of each words
    const capitalized = trimmed.map(next => {
        return next[0].toUpperCase() + next.substring(1);
    });

    // Join words back into string and return
    return capitalized.join(' ');
}

/* Let's add composition */

/**
 *
 * @name words
 * @param {String} str - The string to break into words
 * @returns {String[]} An array of individual words
 */
function words(str) {
    //  Breal string into words
    const parts = str.trim().split(' ');
    // Remove extra white space
    return parts.filter((next) => next.length > 0);
}

/**
 *
 * @name capitalize
 * @param {String} str - The string to capitalize
 * @returns {String} A new string with the first letter capitalized
 */
function capitalize(str) {
    return str.length ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

/**
 *
 *
 * @param {*} str
 * @returns
 */
function titleCase(str) {
    // Capitalize the first letter of each words
    const capitalized = words(str).map(capitalize);
    // Join words back into string and return
    return capitalized.join(' ');
}
// we can use the compose funciton:
// const titleCasePro = str => join('', capitalize(words(str)));
const titleCasePro = str => words(str).map(capitalize).join(' ')

console.log(titleCasePro("shoasda eansdlad"))