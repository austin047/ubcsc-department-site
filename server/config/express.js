import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import httpStatus from 'http-status';
import expressWinston from 'express-winston';
import expressValidation from 'express-validation';
import helmet from 'helmet';
import winstonInstance from './winston';
import routes from '../routes/index.route';
import config from './config';
import APIError from '../helpers/APIError';
import path from 'path';
import appRoot from 'app-root-path';
import innograph from 'innograph'
import postCtrl from '../controllers/post.controller';
import passport from 'passport';
import session from 'express-session';


const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}


// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());
app.use(session({
  secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable detailed API logging in dev env
if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');

  // app.use(expressWinston.logger({
  //   winstonInstance,
  //   meta: true, // optional: log meta data about request (defaults to true)
  //   msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  //   colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  // }));
}
app.use(express.static(path.join(appRoot.path, 'public/dist')));
app.use(express.static(path.join(appRoot.path, 'public/uploads')));

app.use('/api', routes);


innograph.init('/api/graphql', app, {post: postCtrl});

app.get('/kittens', (req,res) => {
  res.json({names:`routher is ${req.header}`}).status(200);
})


app.get('/', (req, res) => {
  res.sendFile(path.join(appRoot.path, 'public/dist/index.html'));
});

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'ff2855e608ea44e799eb21d5bb9cd57a',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
console.log('Rollback message')
rollbar.log("Hello world to!");

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    // console.log('------------------------\t');
    // console.log(err.stack);
    // console.log('------------------------\t');
    return next(apiError);
  }
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});

// log error in winston transports except when executing test suite
if (config.env !== 'test') {
  app.use(expressWinston.errorLogger({
    winstonInstance
  }));
}

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {// eslint-disable-line no-unused-vars
  rollbar.error(err.stack);
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack  : {}
  })
  
});

export default app;
