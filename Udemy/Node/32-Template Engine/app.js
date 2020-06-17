var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('index');
});

app.get('/person/:id', function(req, res) {
   res.render('person', {ID : req.params.id, Qstr: req.query.qstr});
});

app.get('/api', function(req, res){
   res.json({firstname:'Jhon', lastname: 'Doe'});
});

app.listen(port);
