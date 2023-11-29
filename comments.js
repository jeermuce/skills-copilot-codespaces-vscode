// Create web server
// Run: node server.js
// Open browser to http://localhost:3000
// Note: If you get an error when you run the program, you may need to change the port number.

// Load the http module to create an http server.
var http = require("http");
var fs = require("fs");
var url = require("url");

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    console.log("Request for " + path + " received.");
    switch (path) {
        case "/":
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("Hello World!");
            break;
        case "/index":
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("Hello World!");
            break;
        case "/about":
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("This is the about page");
            break;
        case "/contact":
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("This is the contact page");
            break;
        case "/data":
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify({ message: "Hello World!" }));
            break;
        default:
            response.writeHead(404);
            response.write("404 - Page not found");
    }
    response.end();
});

// Listen on port 3000, IP defaults to
