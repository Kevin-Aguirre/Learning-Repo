// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// think back to object oriented programming, you want to keep member variables private, and only let out getters and setters

// node uses commonJS under the hood
// but every file in node is a module 

/*
note that we are currently doing:
node app.js

yes, one file is being used to execute the app, however you can use imports 

*/

// const names = require('./4-names')
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')
// invokes the files 
// happens in es6 modules
// dont stress ab it, when you import a module, you actually invoke it, it happens bc code isnt exported on its own,


// sayHi(names.john)
// sayHi(names.peter)

// sayHi(john)
// sayHi(peter)
// sayHi("susan")