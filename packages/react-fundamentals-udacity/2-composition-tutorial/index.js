/*
The objetive is to build a titleCase based on composition ...

This function should do:

  - Find the words in the string. First composiiton => words function
  - Capitalize the first character of each word. 2nd => captilize function
  - Return the new string. the titleCase function

  Run this example with node
  Special thanks to Kevin Greene, see github: https://github.com/kevinbgreene/composition-tutorial
*/
const words =  require("./words.js");
const { curry, join, compose } = require("./utils")
const { capitalizeList } = require("./capitalize.js");


// const titleCase = str => join(' ', capitalizeList(words(str)) );
const titleCase = compose(join(' '), capitalizeList, words);

var res = titleCase(" an example   string to   be capitalized     !!!");
console.log(res);