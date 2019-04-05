const tag = require("./tag");
const { compose } = require("./functional.js");

const panelTag = tag({ tag: 'div', attr: { class: 'panel panel-default' }})
const panelBody = tag({ tag: 'div', attr: { class: 'panel-body' }})
const basicPanel = compose(panelTag, panelBody)

const listGroupPanel = compose(basicPanel, listGroup)


module.exports = listGroupPanel;