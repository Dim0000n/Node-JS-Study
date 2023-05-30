const http = require('http') //import http module


//create server
const server = http.createServer((req, res) => { 
    res.writeHead(200, {  // write headers
        'Content-Type': 'text/plain'
    })
    res.end('<h1>Hello NodeJS</h1>') //it will see user in browser
})

//start server
//
//Args
//1 - port
//2 - callback 
// server.listen(3000, () => {
//     console.log('Server has been started...')
// })

module.exports = server //export server