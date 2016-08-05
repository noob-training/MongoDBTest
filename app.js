var express = require('express');
var bodyParser = require('body-parser');
var students = require('./src/routes/students');
var indexRoute = require('./src/routes/index');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use('/students',students);
app.use('/',indexRoute);

app.listen(3000, function (err) {
    console.log("Server started at port 3000");
});