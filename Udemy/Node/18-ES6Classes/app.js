'use strict';

/* 
function Person(firstname, lastname)
{
    this.firstname = firstname;
    this.lastname =  lastname;
}

Person.prototype.greet = function()
{
    console.log('Hello, ' + this.firstname + ' ' + this.lastname + '!');
}
*/

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname + '!');
    }
}

var me = new Person('Jhon','Doe');

me.greet();

var her = new Person('Jane','Doe');

her.greet();

console.log(me.__proto__);
console.log(her.__proto__);
console.log(me.__proto__ === her.__proto__);