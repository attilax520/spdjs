(async () => {

        
    mod = require('./flwUrl2rss.js');
    console.log( await mod.feilonveo2rss());
    throw 5;
  
})();


var http = require('http');

// create a server object:
http.createServer(function (req, res) {
    logger = getLogger();
    (async () => {

        
        message = await feilonveo2rss();
     //   res.status(200).send(message);
         res.write(message); //write a response to the client
        res.end();
      
    })();

}).listen(888); //the server object listens on port 8080

console.log("f");
 