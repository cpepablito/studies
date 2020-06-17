var util = require('util');

var name = 'Pablo';
var greeting = util.format('Hello, %s', name);
util.log(greeting);