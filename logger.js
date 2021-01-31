const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message)  {
        // send an http request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://events.io'}); //raise an event and encapsulate in an obj
    }
}

module.exports = Logger;
