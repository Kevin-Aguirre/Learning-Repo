// asynronous approach - using callback !


const {readFile, writeFile} = require('fs')

console.log('start')

// you must provide utf coding!
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log("an error happened", err)
        return;
    } 

    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log("an error happened", err)
            return;
        } 
    
        const second = res;
        writeFile(
            './content/third.txt',
            ' Wow, i just wrote this by involing readFile on first.txt!',
            { flag : 'a' },
            (err, res) => {
                if (err) {
                    console.log("an error happened", err)
                    return;                    
                }
                console.log("done with this task")
            }
        )
    })

})


console.log('starting next task')
/* notice the console.logs, this is a dumbed down kevin way of explaining it, at the first readFile
with first.txt, node/js is like okay, im invoking this function, and i see a callback, alright, 
fine, im gonna offload and send away this function somewhere else to be evaluated, while that is happening,
im just going to keep executing my program
*/

// notice how this is callback hell 