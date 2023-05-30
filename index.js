// const chalk = require('chalk')
// const text = require('./data.js')

// console.log(chalk.blue(text));

// console.log(__dirname) //system variable
// console.log(__filename)

const server = require('./demo/server.js')

server.listen(3000, () => {
        console.log('Server has been started...')
    })