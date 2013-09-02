// Include modules,
var http = require("http"),
   fs = require("fs");
 
// Create the http server.
http.createServer(function (request, response) {
   // Attach listener on end event.
   request.on("end", function () {
      console.log('begin to read');
      // Read the file.
      fs.readFile("example.txt", 'utf-8', function (error, data) {
         // Write headers.
         response.writeHead(200, {
            'Content-Type': 'text/plain'
         });
         // Increment the number obtained from file.
         data = parseInt(data) + 1;
         // Write incremented number to file.
         fs.writeFile('example.txt', data);
         // End response with some nice message.
         response.end('This page was refreshed ' + data + ' times!');
      });
   });
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end();

}).listen(8888);