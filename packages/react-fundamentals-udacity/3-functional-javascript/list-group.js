const tag = require("./tag");
const { compose } = require("./functional.js");

const listGroupTag = tag({ tag: 'ul', attr: { class: 'list-group' }})
const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' }})
const listGroupItems = list =>
  list.map(listGroupItem)
    .join('')
const listGroup = compose(listGroupTag, listGroupItems)

module.exports = listGroup;
