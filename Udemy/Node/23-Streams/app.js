var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 64});

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var end = '';

readable.on('data',function(chunk){
    var last = chunk.length - 1;
    if(chunk[last] !== ' ')
    {
        while(chunk[last] !== ' ' && chunk[last] !== '.'){
            last = last - 1;
        };
        
        if(end === '')
            writeable.write(`${chunk.slice(0,last)}\n`);
        else
            writeable.write(`${end}${chunk.slice(0,last)}\n`);

        end = chunk.slice(last,chunk.length);

        return;
    }
    writeable.write(`${end}${chunk}\n`);
    end = '';
});