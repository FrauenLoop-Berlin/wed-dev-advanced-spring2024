'use strict'
// DON'T DECLARE YOUR VARIABLES WITHOUT A KEY WORD!!!
// newVarButBad = true
// console.log(newVarButBad);

// Python comment: #
// JS: comments: one line: //, multi-line: /* hvifhia */

// Python: print('some', 'text')
console.log("text", 3, true)
// numbers:
4 * 5
// booleans: 
// Python True, False
true, false
// no-content values: 
// Python: none
// JavaScript
undefined, null, NaN
console.log(1 / '0');

// variables:
// Python: age = 37
// javaScript: 
// old: 
var ageOld = 12
// modern: es6
let ageCanChange = 13
// change the value:
ageCanChange = 14
console.log(ageCanChange);

const ageCanNotChange = 24
// ageCanNotChange = 25
// console.log(ageCanNotChange);


// functions
// Python: 
// def name_of_func():
// f"text {var}"
//   return "needs indentation!"

// older version - 
function name_of_func(user, age) {
  let greeting = `Hello, ${user}. You are ${age} old`
  return greeting
}
name_of_func('berta', 34)

// Python: Dictionary
// Js: objects

let book = {
  title: 'Clean Code',
  year: 1999
}

// Python: List
// arrays

let myBooks = [ 'Clean Code', ' 501 German Verbs' ]

// conditionals

// Python: 
// if True==True:
//   do something
// else: 
//   something else

// Js: 
if (true === true ){
  'do something'
} else {
  'something else'
}

// Loops: 
// Python
// for var in Array: 
//   do loop
// JavaScript one version - there are some more
for (let x in myBooks){
  // loop happening
}  