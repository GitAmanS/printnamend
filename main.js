const http = require('http');

const routes = require('./routes');

// const server = http.createServer(routes.handler);

routes.listen(4000);
