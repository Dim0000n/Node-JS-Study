const os = require('os')

console.log("Operation system:", os.platform())

console.log("Processor architectury:", os.arch())

//console.log("Processor information:", os.cpus())

console.log("Free memory:", os.freemem())

console.log("Full memory", os.totalmem())

console.log("Home directory:", os.homedir())

console.log("Enabled:", os.uptime())