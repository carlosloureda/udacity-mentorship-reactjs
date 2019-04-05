/**
 * @name curry
 * @param {Function} fn - A function to curry
 * @returns {Function} A new function that is a curried version of fn
 */
function curry(fn, ...args) {

    // How many arguments do we expect to receive?
    const arity = fn.length;

    function curried(...args2) {

      const locals = args.concat(args2);

      // If we have all the arguments, apply the function and return result
      if (locals.length >= arity) {
        return fn(...locals);

      // If we don't have all the arguments,
      // return a new function that awaits remaining arguments
      } else {
        return curry(fn, ...locals);
      }
    }

    // If we have all the arguments apply the function,
    // else return a function to receive more arguments.
    return ((args.length >= arity) ? curried() : curried);
}


/**
 * @name compose
 * @param {...Function} fns - The functions to compose
 * @returns {Function} A new function that is the composition of fns
 */
function compose(...fns) {
    return function composition(arg) {
      return fns.reduceRight((acc, next) => {
        return next(acc);
      }, arg);
    };
}


const map = curry((fn, xs) => xs.map(fn));

/**
 * @name join
 * @param {String} separator - Character to separate elements in array
 * @param {String[]} xs - Array of strings to join
 * @returns {String} The joined string
 */
const join = curry((separator, xs) => xs.join(separator));

module.exports = {
    curry,
    compose,
    map,
    join
}