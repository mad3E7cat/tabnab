var http = require('http');
var fs = require('fs');
fs.readFile('./index_redir.html', function (err, html) {
    if (err) {
        throw err; 
    }
    http.createServer(function (req, res) {
	    res.write(html); 
	    res.end(); 	
    }).listen(8080);
});

