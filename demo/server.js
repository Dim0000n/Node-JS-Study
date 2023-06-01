const http = require('http') //import http module
const fs = require('fs')
const path = require('path')

//create server
const server = http.createServer((req, res) => { 
    res.writeHead(200, {  // write headers
        'Content-Type': 'text/html'
    })

    const url = req.url; //get url
    switch (url) {
        case "/contact": //if it is contect page
            fs.readFile(path.join(__dirname, '../public', 'contact.html'), (err, data) => { //read file
                if (err) {
                    throw err
                }

                res.end(data); //show to user
            })

            break
        default: //default behavior 
            fs.readFile(path.join(__dirname, '../public', 'index.html'), "utf-8", (err, data) => { //read index.html
                if (err) {
                    throw err
                }

                res.end(data); //if it's ok show to user
            })

    }
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