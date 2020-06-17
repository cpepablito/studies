const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Simple response
// app.get('/',(req,res) =>{
//     res.send('OK');
// });

require('./controllers/authController')(app);
require('./controllers/projectController')(app);


app.listen(3000);