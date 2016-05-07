"use strict";

const 
	express = require('express'),
	fb_token = 'EAAK4EFWz8kwBACZBevnf4U67bstSaCBI2AtmB2xoRPpiH0eiqqYXndDLVWyJnmwnMXfYi8xuxEsmSZAq7We15RRhHBwQDPfShdZATv6fh9ZCo7wKosc9JfCxaoAz4HoUzmgIszeBFzgz3fMfNGqpHZAo9SLBBFLNZCr7VQBuzq2AZDZD';
var
	app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res){
	res.type('text/plain');
	res.send('Meadowlark Travel');
});

app.get('/about', function(req,res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});

app.get('/privacy', function(req,res){
	res.type('text/plain');
	res.send(privacyPolicy.txt);
});

app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === fb_token) {
      res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});

// custom 404 page
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not found');
});

// custom 500 page
app.use(function(req,res){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:'+
		app.get('port')+ '; press Ctrl-C to terminate.');
});