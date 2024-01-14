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

if you want to install a local package, it will be stores as a dependency

*/

// this is a convention...? 
// note, for external modules, you must install the dependency first
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)