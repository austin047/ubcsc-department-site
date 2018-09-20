import mongoose from 'mongoose';
import util from 'util';
const debug = require('debug')('http');
import http from 'http';


// config should be imported before importing any other file
import config from './server/config/config';
import app from './server/config/express';
import setUpPassport from './server/config/passport';


//const debug = require('debug')('express-mongoose-es6-rest-api:index');


// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;


// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  //throw new Error(`unable to connect to database: ${mongoUri}`);
});
mongoose.connection.once('open', () => {
  //mongoose.connection.openUri('mongodb://127.0.0.1/camp_v12')
   //Call the function to set up passport
   setUpPassport();
})

// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912



  // listen on port config.port
  // app.listen(config.port, () => {
  //   console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  // })

var server = http.createServer(app);

// while (portActive === false) {

server.listen(config.port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + config.port
    : 'Port ' + config.port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {;
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug(`Listening on ' ${bind} and in (${config.env})`);
}

export default server;
