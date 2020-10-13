//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Here app.use global middleware is used for connect all routes.
app.use('/', require('./routes/routers'));

app.get('/about', function (req, res) {
  res.render('about');
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}

app.listen(port, function () {
  console.log('Server started successfully on port: ' + port);
});
