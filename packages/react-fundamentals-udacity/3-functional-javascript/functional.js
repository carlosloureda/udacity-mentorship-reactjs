const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const set = prop => obj => value =>
  (obj[prop] = value, obj)

const map = f => x =>
  Array.prototype.map.call(x, f)

const join = seperator => list =>
  Array.prototype.join.call(list, seperator)

module.exports = {
    compose,
    set,
    map,
    join
}