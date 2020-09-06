const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const cors = require('cors');

// add cors middleware to allow for cross site request
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port);
