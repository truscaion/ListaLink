
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

var ListaLink = require('./routes/listalink.js');
var ListaLink = new ListaLink('mongodb://localhost/linkuri');

app.get('/', listaLink.arataLink.bind(listaLink));
app.post('/adaugaLink', listaLink.adaugaLink.bind(listaLink));

app.listen(8888);
console.log('Ascultare pe portul: 8888);
