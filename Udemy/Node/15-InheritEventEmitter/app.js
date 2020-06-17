'use strict';

/* 
var eventEmitter = require('events');
var util = require('util');

function Greetr(){
    eventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greetr,eventEmitter); 

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

*/
var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet',function(data){
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Pablo');