var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000))
 
// set the application's root directory 
// (this will set a global so that no matter 
// how many instances of app-root-dir module are 
// installed, they will all return the same 
// directory) 

var path = require('path');


app.use(express.static(path.join(__dirname, '/index.htm')));

app.get('/', function (req, res) {
    return res.redirect('/home');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
