// FIle System
const fs = require('fs')
const path = require('path')

//Create directory
//
//args
//1 -path of new dir,
//2 - callback
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
// if (err) {  //if there is an error
//     throw err //throw it
// }

// console.log("Directory is created")
// })


//Create file
const filePath = path.join(__dirname, 'test', 'text.txt')

//args
//1 - path
//2 - content
//3 - callback
// fs.writeFile(filePath, 'Hello NodeJS!', err => {
//     if (err) {
//         throw err
//     }
//     console.log('File is created!')
// })


//Append file
// fs.appendFile(filePath, "\nHello Again!", err => {
//     if (err) {
//         throw err
//     }

//     console.log('File is appended')
// })

//READ FILE

//read file without decoding in args
fs.readFile(filePath, (err, content) => {
    if (err) {
        throw err
    }

    const data = Buffer.from(content) //get bytes from buffer
    console.log(data.toString()) //transform to String
})


//read file with decoding in args
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content)
})