const http = require('http')

// common practices - req is incoming request (an object), res is what we're sending back
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page!")
    }

    if (req.url === '/about') {
        res.end('here is our short history')
    }

    res.end(`
        <h1>Oops!</h1>  
        <p>We can't seem to find the page you are looking for!</p>
        <a href="/">back home</a>
    `)

})

server.listen(3000)

// when you install, you automatically install npm, node pacakage manager
// allows us to resue our own code in other proejcts
// se code from other developers
// share our code wiht other developers 

// package, dependcies, and modules are interchangeable

// we have access to npm global commands