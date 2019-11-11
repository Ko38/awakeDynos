var http = require("http");

const port = process.env.PORT || 5000;
setInterval(function() {
    http.get("http://stockoverflowku.herokuapp.com/");
    http.get("http://awakedynos.herokuapp.com/");
    http.get("http://bubbleblast.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

http.createServer(function (req, res) { 
    console.log("Request: " + req.method + " to " + req.url); 
    res.writeHead(200, "OK"); 
    res.write("<h1>Hello</h1>Node.js is working"); 
    res.end(); 
   }).listen(port); 
console.log("Ready on port 5000");
   