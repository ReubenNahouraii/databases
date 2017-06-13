var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsingfjflkjjkkj
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', '/users', router); // /users path

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}




// var express = require('express')
// var morgan  = require('morgan')

// var app = express()
// //This tells express to log via morgan
// //and morgan to log in the "combined" pre-defined format
// app.use(morgan('combined'))
// //That's it. Everything in your snippet after this are just
// //other variations your might want to use




// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with . Yeah ! you can do it by yourself as well but using body-parser will do what is required and will save your trouble.

// Now , that was just the summary ; in depth , body-parser gives you a middleware which uses nodejs/zlib to unzip incoming request data if its zipped and stream-utils/raw-body to await full raw content of the request body before "parsing it".

// After having the raw contents , body-parser will parse it using one of the four strategies , depending on specific middleware you decided to use :

// bodyParser.raw() : Does not actually parse the body , but just exposes the buffered up contents from before in a buffer on req.body .
// bodyParser.text() : Reads the buffer as plain text and exposes the resulting string on req.body.
// bodyParser.urlencoded() : Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. For comparison; in PHP all of this is automatically done and exposed in $_POST.
// bodyParser.json() : Parses the text as JSON and exposes the resulting object on req.body.
// Only after setting the req.body to the desirable contents will it call the next middleware in the stack, which can then access the request data without having to think about how to unzip and parse it.