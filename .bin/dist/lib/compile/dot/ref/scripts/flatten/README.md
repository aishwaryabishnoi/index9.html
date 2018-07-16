Array Flatten
NPM version NPM downloads Build status Test coverage

Flatten an array of nested arrays into a single flat array. Accepts an optional depth.

Installation
npm install array-flatten --save
Usage
var flatten = require('array-flatten')

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9])
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9], 2)
//=> [1, 2, 3, [4, [5], 6], 7, 8, 9]

(function () {
  flatten(arguments) //=> [1, 2, 3]
})(1, [2, 3])
License
MIT
