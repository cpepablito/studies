// immediately invoked function expressions

var firstname = 'Jane';

(function (){

    var firstname = 'John';
    console.log(firstname);
}());

console.log(firstname);