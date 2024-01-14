
//syncrhonous appraoch
const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

// write file sync takes the file name (if dne, node will create file, second param is value u wanna write)
// writeFileSync('./content/third.txt', 'wow! now this is a third file! amazing!')

// if you want to append to a file, you add another argument
writeFileSync(
    './content/third.txt', 
    ' ... again!!!',
    { flag: 'a' }
)

console.log('done with this task')
console.log('starting the next task')

// this is extremely bad - imagine you have 10 users, one user is taking an extremely long time, node.js
// be able to serve the next user before finish this task, that is, suppose writeFileSync takes a verryy long time, likw
// if it writing a few billion characters to it 