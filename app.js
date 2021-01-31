const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hola Earth');
        response.end();
    }
    if (request.url == '/api/courses') {
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }
});

/* example only
server.on('connection', (socket) => {
    console.log('Connection Made.');
})
*/

server.listen(3000);
console.log('Listening on port 3000...');

/*
const Logger = require('./logger');

const logger = new Logger();
logger.on('messageLogged', (args) => { //takes in the event arg from callback below
    console.log('Listener called ', args);
});
logger.log('Message!');

const path = require('path');
const os = require('os');
const fs = require('fs');

function sayHola(msg, name) {
    logger.og(msg + name);
}

sayHola('Hola ', 'Venus');
var pathObj = path.parse(__filename);
console.log(pathObj);
var totalMem = os.totalmem();
var freeMem = os.freemem();
sayHola(`Total Memory: ${totalMem}`, ` and Free Memory: ${freeMem}`);

// const files = fs.readdirSync('./');
fs.readdir('$', (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
})
*/

