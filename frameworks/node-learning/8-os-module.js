const { log } = require('console')
const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user)


console.log(`The System Uptime in hours is: ${Math.round(os.uptime() / 60 / 60)}`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS)