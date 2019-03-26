const listGroupPanel = require("./listGroupPanel");
const { compose, set } = require("./functional");


const setInnerHtml = set('innerHTML')

const content = document.getElementById('content')
const main = e =>
  compose(setInnerHtml(e), listGroupPanel)

const list = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
  'Vestibulum at eros'
]

main(content)(list)
