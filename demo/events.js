//Events
const EventEmitter = require('events')

//create event emitter
const emitter = new EventEmitter()

//set event
emitter.on('anything', data => {
    console.log('On: anything', data)
})

//call event
emitter.emit('anything', {a: 1})


//extend class
class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) { //create subscribe method
        console.log('[Subscribe]')
        this.on(eventName, callback)
    }

    dispatch(eventName, data) { //create method to call event
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher() //create instance

dis.subscribe('aa', data => { //subscribe aa-event 
    console.log('ON: aa', data) 
})

dis.dispatch('aa', {aa: 22}) //call aa-event