
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var entry = require('./routes/entry');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/components', express.static(__dirname + '/components'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/angularjs/', routes.angular);
app.get('/angularjs/signup', routes.signup);
app.get('/angularjs/admin', routes.admin);

app.get('/api/user', user.list);

app.get('/api/entry', entry.list);
app.get('/api/entry/:id', entry.get);
app.delete('/api/entry/:id', entry.remove);
app.post('/api/entry', entry.create);
app.post('/api/entry/:id', entry.update);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
