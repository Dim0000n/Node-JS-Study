const http = require('http') //import http module
const fs = require('fs')
const path = require('path')

//create server
const server = http.createServer((req, res) => {
    
    let fName = "" //init url

    switch (req.url) { 
        case "/contact":        //if url equals contact
            fName = "contact.html"
            break
        default:
            fName = "index.html" //default is index.html
    }
    
    //method to show 404 page
    const getErrPage = function() {
        fs.readFile(path.join(__dirname, "../public", "error.html"), (err, data) => {
            if (err) { //if error
                res.writeHead(500); //set error-code to 500
                res.end("Error"); //print error
            }
        })
    }

    //server logic
    fs.readFile(path.join(__dirname, "../public", fName), (err, content) => {
        if (err) { //if error
            getErrPage();   //show 404 page
        } else {
            res.writeHead(200, { // set status to 200
                "Content-Type": "text/html" //set content-type to html
            })
            res.end(content)
        }
    })
    
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