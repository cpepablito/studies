var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();

// Diference in way parameters are passed to function
obj.greet.call({name: 'Jane Doe'});
obj.greet.apply({name: 'Jane Doe'});