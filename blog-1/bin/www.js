const http = require('http');

const port = 8000
const serverHandle = require('../app');

http.createServer(serverHandle).listen(port)