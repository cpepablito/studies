'use strict';

var eventEmitter = require('events');

module.exports = class Greetr extends eventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello world!';
    }

    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data); 
    }
}