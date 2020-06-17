function Person(firstname, lastname)
{
    this.firstname = firstname;
    this.lastname =  lastname;
}

Person.prototype.greet = function()
{
    console.log('Hello, ' + this.firstname + ' ' + this.lastname + '!');
}

var me = new Person('Pablo','Nunes');

me.greet();

var her = new Person('Fernanda','Lima');

her.greet();

console.log(me.__proto__);
console.log(her.__proto__);
console.log(me.__proto__ === her.__proto__);

