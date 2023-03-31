// const name = require('./3-names')
// const sayhu = require('./4-utiles')

// const data=require("./5-alternative")
// console.log(data)

// require('./6-mind')

// sayhu(name.firname)
// sayhu(name.secname)
// sayhu('susan')

// //built in modules

// //path

// //fs

// //HTTP


const _ =require('lodash')
const array=[1,[2,[3,[4,[5]]]]]
const newarray=_.flattenDeep(array)
console.log(newarray)