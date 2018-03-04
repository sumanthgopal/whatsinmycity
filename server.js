var http = require('http');
var fs = require('fs');

const PORT=process.env.PORT || 3000; 

fs.readFile('./src/app/app.component.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});