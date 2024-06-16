/*

npm - global command, comes with node 
npm --version 

local dependency - use it only in this particular project
npm i <packageName>

global dependncy - use it in any project (like react ...?  i think)
npm install -g <packageName>
sudo npm install -g <packageName>

package.json - manifest file (stores important info about project/package)
manual approach (create package.json in the root, create properties, etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)
dev dependency: npm i nodemon --save-dev 

if you want to install a local package, it will be stores as a dependency

*/

// this is a convention...? 
// note, for external modules, you must install the dependency first


// a gitignore files makes it so git (source control) ignores certain files or directories

// with npm install, npm checks for dependencies in pacakage.json, and automatically installs node modules folder 

// for some commands you can type npm start, but for other commands you have to do npm run <commandName>
// for example, in package.json , i have a string in scripts.dev saying nodemon app.js, so you could do npm (run) start, but in this case youd have to do npm run dev

// npm unintall <packageName>
// nuclear appraoch: deleting node modules, deleting pacakage-lock.json, and then removing what you want from depencnies, then do npm install (why would u want to do this?)

/*
global installs 
*/

// some libraries involve using npx? global packages can involve in bugs, especially me bc loonux 
// npx - starting from npm 5.2
// allows you to use it w npm5.2 or greater without setting up tools globally?

// package.lock json holds versions for specific packages and dependcenices, 
// versions have 3 values, x.xx.xx
// first num is major change - cna cause breaking changes
// second num is minor change - 17 -> 18 shouldnt introduce bugs
// third num are very minor bug fixes

// read the basics of package-json and node 

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

/**
 * js is syncrhonous and single threaded, it reads everything line by line 
 * however, callback functions are the solution to this, it allows offloading to the browser, it provudes 
 * api that offloads this to browser
 */


// node.js event loops

/**
 * Imagine you have an app, with users,so you have users making many applications, evnet loop
 * is reponsible for avoiding a scenario in which eevery single task is completed before anything else happens, 
 * super time consuming, it could only serve one user at a time, 
 * 
 * what the event loop does, is is registers the callback function, and only when the operation is complete (say, making an array of 1000000000 ints)
 * will it be executed
 * 
 * you run immediate code first, then when we have time, we execute cb function
 * 
 * returns 
 */