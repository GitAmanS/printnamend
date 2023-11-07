const http = require('http');

function rqListener(req, res){
    console.log("Aman Shaikh");
}

const Server = http.createServer(rqListener);

Server.listen(3000);