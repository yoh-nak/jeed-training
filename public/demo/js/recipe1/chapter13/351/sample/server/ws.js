var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Web Socket test\n');
	var d = new Date();
	response.write('Date : '+d+'\n');
	response.end();
}).listen(9001);
