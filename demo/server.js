const http = require('http') //import http module
const fs = require('fs')
const path = require('path')

//create server
const server = http.createServer((req, res) => {
    
    //method to show default page
    const getDefaultPage = function() {
        fs.readFile(path.join(__dirname, "../public", "index.html"), (err, defaultContent) => {
            if (err) {
                getErrPage()
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                })
                res.end(defaultContent)
            } 
        })
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

    let filePath = path.join(__dirname, "../public", req.url === "/" ? "index.html" : req.url);
    let contentType = "text/html";
    const ext = path.extname(filePath);
    if (!ext) {
        filePath += ".html"
    }

    switch (ext) {
        case ".css":
            contentType = "text/css"
            break
        case ".js":
            contentType = "text/javascript"
            break
        default:
            contentType = "text/html"  
    }



    //server logic
    fs.readFile(filePath, (err, content) => {
        if (err) { //if error
            getDefaultPage();   //show default page
        } else {
            res.writeHead(200, { // set status to 200
                "Content-Type": contentType //set content-type to html
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