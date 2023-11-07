const http = require('http');

const server = http.createServer((req, res) => {
    res.write(`<html>`);
    res.write(`<head><title>node js</title><head>`);

    if (req.url === '/home') {
        res.write(`<h1>Welcome home</h1>`);
        res.end();
    } else if (req.url === '/about') {
        res.write(`<h1>Welcome to About Us page</h1>`);
        res.end();
    } else if (req.url === '/node') {
        res.write(`<h1>Welcome to my Node Js project</h1>`);
        res.end();
    }
    res.write(`</html>`);
});


server.listen(4000);
